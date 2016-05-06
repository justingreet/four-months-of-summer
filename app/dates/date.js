var fmosApp = angular.module('fmosApp');

fmosApp.controller('DateController', ['day', function(day) {
  this.date = day.date;

  this.imageUrl = day.imageUrl;
}]);