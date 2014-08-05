'use strict';
define([
  'angular',
  './directive'
], function(angular) {
  var module = angular.module('LangModule',
          [
            'pascalprecht.translate',
            'ngCookies',
            'Lang.directive'
          ]);
  module.config(['$translateProvider', function($translateProvider) {
      $translateProvider.useStaticFilesLoader({
        //TODO improve translation dir to relative path
        prefix: 'scripts/modules/lang/translations/',
        suffix: '.json'
      }).preferredLanguage('es').fallbackLanguage(['es', 'en', 'de']).useLocalStorage();
    }]);


  module.controller('LangController', function($scope, $translate, $rootScope) {
    $scope.changeLang = function(key) {
      $translate.use(key);
    };
    $rootScope.$on('$translateChangeSuccess', function() {
      $scope.currentStack = $translate.fallbackLanguage();
      $scope.currentPref = $translate.preferredLanguage();
      $scope.currentLang = $translate.use();
    });
  });
});