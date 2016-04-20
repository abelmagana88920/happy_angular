
app.controller('namesCtrl', function ($scope, $modal, $filter, $timeout, $templateCache, $route, improveService, variableService, Data) {
   
    $scope.paramTableName = $route.current.$$route.paramTableName; //product

    improveService.setTableName($scope,improveService);

     $scope.columns = [
                    {text:"ID",predicate:"id",sortable:true,dataType:"number"},
                    {text:"First Name",predicate:"firstname",sortable:true,input:true,required:true, focus:true},
                    {text:"Middle Name",predicate:"middlename",sortable:true,input:true,required:true},
                    {text:"Last Name",predicate:"lastname",sortable:true,input:true,required:true},
                    {text:"Age",predicate:"age",reverse:true,sortable:true,input:true,required:true,dataType:"number"},
                    {text:"Gender",predicate:"gender",sortable:true,input:true,required:true},
		    {text:"Status",predicate:"status",sortable:true,show:false},
                    {text:"Action",predicate:"",sortable:false,show:false}
                   
     ];
    variableService.passed($scope,variableService); //global passed all scope
    
    improveService.fetchAllData($scope, Data, improveService);
    improveService.pageFilter($scope,$timeout, improveService);
    improveService.manipulatePage($scope, Data, $modal, improveService);


});



