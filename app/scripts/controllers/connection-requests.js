'use strict';

/**
 * @ngdoc function
 * @name new8App.controller:ConnectionRequestsCtrl
 * @description
 * # ConnectionRequestsCtrl
 * Controller of the new8App
 */
angular.module('new8App')
  .controller('ProfileCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
  .controller('TabsCtrl', ['$scope', function ($scope) {
      $scope.tabs = [{
              title: 'One',
              url: 'one.tpl.html'
          }, {
              title: 'Two',
              url: 'two.tpl.html'
          }, {
              title: 'Three',
              url: 'three.tpl.html'
      }];

      $scope.currentTab = 'one.tpl.html';

      $scope.onClickTab = function (tab) {
          $scope.currentTab = tab.url;
      }

      $scope.isActiveTab = function(tabUrl) {
          return tabUrl == $scope.currentTab;
      }
  }]);
