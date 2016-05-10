var fmosApp = angular.module('fmosApp');

fmosApp.controller('DateController', ['$location', '$sce', 'day', 'dayId', function($location, $sce, day, dayId) {
  this.title = day.title;
  this.subtitle = day.subtitle || '';
  this.description = $sce.trustAsHtml(day.description);
  this.imageUrl = day.imageUrl;
  this.dayId = parseInt(dayId);

  this.ngLocation = $location;

  this.isExpanded = false;

  this.goToNext = function() {
    this.ngLocation.path('dates/' + (this.dayId + 1));
  };

  this.goToPrev = function() {
    this.ngLocation.path('dates/' + (this.dayId - 1));
  };

  this.toggleExpansion = function() {
    if (!this.description) { return; }
    this.isExpanded = !this.isExpanded;
  }
}]);