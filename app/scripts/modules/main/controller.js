'use strict';
define([
  'angular',
  //Self module components
  './directive',
//  './routing'
//  './service',
], function(angular) {
  var module = angular.module('MainModule',
          [
            'Main.directive',
            'AppModule.configuration'
          ]);

  module.controller('MainController', [
    '$scope',
    '$log',
    'APP',
    'APP_INFO',
    function(
            $scope,
            $log,
            APP,
            APP_INFO
            )
    {
      $scope.envMode = APP.ENV_MODE;
      $scope.appInfo = APP_INFO;
    }]);

});