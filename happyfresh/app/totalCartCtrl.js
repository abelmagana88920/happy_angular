app.controller('totalCartCtrl', function ($scope, $modalInstance, $route, item, Data,variableService, improveService, localStorageService) {
    
     //$scope.$parent.productSaveTemp =  localStorageService.get('productStorage['+ $scope.menuCategory.id +']');
       $scope.productSaveIndex = {};

       for ( var i = 0, len = localStorage.length; i < len; ++i ) {
         
           // objectPr =  JSON.parse( localStorage.getItem( localStorage.key( i ) )  );
            var txt = localStorage.key( i );

            var numb = txt.match(/\d/g);
            numb = parseInt(numb.join(""));


            if (localStorageService.get('productStorage['+numb+']') !== null) {
                $scope.productSaveIndex[numb] = localStorageService.get('productStorage['+numb+']'); // get  product cart directives
                $scope.productSaveIndex[numb].data = _.where($scope.productSaveIndex[numb].data, {category: numb});  
            }

            console.log(localStorage.key( i ));

     }  

 
                 

     $scope.save = function() {


            $modalInstance.close();
     };

});
