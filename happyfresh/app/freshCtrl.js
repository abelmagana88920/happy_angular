app.controller('freshCtrl', function ($scope, $modal, $filter, $timeout, $templateCache, $route, improveService, variableService, Data) {
   
     $scope.paramTableName = $route.current.$$route.paramTableName; //product

    improveService.setTableName($scope,improveService);

    $scope.columns = [

                    {text:"ID",predicate:"id",sortable:true,dataType:"number"},
                    {text:"Name",predicate:"name",sortable:true,input:true,required:true,focus:true},
		    {text:"Description",predicate:"description",sortable:true,input:true,type:"textarea",required:true},
                    {text:"Price",predicate:"price",sortable:true,dataType:"number",input:true,required:true},
                    {text:"Stock",predicate:"stock",sortable:true,dataType:"number",input:true,required:true},
                    {text:"Packing",predicate:"packing",reverse:true,sortable:true,dataType:"number",input:true,required:true},  
                    {text:"Status",predicate:"status",sortable:true,show:false},
                    {text:"Action",predicate:"",sortable:false,show:false}              

                ];

    $scope.counter = 2;

    $scope.number={'timer':1, arrayNumber: []};

   /* $scope.count_cart = function(operation) {
            console.log(operation);

    }; */
 

    $scope.product = [
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet'},
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet'},
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet'},
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet'},
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet'},
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet'},
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet'},
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet'},
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet'},
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet'},
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet'},
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet'},
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet'},
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet'},
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet'},
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet'},
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet'},
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet'},
          
    ];

    


    variableService.passed($scope,variableService); //global passed all scope
    
   

});



