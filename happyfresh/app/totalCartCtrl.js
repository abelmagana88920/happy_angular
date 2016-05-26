app.controller('totalCartCtrl', function ($scope, $modalInstance, $route, item, Data,variableService, improveService, localStorageService) {
      
     /*  $scope.productSaveIndexTotal = {}; //initialization
       for ( var i = 0, len = sessionStorage.length; i < len; ++i ) {    
           // objectPr =  JSON.parse( localStorage.getItem( localStorage.key( i ) )  );
            numb = improveService.stringGetNumber(sessionStorage.key( i ));
            if (localStorageService.get('productStorage['+numb+']') !== null) {
                $scope.productSaveIndexTotal[numb] = localStorageService.get('productStorage['+numb+']'); // get  product cart directives
                $scope.productSaveIndexTotal[numb].data = _.where($scope.productSaveIndexTotal[numb].data, {category: numb});  
            }
       }  */
              
     $scope.save = function() {
            $modalInstance.close();
     };

});
