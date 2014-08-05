/*jshint unused: vars */
define(['angular',
  'modules/home/controller',
  'modules/about/controller',
  'modules/contact/controller'
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
            /*angJSDeps*/
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngRoute',
            'ngAnimate',
            'ngTouch'
          ]);
});
