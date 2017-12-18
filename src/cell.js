let Cell = function(row,col){
  this.row = row;
  this.col = col;
  this.status = 0;
}

Cell.prototype.isAlive = function(){
  return this.status == 1;
}

Cell.prototype.makeCellAlive = function() {
  this.status = 1;
}

Cell.prototype.makeCellDead = function() {
  this.status = 0;
}

let getNeighbours = function(cell,table){
  let neighbours = [];
  for(let row=-1;row<2;row++){
    for(let col=-1;col<2;col++){
      if(row!=0||col!=0){
        neighbours.push(table[cell.row+row][cell.col+col]);
      }
    }
  }
  return neighbours;
}

Cell.prototype.getNoOfAliveNeighbours = function(table){
  let neighbours = getNeighbours(this,table);
  return neighbours.reduce(function(liveNeighbourCount,cell){
    if(cell.isAlive()){
      liveNeighbourCount++;
    }
    return liveNeighbourCount;
  },0);
}

// module.exports = Cell;
