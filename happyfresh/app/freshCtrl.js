app.controller('freshCtrl', function ($scope, $modal, $filter, $timeout, $templateCache, $route, $routeParams ,improveService, variableService, Data, localStorageService) {
   
    $scope.categoryPredicate = $routeParams.category; // get the category parameter
    $scope.menuCategory = _.findWhere($scope.$parent.menus, {predicate: $scope.categoryPredicate}); // convert the predicate to the object with id, title, predicate, pid so more
    
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

    $scope.counter = 0;

    $scope.number={'timer':1, arrayNumber: []};

   /* $scope.count_cart = function(operation) {
            console.log(operation);

    }; */
    $scope.img_folder = 'image_download/';

    $scope.display = {
          IndexRecord: 0,
          NumRecords: 4,
          DivideRecords: 0
    };
    $scope.displayInitial = angular.copy($scope.display);

    
     //console.log($scope.$parent.menuTree);
    $scope.product = {};
    $scope.product.data=[];
    $scope.product.dataCategory=[];
    
    $scope.RD = {};
    var databaseRD = [
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'mamypoko.jpg',availablestock:4, category:11},
           {id:"2",name:"Tipco FREE DELIVERY set - Pick your own",subname:"",price:235.00,per:'2.32 l', img: 'tipco.jpg', category:11},
           {id:"3",name:"Tipco FREE DELIVERY set - Orange",subname:"",price:235.00,per:'2.32 l', img: 'tipco2.jpg', category:11},
           {id:"4",name:"Angoon Soybean Oil",subname:"Soybean Oil",price:42.00,per:'1000 ml', img: 'soybean.jpg', category:11},
          {id:"5",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'wangkanai.jpg', category:11},
           {id:"6",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'apple.jpg', category:11},
           {id:"7",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'cabbage.jpg', category:11},
           {id:"8",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'carrot.jpg', category:11},
           {id:"9",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'chicken.jpg', category:11},
           {id:"10",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'guava.jpg', category:11},
           {id:"11",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'lime.jpg', category:11},
           {id:"12",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'pork.jpg', category:11},
           {id:"13",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'milk.jpg', category:11},
           {id:"14",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'shrimpball.jpg', category:11},
           {id:"15",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'spafood.jpg', category:11},
           {id:"16",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'bread1.jpg', category:11},
           {id:"17",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'bread2.jpg', category:11},
           {id:"18",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'bread3.jpg', category:11},
 
          
            {id:"19",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'mamypoko.jpg',availablestock:4, category:13},
           {id:"20",name:"Tipco FREE DELIVERY set - Pick your own",subname:"",price:235.00,per:'2.32 l', img: 'tipco.jpg', category:13},
           {id:"21",name:"Tipco FREE DELIVERY set - Orange",subname:"",price:235.00,per:'2.32 l', img: 'tipco2.jpg', category:13 },
           {id:"22",name:"Angoon Soybean Oil",subname:"Soybean Oil",price:42.00,per:'1000 ml', img: 'soybean.jpg', category:13 },
             {id:"23",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'wangkanai.jpg', category:13 },
           {id:"24",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'apple.jpg', category:13 },
           {id:"25",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'cabbage.jpg', category:13 },
           {id:"26",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'carrot.jpg', category:13 },
           {id:"27",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'chicken.jpg', category:14 },
           {id:"28",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'guava.jpg', category:14 },
           {id:"29",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'lime.jpg', category:14 },
           {id:"30",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'pork.jpg', category:14 },
           {id:"31",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'milk.jpg', category:14 },
           {id:"32",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'shrimpball.jpg', category:14 },
           {id:"33",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'spafood.jpg', category:14 },
           {id:"34",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'bread1.jpg', category:14 },
           {id:"35",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'bread2.jpg', category:14 },
           {id:"36",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'bread3.jpg', category:15 },
            
           
    ]; //initial Data

    $scope.RD.data = _.where(databaseRD, {category: $scope.menuCategory.id}); // query where id = routeCategory ID
     
    if ($scope.RD.data.length == 0) { // if RD.DATA is empty
        children_menu =  _.where($scope.$parent.menus, {pid: $scope.menuCategory.id});    
            _.each(children_menu,function(child) {
                   $scope.RD.data = $scope.RD.data.concat(_.where(databaseRD, {category: child.id}));
            });

    } // get the children of the object Data and fetch it


    $scope.RecordData = angular.copy($scope.RD); //for processing prevent two way binding

   
     
    $scope.loadMoreRecords = function() {
        $scope.display.DivideRecords++;

         for (var i=($scope.display.IndexRecord); i<=($scope.display.NumRecords*$scope.display.DivideRecords); i++) {
            if ($scope.RecordData.data[i] !== undefined) {

                $scope.product.data.push($scope.RecordData.data[i]);
                $scope.display.IndexRecord++;
            } 

        }    
          
    };

    
     if (localStorageService.get('productStorage['+13+']') !== null) {
        $scope.productSave13 = localStorageService.get('productStorage['+13+']'); // get  product cart directives
        $scope.productSave13.data = _.where($scope.productSave13.data, {category: 13});  
    }

     if (localStorageService.get('productStorage['+14+']') !== null) {
       $scope.productSave14 = localStorageService.get('productStorage['+14+']'); // get  product cart directives
      
      $scope.productSave14.data = _.where($scope.productSave14.data, {category: 14});
    }  



    if (localStorageService.get('productStorage['+$scope.menuCategory.id+']') !== null) {

       
      $scope.productSave = localStorageService.get('productStorage['+$scope.menuCategory.id+']'); // get  product cart directives
      
      $scope.productSave.data = _.where($scope.productSave.data, {category: $scope.menuCategory.id}); 
       

     
     
     
     
      $scope.productSaveTemp= {};
      $scope.productSaveTemp.data = [];
      /*
     for ( var i = 0, len = localStorage.length; i < len; ++i ) {
         
            objectPr =  JSON.parse( localStorage.getItem( localStorage.key( i ) )  );
            $scope.productSaveTemp.data =  objectPr.data.concat($scope.productSaveTemp.data);
      
     }  */


       


        /*productSaveData = _.where($scope.productSave.data, {category: $scope.menuCategory.id}); // query where id = routeCategory ID
     

        $scope.productSave.data = productSaveData.concat($scope.productSave.data); */

      //  $scope.productSave.dataCategory = _.where($scope.productSave.data, {category: $scope.menuCategory.id}); 

       // console.log($scope.productSave); 
        //data Category

       //  if ($scope.productSave.length != 0)  // if productSaveData is not empty array


      $scope.RecordData.data =  improveService.uniqueList($scope.productSave.data.concat($scope.RecordData.data));


        //  merge the Local Storage then put to the Existing data then remove duplicates
        // note: Parent body not in modal
    
     } else {
          $scope.productSave = $scope.product;

          localStorageService.remove('productStorage');    //clear the storage    
     } 

     $scope.loadMoreRecords(); //load initial or more records
     
    

     //$scope.product.dataCategory = _.where($scope.product.data, {category: $scope.menuCategory.id});  



     $scope.counter = improveService.selectedCount($scope.RecordData.data).counter;
     //  count the number of counter property in a cart using Improve Service
    

    $scope.clearCart = function() {
          $scope.productSave.data = [];
           $scope.productSaveTemp= {};
           $scope.productSaveTemp.data = [];
          $scope.display = angular.copy($scope.displayInitial);
          $scope.product.data = [];
          $scope.RecordData = angular.copy($scope.RD); //initial data
          $scope.$emit('responseCounter', 0); 
          localStorageService.clearAll();
          $scope.loadMoreRecords();
    };

    $scope.openCart = function(p, size) {

          var modalInstance = $modal.open({
                templateUrl: 'partials/openCart.html',
                controller: 'openCartCtrl',
                size: 'lg',
                scope:$scope,
                backdrop: 'static',
                resolve: {
                  item: function () {
                    return p;
                  }
                }
          });

        modalInstance.result.then(function(selectedObject) {
              

              $scope.productSave = selectedObject;

               $scope.productSaveTemp= {};
             $scope.productSaveTemp.data = [];
                   
 
            //  console.log(selectedObject);
                
            /*if(selectedObject.save == "insert"){
                $scope['t_name'][$scope.tables_name].push(selectedObject);
                $scope['t_name'][$scope.tables_name] = $filter('orderBy')($scope['t_name'][$scope.tables_name], 'id', 'reverse');
            }else if(selectedObject.save == "update"){
                

                $scope.columns.forEach(function(column){
                      p[column.predicate] = selectedObject[column.predicate]; //update dom fields
                });
              
            }
              $scope.totalItems = $scope['t_name'][$scope.tables_name].length; */
        });

    };




     $scope.totalCart = function(p, size) {
          var modalInstance = $modal.open({
                templateUrl: 'partials/totalCart.html',
                controller: 'totalCartCtrl',
                size: 'lg',
                scope:$scope,
                backdrop: 'static',
                resolve: {
                  item: function () {
                    return p;
                  }
                }
          });

        modalInstance.result.then(function(selectedObject) {

               $route.reload();
              //$scope.productSaveTemp = selectedObject;
              
        });

    };



    $scope.$emit('responseCounter', $scope.counter); // call the function on the parent global controller
    
    variableService.passed($scope,variableService); //global passed all scope
    
   

});



