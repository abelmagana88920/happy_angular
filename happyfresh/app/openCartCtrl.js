app.controller('openCartCtrl', function ($scope, $modalInstance, $route, item, Data,variableService, improveService, localStorageService) {
    
     $scope.save = function() {
            $modalInstance.close(localStorageService.get('productStorage['+ $scope.menuCategory.id +']'));
     };

});
