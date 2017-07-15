function tile (_row,_col){
  this.start = false;
  this.end = false;
  this.blocked = false;
  this.route = false;
  this.row = _row;
  this.col = _col;
}
function boardCtrl($scope,pazzelSolver,$timeout){

  console.log(pazzelSolver);
  $scope.chooseEnd = false;
  $scope.chooseStart = false;
  $scope.start = null;
  $scope.end = null;
  $scope.board = [];
  $scope.selected = null;
  for (var i = 0; i < 12; i++) {
    var row = [];
    for (var j = 0; j < 12; j++) {
      row.push(new tile(i,j));
    }
    console.log(row);
    $scope.board.push(row);
  }
  console.log($scope.board);


  $scope.go = function () {
    alert("go");
    pazzelSolver.solve($scope.board,$scope.start,$timeout);
  };
  $scope.onClicked = function(tile){
    if($scope.chooseStart){
      if($scope.start==null){
        tile.start = true;
        $scope.start = tile;
      }else{
        $scope.start.start = false;
        tile.start = true;
        $scope.start = tile;
      }
      $scope.chooseStart = false;


    }else if($scope.chooseEnd){
      if($scope.end==null){
        tile.end = true;
        $scope.end = tile;


      }else{
        $scope.end.end = false;
        tile.end = true;
        $scope.end = tile;
      }
        $scope.chooseEnd = false;
    }else{
      if(tile.blocked == false){
        tile.blocked = true;
      }else{
        tile.blocked = false;
      }
    }

  };
  $scope.activeChooseStart = function(){
    $scope.chooseStart = true;
    $scope.chooseEnd = false;
  };
  $scope.activeChooseEnd = function() {
    $scope.chooseStart = false;
    $scope.chooseEnd = true;

  };
}
