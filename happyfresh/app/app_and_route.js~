var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

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
    
