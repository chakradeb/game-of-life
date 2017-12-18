const TABLESIZE = 40;

let createHTMLTable = function(){
  let html = "";
  let id = 1;
  for(let row=0;row<TABLESIZE;row++){
    html+=`<tr>\n`;
    for(let col=0;col<TABLESIZE;col++){
      html+=`<td id="${id}"></td>\n`;
      id++;
    }
    html+=`</tr>\n`;
  }
  document.getElementById('table').innerHTML = html;
}

let getRowCol = function(id){
  console.log(id);
  row = Math.floor(id/TABLESIZE);
  col = (id%TABLESIZE)-1;
  return {'row':row,'col':col};
}

let getid = function(row,col){
  return (row*TABLESIZE)+(col+1);
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

let table = createTable(TABLESIZE);
createHTMLTable();

let startGameOfLife = function(){
  setInterval(simulateLife,500);
}
