let Cell = function(row,col){
  this.row = row;
  this.col = col;
  this.neighbours = [];
  this.status = 0;
}

Cell.prototype.isLive = function(){
  return this.status == 1;
}

Cell.prototype.getNeighbours = function(table){
  let neighbours = [];
  for(let row=-1;row<2;row++){
    for(let col=-1;col<2;col++){
      if(row!=0&&col!=0){
        neighbours.push(table[this.row+row][this.col+col]);
      }
    }
  }
  return neighbours;
}

module.exports = Cell;
