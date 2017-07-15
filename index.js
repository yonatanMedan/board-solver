var app = angular.module("app",['ngRoute']);
app.controller("boardCtrl", ["$scope","pazzelSolver","$timeout","boardService","$location","helperService",boardCtrl]);
app.controller("finishedCtrl",["$scope","$routeParams",finishedCtrl]);
app.service("pazzelSolver",["$timeout",solve2DArrayRoute]);
app.service("boardService",[boardService]);
app.service("helperService",[helperService]);

//router
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./main/boardView.html",
        controller : "boardCtrl"
    })
    .when("/finished/:steps/:time", {
        templateUrl : "./finishedScreen/finished.html",
        controller:"finishedCtrl"
    });

});
