function solve2DArrayRoute($scope,$timeout){
  return{
    solve:function(array,start){
      var startRow = start.row;
      var startCol = start.col;
      console.log("solve2DArrayRoute");
      console.log("row"+" "+startRow);
      var done = solveArrayRec(array,startRow,startCol);
      return done;
    }
  };


}
function valid(array,row,col){
  console.log("row"+row+" "+"col "+col);
  if((row<0||row>=array.length||col<0||col>=array[row].length)){
    return false;
  }else{
    console.log("good col row");
    var tile = array[row][col];
    if(tile.route==true||tile.blocked==true||tile.passed ==true){
      console.log("root/block existes "+false);
      return false;
    }else{
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}
function solveArrayRec(array,row,col){

  if(!valid(array,row,col)){
    return false;
  }
  var tile = array[row][col];
  if(tile.end){
    tile.route = true;
    return true;
  }

  tile.route = true;

  var done = solveArrayRec(array,row+1,col);
  if(!done){
    done = solveArrayRec(array,row,col+1);
  }
  if(!done){
    done = solveArrayRec(array,row,col-1);
  }
  if(!done){
    done = solveArrayRec(array,row-1,col);
    console.log(done);
  }
  if(!done){
    tile.passed = true;
    tile.route = false;
  }
  return done;
}
