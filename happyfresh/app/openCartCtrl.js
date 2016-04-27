app.controller('openCartCtrl', function ($scope, $modalInstance, $route, item, Data,variableService, improveService, localStorageService) {
    
      $scope.productSave = localStorageService.get('productStorage'); // to refresh the value of storage 
});
