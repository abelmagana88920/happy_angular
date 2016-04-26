app.controller('templateEditCtrl', function ($scope, $modalInstance, $route, item, Data,variableService, improveService) {


  $scope.table_name = variableService.scope.table_name;
  $scope.tables_name=$scope.table_name + "s";
  $scope.tablef_name=$scope.table_name + "_form";
  $scope.tablep_name = improveService.properCase($scope.table_name);
 
  $scope.t_name = variableService.scope.t_name;
  $scope.columns = variableService.scope.columns;
     
  $scope['t_name'][$scope.tablef_name] = $scope.tablef_name; // product_form in view
  $scope['t_name'][$scope.table_name] = angular.copy(item);
    
  
        $scope.cancel = function () {
            $modalInstance.dismiss('Close');
        };
        $scope.title = (item.id > 0) ? 'Edit ' + $scope.tablep_name : 'Add ' + $scope.table_name;
        $scope.buttonText = (item.id > 0) ? 'Update ' + $scope.tablep_name : 'Add New ' + $scope.table_name;

        var original = item;
        $scope.isClean = function() {
            return angular.equals(original, $scope['t_name'][$scope.table_name]);
        }
        
        $scope["saveInTableName"] = function (table_name) {
            table_name.uid = $scope.uid;
            if(table_name.id > 0){
                Data.put($scope.tables_name+'/'+table_name.id, table_name).then(function (result) {
                    if(result.status != 'error'){
                        var x = angular.copy(table_name);
                        x.save = 'update';
                        $modalInstance.close(x);
                    }else{
                        console.log(result);
                    }
                });
            }else{
                table_name.status = 'Active';
                Data.post($scope.tables_name, table_name).then(function (result) {
                    if(result.status != 'error'){
                        var x = angular.copy(table_name);
                        x.save = 'insert';
                        console.log(result);
                        x.id = result.id;
                        $modalInstance.close(x);
                    }else{
                        console.log(result);
                    }
                });
            }
        };
});
