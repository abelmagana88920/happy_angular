var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate','underscore']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      title: 'Fresh',
      templateUrl: 'partials/fresh.html',
      controller: 'freshCtrl',
      paramTableName: 'N/A'
    })
     
    .otherwise({
      redirectTo: '/'
    });;
}]);


var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function($window) {
  return $window._;
}]);
    