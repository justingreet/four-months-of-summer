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
    imageUrl: '../img/may72016.jpg',
    description: '<p>My cousin James picked up a habit of overusing the' +
    ' word \'relax\'. He\'s aware of it after the fact, but still can\'t ' +
    'prevent his lungs from letting the word escape. We found ourselves at the' +
    ' bleeding edge of the crowd as \'the Ronald Reagans\' played hours of' +
    ' songs I didn\'t realize I knew. This was hours after Kasey and I ate ' +
    'some food (she got an ice-cream sandwich, and I got half a pulled-pork' +
    ' sandwich) at the shmorgishborg over discussion of her professional ' +
    'gymnastics career. In retrospect the events of a day feel so...eclectic.' +
    '</p>'
  },
  {
    title: 'May 8, 2016',
    subtitle: 'Happy Mother\'s Day',
    imageUrl: '../img/may82016.jpg',
    description: '<p>Drink up you crazy kids. Married for almost 40 years,' +
    ' and you\'re still overjoyed when your kids take you out to lunch. Look' +
    ' at your eyes. You\'re present in a way I only hope to be most of the' +
    ' time.</p><p>Here\'s to 40 more.</p>'
  },
  {
    title: 'May 9, 2016',
    subtitle: 'What I Talk About When I Talk About Running',
    // TODO(jgreet): Update
    imageUrl: '../img/may92016.jpg',
    description: '<p>Murakami talks about how we have only a finite amount of' +
    ' time and energy. He\'s decided to channel his energy into writing' +
    ' novels. When asked about the most important characteristic that a' +
    ' novelist must have, he says it\'s obvious: talent. Next on the list is' +
    ' focus, followed by endurance. The latter two can be trained and' +
    ' improved. Every day, he sits at his desk for three or four hours and' +
    ' focuses singularly on his writing. To what kind of discipline do I' +
    ' choose to apply my energy?</p> <blockquote>If you\'re going to while' +
    ' away the years, it\'s far better to live them with clear goals and fully' +
    ' alive than in a fog, and I believe running helps you do that. Exerting' +
    ' yourself to the fullest within your individual limits: that\'s the ' +
    'essence of running, and a metaphor for life - and for me, for writing as' +
    ' well.</blockquote>'
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
