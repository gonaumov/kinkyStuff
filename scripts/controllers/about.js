'use strict';

/**
 * @ngdoc function
 * @name kinkyStuffApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kinkyStuffApp
 */
angular.module('kinkyStuffApp')
  .controller('AboutCtrl', function ($scope) {
      $scope.$parent.currentView = "about";
  });
