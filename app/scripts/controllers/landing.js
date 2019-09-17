'use strict';

/**
 * @ngdoc function
 * @name new8App.controller:LandingCtrl
 * @description
 * # LandingCtrl
 * Controller of the new8App
 */
angular.module('new8App')
  .controller('LandingCtrl', ['$scope', '$state', 'userService', function () {
    $scope.currentPath = $location.path('/');
    function($scope, $state, userService) {

        $scope.loggedIn = userService.isLoggedIn();

        $scope.login = function() {
          //userService.login();
          $state.go('/dashboard');
        };
        $scope.loggedOut = userService.isLoggedOut();
        $scope.logout = function() {
          //userService.logout();
          $state.go('/');
        };

      }
  }]);
