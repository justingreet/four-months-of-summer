'use strict';

var dates = [
  {
    title: 'May 1, 2016',
    subtitle: 'The Pittsburgh Marathon',
    imageUrl: '../img/may12016.jpg'
  },
  {
    title: 'May 2, 2016',
    subtitle: 'Everything hurts',
    imageUrl: '../img/may22016.jpg'
  },
  {
    title: 'May 3, 2016',
    subtitle: 'Working late',
    imageUrl: '../img/may32016.jpg'
  },
  {
    title: 'May 4, 2016',
    subtitle: '2k and chill',
    imageUrl: '../img/stufff.jpg'
  },
  {
    title: 'May 5, 2016',
    subtitle: 'The Google 5k',
    imageUrl: '../img/may52016.jpg'
  },
  {
    title: 'May 6, 2016',
    subtitle: 'Hacking the mainframe: the Megan Fiasconaro story',
    imageUrl: '../img/may62016.jpg'
  },
  {
    title: 'May 7, 2016',
    subtitle: 'Let\'s Dance, and other 80s classics',
    imageUrl: '../img/may72016.jpg'
  },
  {
    title: 'May 8, 2016',
    subtitle: 'Happy Mother\'s Day',
    imageUrl: '../img/may82016.jpg'
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

  var getDayId = function($route) {
    return $route.current.params.dateId;
  };

  $routeProvider.when('/dates/:dateId', {
    templateUrl: 'dates/date.html',
    controller: 'DateController',
    controllerAs: 'ctrl',
    resolve: {
      day: getDay,
      dayId: getDayId
    }
  });
  $routeProvider.otherwise({redirectTo: '/dates/0'});
}]);
