var app = angular.module("myList", []);
app.controller("listCtrl",["$scope",function($scope){
	$scope.todoList = [{"title":"Start adding your List", "done":false}];
	
	$scope.addTask=function(){
		$scope.todoList.push({ 'title':$scope.taskInput,"done":false});
		$scope.taskInput=''
    };

	$scope.deleteCompleted=function(){

		$scope.todoList=$scope.todoList.filter(function(item){

		return !item.done

		});


		};

		 $scope.removeItem = function(index) {
	        $scope.todoList.splice(index, 1)
	    };

}]);
		


