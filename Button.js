(function(){
var myApp= angular.module("App",[]);
var button = function($scope){
	$scope.selection= "none";
	$scope.firstButton= function(){
		$scope.selection="first one";
	}
	$scope.secondButton= function(){
		$scope.selection= "second one";
	}
}
myApp.controller("myButton",["$scope",button]);
}());