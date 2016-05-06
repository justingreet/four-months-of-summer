'use strict';

var dates = [
  {
    date: 'May 1, 2016',
    imageUrl: '../img/may12016.jpg'
  },
  {
    date: 'May 2, 2016',
    imageUrl: '../img/may22016.jpg'
  },
  {
    date: 'May 3, 2016',
    imageUrl: '../img/may32016.jpg'
  },
  {
    date: 'May 4, 2016',
    imageUrl: '../img/stuffffs.jpg'
  },
  {
    date: 'May 5, 2016',
    imageUrl: '../img/may52016.jpg'
  }
];

// Declare app level module which depends on views, and components
angular.module('fmosApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  var getDay = function($route) {
    var dayIndex = $route.current.params.dateId;
    return dates[dayIndex];
  };

  $routeProvider.when('/dates/:dateId', {
    templateUrl: 'dates/date.html',
    controller: 'DateController',
    controllerAs: 'ctrl',
    resolve: {
      day: getDay
    }
  });
  $routeProvider.otherwise({redirectTo: '/dates/0'});
}]);
