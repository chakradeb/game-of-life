let Cell = require('./src/cell.js');
const TABLESIZE = 10;

let createTable = function(tableSize){
  let table = [];
  for(let row=0;row<tableSize;row++){
    let rowData = [];
    for(let col=0;col<tableSize;col++){
      let cell = new Cell(row,col);
      rowData.push(cell);
    }
    table.push(rowData);
  }
  return table;
}

let setAction = function(cell,noOfAliveCells){
  if(noOfAliveCells<2){
    cell.makeCellDead();
  }
  if(noOfAliveCells==3){
    cell.makeCellAlive();
  }
  if(noOfAliveCells>3){
    cell.makeCellDead();
  }
}

let simulateLife = function(){
  let table = createTable(TABLESIZE);
  for(row=1;row<TABLESIZE-1;row++){
    for(col=1;col<TABLESIZE-1;col++){
      let cell = table[row][col];
      setAction(cell,cell.getNoOfAliveNeighbours(table));
    }
  }
  return table;
}
