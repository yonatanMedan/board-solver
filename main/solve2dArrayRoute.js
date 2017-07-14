function solve2DArrayRoute($timeout){
  console.log($timeout);

  function solveArrayRec(array,row,col){
    var tile;
    return new Promise(function(resolve,reject){
      if(!valid(array,row,col)){
        reject("not Valid");
        return;
      }else{
        tile = array[row][col];
        if(tile.end){
          tile.route = true;
          resolve(true);
        }else{
          tile.route = true;

          resolve(false);
        }
      }


    }).then(function(done) {

      if(!done){
        return $timeout(function(){

        },1000).then(function() {
          return solveArrayRec(array,row+1,col);
        }).then(function(done){
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
        },function(){
          return false;
        }).then(function(done){
          if(!done){
            done = solveArrayRec(array,row-1,col);
          }else{
            return done;
          }
        },function(){
          return false;
        }).then(function(done){
          if(!done){
            tile.passed = true;
            tile.route = false;
          }
          return done;
        },function() {
          return false;
        });

      }else{
        return done;
      }
    },function() {
      return false;
    });





  }
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
