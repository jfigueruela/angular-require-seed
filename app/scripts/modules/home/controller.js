'use strict';
define([
  'angular',
  //Self module components
//  './directive',
  './routing',
//  './service',
], function(angular) {
  angular.module('HomeModule',
          [
            'HomeModule.routing'
          ])
          .controller('HomeController', [
    '$scope',
    '$log',
    function(
            $scope,
            $log
            )
    {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }]);

});