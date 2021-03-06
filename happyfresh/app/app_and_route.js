startPage = Date.now();
var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate','underscore','LocalStorageModule','ngScrollbar']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/:category', {
      title: 'Fresh',
      templateUrl: 'partials/fresh.html',
      controller: 'freshCtrl',
      paramTableName: 'N/A',
      resolve: {
        delay: function($q, $timeout) {
          var delay = $q.defer();
         // $timeout(delay.resolve, (Date.now() - startPage));
         $timeout(delay.resolve, 400);
          return delay.promise;
        }
      }
    })
     
    .otherwise({
      redirectTo: '/'
    });;
}]);


var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function($window) {
  return $window._;
}]);
    
