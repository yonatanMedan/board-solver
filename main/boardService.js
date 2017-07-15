function tile (_row,_col){
  this.start = false;
  this.end = false;
  this.blocked = false;
  this.route = false;
  this.row = _row;
  this.col = _col;
}
function boardService(){

  return{
    createBoard:function(){
      var board = [];
      for (var i = 0; i < 12; i++) {
        var row = [];
        for (var j = 0; j < 12; j++) {
          row.push(new tile(i,j));
        }
        board.push(row);
      }
      return board;
    }
  };
}
