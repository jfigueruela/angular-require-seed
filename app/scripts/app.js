/*jshint unused: vars */
define(['angular',
  './configuration',
  'modules/home/controller',
  'modules/about/controller',
  'modules/contact/controller',
  'modules/lang/controller'
]/*deps*/, function(angular)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name codebustersJsApp
   * @description
   * # codebustersJsApp
   *
   * Main module of the application.
   */
  return angular
          .module('codebustersJsApp',
          [
            'HomeModule',
            'AboutModule',
            'ContactModule',
            'LangModule',
            /*angJSDeps*/
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngRoute',
            'ngAnimate',
            'ngTouch',
            'pascalprecht.translate'
          ]);
//                  .config(['$translateProvider', function($translateProvider) {
//      $translateProvider.translations('en', {
//        'TITLE': 'Hello',
//        'FOO': 'This is a paragraph'
//      });
//
//      $translateProvider.translations('de', {
//        'TITLE': 'Hallo',
//        'FOO': 'Dies ist ein Paragraph'
//      });
//
//      $translateProvider.preferredLanguage('de');
//    }]);
});
