function solve2DArrayRoute($timeout){
 //the recursive function
  var steps = 1;
  function solveArrayRec(array,row,col){
    var tile;

    return $timeout(function(){

    },100).then(function(){
      if(!valid(array,row,col)){
        return false;
      }else{

        tile = array[row][col];
        if(tile.end){
          tile.route = true;
          return true;
        }else{
          steps++;
          tile.route = true;
          return solveArrayRec(array,row+1,col).then(function(done){
            if(!done){
              return solveArrayRec(array,row,col+1);
            }else{
              return done;
            }
          }).then(function(done){
            if(!done){
              return solveArrayRec(array,row,col-1);
            }else{
              return done;
            }
          }).then(function(done){
            if(!done){
              return solveArrayRec(array,row-1,col);
            }else{
              return done;
            }
          }).then(function(done){
            if(!done){
              tile.passed = true;
              tile.route = false;
            }else{
              return done;
            }
          });
        }
      }
    });
}
  return{
    solve:function(array,start){
      var startRow = start.row;
      var startCol = start.col;
      console.log("solve2DArrayRoute");
      console.log("row"+" "+startRow);
      return solveArrayRec(array,startRow,startCol);
    },
    getSteps:function(){
      var temp  = steps;
      steps  = 1;
      return temp;
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
