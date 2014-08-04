define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name codebustersJsApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the codebustersJsApp
   */
  angular.module('codebustersJsApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
