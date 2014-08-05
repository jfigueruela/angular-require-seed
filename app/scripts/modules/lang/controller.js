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
      }).preferredLanguage(getBrowserLang())
              .fallbackLanguage(['es', 'en', 'de']).useLocalStorage();
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

  /**
   * Get actual browser language.
   * @returns {String}
   */
  function getBrowserLang() {
    var lang = navigator.language || navigator.userLanguage;
    var language_complete = lang.split("-");
    return (language_complete[0]);
  }
});