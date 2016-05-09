var fmosApp = angular.module('fmosApp');

fmosApp.controller('DateController', ['$location', 'day', 'dayId', function($location, day, dayId) {
  this.title = day.title;
  this.subtitle = day.subtitle || '';
  this.imageUrl = day.imageUrl;
  this.dayId = parseInt(dayId);

  this.ngLocation = $location;

  this.goToNext = function() {
    this.ngLocation.path('dates/' + (this.dayId + 1));
  };

  this.goToPrev = function() {
    this.ngLocation.path('dates/' + (this.dayId - 1));
  };
}]);