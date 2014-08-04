define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name codebustersJsApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the codebustersJsApp
   */
  angular.module('codebustersJsApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
