'use strict';

/**
 * @ngdoc function
 * @name kinkyStuffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kinkyStuffApp
 */
angular.module('kinkyStuffApp')
  .controller('MainCtrl', function ($scope, $http) {
	  
	   $scope.$parent.currentView = "main";
	   
	   $scope.answers = []; 
	   $scope.$watch("answers", function(oldValue, newValue) {
		    var result = 0;
		    angular.forEach($scope.answers, function(currentValue) {
                if(currentValue.selected) {
					 result+= parseInt(currentValue.value,10);
				}
			}, result);
		    $scope.result = result;
	   }, true);
	   	  
	   $http.get('../data/data.json').success(function(data) {
	 	    $scope.answers = data;
		    $scope.answers[0]['displayed'] = true;
	   });
	   
	   $scope.changeStep = function(answer, iterationNum, backward) {
		   if(typeof backward === 'undefined') {
		       delete answer.displayed;
		       $scope.answers[++iterationNum].displayed = true;
	       } else if(backward === true) {
			   delete answer.displayed;
		       $scope.answers[--iterationNum].displayed = true;
		   } else {
			   delete answer.displayed;
			   angular.forEach($scope.answers, function(currentValue) {
			       currentValue.selected = false;
			   });
		       $scope.answers[0].displayed = true;
		   }
	   }
  });
	
