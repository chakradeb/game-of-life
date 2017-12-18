// let Cell = require('./src/cell.js');

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
