var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      title: 'Products',
      templateUrl: 'partials/products.html',
      controller: 'productsCtrl',
      paramTableName: 'product'
    })
    .when('/name', {
      title: 'Name',
      templateUrl: 'partials/names.html',
      controller: 'namesCtrl',
      paramTableName: 'name'
    })
      .when('/wow', {
      title: 'Name',
      templateUrl: 'partials/wow.html',
      controller: 'wowCtrl',
      paramTableName: 'name'
    })
    .otherwise({
      redirectTo: '/'
    });;
}]);
    
