var app = angular.module("app",[]);
app.controller("boardCtrl", ["$scope","pazzelSolver","$timeout",boardCtrl]);
app.service("pazzelSolver",[solve2DArrayRoute]);
