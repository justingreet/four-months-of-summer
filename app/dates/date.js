var fmosApp = angular.module('fmosApp');

fmosApp.controller('DateController', ['day', function(day) {
  this.day = day;

  this.stuff = 'hey there';
}]);