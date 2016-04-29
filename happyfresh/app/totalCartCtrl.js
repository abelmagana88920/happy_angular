app.controller('totalCartCtrl', function ($scope, $modalInstance, $route, item, Data,variableService, improveService, localStorageService) {
    
     //$scope.$parent.productSaveTemp =  localStorageService.get('productStorage['+ $scope.menuCategory.id +']');
      

     if (localStorageService.get('productStorage['+13+']') !== null) {
        $scope.productSave13 = localStorageService.get('productStorage['+13+']'); // get  product cart directives
        $scope.productSave13.data = _.where($scope.productSave13.data, {category: 13});  
    }

     if (localStorageService.get('productStorage['+14+']') !== null) {
        $scope.productSave14 = localStorageService.get('productStorage['+14+']'); // get  product cart directives
        $scope.productSave14.data = _.where($scope.productSave14.data, {category: 14});  
    }
                 

     $scope.save = function() {


            $modalInstance.close();
     };

});
