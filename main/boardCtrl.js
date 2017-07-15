
function boardCtrl($scope,pazzelSolver,$timeout,boardService,$location,helperService){
  $scope.clickedColor = "#2e2eb4";
  $scope.routeColor = "#7fc21e";
  $scope.defaultTileColor = "#800085";
  $scope.chooseEnd = false;
  $scope.chooseStart = false;
  $scope.start = null;
  $scope.end = null;
  $scope.board = [];
  $scope.selected = null;
  $scope.board = [];
  $scope.board = boardService.createBoard();
  $scope.go = function () {
    var startTime = new Date();
    var endTime;
    pazzelSolver.solve($scope.board,$scope.start,$timeout).then(function(done){
    steps = pazzelSolver.getSteps();
      if(done){
        endTime = new Date();
        var totalTime = endTime-startTime;
        var time = helperService.formatTime(totalTime);


        $location.path("/finished/"+steps+"/"+time);
      }else{
        alert("not possible refresh and try again");
      }
    });
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
