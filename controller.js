const TABLESIZE = 20;
let table = createTable(TABLESIZE);

let getRowCol = function(id){
  console.log(id);
  row = Math.floor(id/20);
  col = (id%20)-1;
  return {'row':row,'col':col};
}

let getid = function(row,col){
  return (row*20)+(col+1);
}

let initiateLife = function() {
  let id = event.target.id;
  let cell = document.getElementById(id);
  let cellDetails = getRowCol(id);
  table[cellDetails.row][cellDetails.col].makeCellAlive();
  cell.style = "background-color: black";
}

let drawAliveCell = function(row,col){
  let id = getid(row,col);
  let cell = document.getElementById(id);
  cell.style = "background-color: black";
}

let drawDeadCell = function(row,col){
  let id = getid(row,col);
  let cell = document.getElementById(id);
  cell.style = "background-color: white";
}

let simulateLife = function(){
  for(row=1;row<TABLESIZE-1;row++){
    for(col=1;col<TABLESIZE-1;col++){
      let cell = table[row][col];
      setAction(cell,cell.getNoOfAliveNeighbours(table));
      if(cell.isAlive()){
        drawAliveCell(row,col);
      }else{
        drawDeadCell(row,col);
      }
    }
  }
}

let startGameOfLife = function(){
  setInterval(simulateLife,1000);
}
