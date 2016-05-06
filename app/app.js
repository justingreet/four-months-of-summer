'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dates/:dateId', {
    templateUrl: 'dates/date.html',
    controller:,
    controllerAs: 'ctrl',
    resolve: {
      day: getDay
    }
  });
  $routeProvider.otherwise({redirectTo: '/dates/1'});
}]);

getDay = function($route) {
  var dayId = $route.current.params.dateId;
};
