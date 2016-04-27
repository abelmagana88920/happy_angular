app.controller('openCartCtrl', function ($scope, $modalInstance, $route, item, Data,variableService, improveService, localStorageService) {
    
 
     //$scope.productSave = localStorageService.get('productStorage');


     $scope.save = function() {
            $modalInstance.close(localStorageService.get('productStorage'));

     };

});
