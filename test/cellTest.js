const assert = require('assert');
let Cell = require('../src/cell.js');
let test = {};
exports.test = test;

test['isAlive should return true if a cell is alive'] = function(){
  let cell = new Cell(0,0);
  cell.makeCellAlive();

  assert.ok(cell.isAlive());
}


test['isAlive should return false if a cell is not alive'] = function(){
  let cell = new Cell(0,0);

  assert.ok(!cell.isAlive());
}

test['makeCellAlive should alive a cell'] = function(){
  let cell = new Cell(0,0);
  cell.makeCellAlive();

  assert.equal(cell.status,1);
}

test['makeCellDead should kill an alive cell'] = function(){
  let cell = new Cell(0,0);
  cell.makeCellAlive();
  cell.makeCellDead();

  assert.equal(cell.status,0);
}

test['getNoOfAliveNeighbours should return how many neighbour cells are alive'] = function(){
  let cell1 = new Cell(0,0);
  let cell2 = new Cell(0,1);
  let cell3 = new Cell(0,2);
  let cell4 = new Cell(1,0);
  let cell5 = new Cell(1,1);
  let cell6 = new Cell(1,2);
  let cell7 = new Cell(2,0);
  let cell8 = new Cell(2,1);
  let cell9 = new Cell(2,2);

  let table = [
    [cell1,cell2,cell3],
    [cell4,cell5,cell6],
    [cell7,cell8,cell9]
  ]

  cell2.makeCellAlive();
  cell6.makeCellAlive();

  assert.equal(cell5.getNoOfAliveNeighbours(table),2);
}
