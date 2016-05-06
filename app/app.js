'use strict';

// Declare app level module which depends on views, and components
angular.module('fmosApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  var getDay = function($route) {
    var dayId = $route.current.params.dateId;
    return {};
  };

  $routeProvider.when('/dates/:dateId', {
    templateUrl: 'dates/date.html',
    controller: 'DateController',
    controllerAs: 'ctrl',
    resolve: {
      day: getDay
    }
  });
  $routeProvider.otherwise({redirectTo: '/dates/1'});
}]);
