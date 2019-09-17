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
        templateUrl: 'views/dashboard.html',
        //controller: 'LandingCtrl',
        //controllerAs: 'addClient'
      })

      /*.when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })*/
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
      .when('/client', {
        templateUrl: 'views/client.html',
        //controller: 'ClientCtrl',
        //controllerAs: 'client'
      })
      .when('/add-client', {
        templateUrl: 'views/add-client.html',
        //controller: 'AddClientCtrl',
        //controllerAs: 'addClient'
      })
      .when('/connection-requests', {
        templateUrl: 'views/connection-requests.html',
        //controller: 'AddClientCtrl',
        //controllerAs: 'addClient'
      })
      .when('/exercises', {
        templateUrl: 'views/exercises.html',
        //controller: 'AddClientCtrl',
        //controllerAs: 'addClient'
      })
      .when('/exercise', {
        templateUrl: 'views/exercise.html',
        //controller: 'exerciseCtrl',
        //controllerAs: 'exercise'
      })
      .when('/schedule-exercise', {
        templateUrl: 'views/schedule-exercise.html',
        //controller: 'scheduleExerciseCtrl',
        //controllerAs: 'scheduleExercise'
      })
      .when('/upload-exercise', {
        templateUrl: 'views/upload-exercise.html',
        //controller: 'AddClientCtrl',
        //controllerAs: 'addClient'
      })
      .when('/quotes', {
        templateUrl: 'views/quotes.html',
        //controller: 'AddClientCtrl',
        //controllerAs: 'addClient'
      })
      .when('/add-quote', {
        templateUrl: 'views/add-quote.html',
        //controller: 'AddQuoteCtrl',
        //controllerAs: 'addQuote'
      })
      .when('/quote', {
        templateUrl: 'views/quote.html',
        //controller: 'QuoteCtrl',
        //controllerAs: 'Quote'
      })
      .when('/schedule-quote', {
        templateUrl: 'views/schedule-quote.html',
        //controller: 'scheduleQuoteCtrl',
        //controllerAs: 'scheduleQuote'
      })
      .when('/reminders', {
        templateUrl: 'views/reminders.html',
        //controller: 'AddClientCtrl',
        //controllerAs: 'addClient'
      })
      .when('/reminder', {
        templateUrl: 'views/reminder.html',
        //controller: 'ReminderCtrl',
        //controllerAs: 'Reminder'
      })
      .when('/reminder-reply', {
        templateUrl: 'views/reminder-reply.html',
        //controller: 'ReminderReplyCtrl',
        //controllerAs: 'ReminderReply'
      })
      .when('/notifications', {
        templateUrl: 'views/notifications.html',
        //controller: 'AddClientCtrl',
        //controllerAs: 'addClient'
      })


      .otherwise({
        redirectTo: '/'
      });
  });

