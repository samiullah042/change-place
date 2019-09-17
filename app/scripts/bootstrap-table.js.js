'use strict';

/**
 * @ngdoc overview
 * @name new8App
 * @description
 * # new8App
 *
 * Main module of the application.
 */
angular
  .module('new8App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/account-settings', {
        templateUrl: 'views/account-settings.html',
        //controller: 'AccountSettingsCtrl',
        //controllerAs: 'account-settings'
      })
      .when('/clients', {
        templateUrl: 'views/clients.html',
        //controller: 'ClientsCtrl',
        //controllerAs: 'clients'
      })

      .otherwise({
        redirectTo: '/dashboard'
      });
  });
