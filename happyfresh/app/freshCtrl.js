app.controller('freshCtrl', function ($scope, $modal, $filter, $timeout, $templateCache, $route, $routeParams ,improveService, variableService, Data, localStorageService,_) {
   
    var r_categoryPredicate = $routeParams.category; // get the category parameter
    var s_pMenus = $scope.$parent.menus;
    $scope.menuCategory = _.findWhere(s_pMenus, {predicate: r_categoryPredicate}); // convert the predicate to the object with id, title, predicate, pid so more
  
    var s_menuCategory = $scope.menuCategory;
   
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

    $scope.manipulateProductDataBy = function(localStorageName,category) {
           $scope.productSave = localStorageService.get(localStorageName+'['+category.id+']'); // get  product cart directives storage
           $scope.productSave.data = _.where($scope.productSave.data, {category: category.id}); //query those on the category
           $scope.RecordData.data =  improveService.uniqueList($scope.productSave.data.concat($scope.RecordData.data)); 
             //  merge the Local Storage then put to the Existing data then remove duplicates
             // note: Parent body not in modal          
    }
    

    $scope.counter = 0;
    //$scope.counter = []; //update a number to an array of objects

    $scope.img_folder = 'image_download/';

   
     //console.log($scope.$parent.menuTree);
    $scope.product = {};
    $scope.product.data=[];
    $scope.product.dataCategory=[];
    
    $scope.RD = {};
    var databaseRD = [
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'mamypoko.png',availablestock:4, category:11},
           {id:"2",name:"Tipco FREE DELIVERY set - Pick your own",subname:"",price:235.00,per:'2.32 l', img: 'tipco.png', category:11},
           {id:"3",name:"Tipco FREE DELIVERY set - Orange",subname:"",price:235.00,per:'2.32 l', img: 'tipco2.png', category:11},
           {id:"4",name:"Angoon Soybean Oil",subname:"Soybean Oil",price:42.00,per:'1000 ml', img: 'soybean.png', category:11},
          {id:"5",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'wangkanai.png', category:11},
           {id:"6",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'apple.png', category:11},
           {id:"7",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'cabbage.png', category:11},
           {id:"8",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'carrot.png', category:11},
           {id:"9",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'chicken.png', category:11},
           {id:"10",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'guava.png', category:11},
           {id:"11",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'lime.png', category:11},
           {id:"12",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'pork.png', category:11},
           {id:"13",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'milk.png', category:11},
           {id:"14",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'shrimpball.png', category:11},
           {id:"15",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'spafood.png', category:11},
           {id:"16",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'bread1.png', category:11},
           {id:"17",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'bread2.png', category:11},
           {id:"18",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'bread3.png', category:11},
 
          
            {id:"19",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'mamypoko.png',availablestock:4, category:13},
           {id:"20",name:"Tipco FREE DELIVERY set - Pick your own",subname:"",price:235.00,per:'2.32 l', img: 'tipco.png', category:13},
           {id:"21",name:"Tipco FREE DELIVERY set - Orange",subname:"",price:235.00,per:'2.32 l', img: 'tipco2.png', category:13 },
           {id:"22",name:"Angoon Soybean Oil",subname:"Soybean Oil",price:42.00,per:'1000 ml', img: 'soybean.png', category:13 },
          {id:"23",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'wangkanai.png', category:13 },
           {id:"24",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'apple.png', category:13 },
           {id:"25",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'cabbage.png', category:13 },
           {id:"26",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'carrot.png', category:13 },
           {id:"27",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'chicken.png', category:14 },
           {id:"28",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'guava.png', category:14 },
           {id:"29",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'lime.png', category:14 },
           {id:"30",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'pork.png', category:14 },
           {id:"31",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'milk.png', category:14 },
           {id:"32",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'shrimpball.png', category:14 },
           {id:"33",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'spafood.png', category:14 },
           {id:"34",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'bread1.png', category:14 },
           {id:"35",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'bread2.png', category:14 },
           {id:"36",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'bread3.png', category:15 },
           

           {id:"37",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'mamypoko.png',availablestock:4, category:17},
           {id:"38",name:"Tipco FREE DELIVERY set - Pick your own",subname:"",price:235.00,per:'2.32 l', img: 'tipco.png', category:17},
           
           
    ]; //initial Data

    $scope.RD.data = _.where(databaseRD, {category: s_menuCategory.id}); // query where id = routeCategory ID
     
    if ($scope.RD.data.length == 0) { // if RD.DATA is empty
        children_menu =  _.where(s_pMenus, {pid: s_menuCategory.id});    
            _.each(children_menu,function(child) {
                   $scope.RD.data = $scope.RD.data.concat(_.where(databaseRD, {category: child.id}));
            });

    } // get the children of the object Data and fetch it


    $scope.RecordData = angular.copy($scope.RD); //for processing prevent two way binding 


    if (localStorageService.get('productStorage['+s_menuCategory.id+']') !== null) {
              $scope.manipulateProductDataBy('productStorage',s_menuCategory);   
    } 
    else { // fetch the children of menuCategory.id
         children_menu =  _.where(s_pMenus, {pid: s_menuCategory.id});    
               _.each(children_menu,function(child) {
                      if (localStorageService.get('productStorage['+child.id+']') !== null) {
                             $scope.manipulateProductDataBy('productStorage',child);   
                      } 
                });
    }


    $scope.counter = improveService.selectedCount($scope.RecordData.data).counter;
     //  count the number of counter property in a cart using Improve Service
    $scope.display = {
          IndexRecord: 0,
          NumRecords: $scope.counter+5,
          DivideRecords: 0
    };
    $scope.displayInitial = angular.copy($scope.display); // prevent two way binding, copy only
 

  $scope.loadMoreRecords = function() {

        $scope.display.DivideRecords++;
         for (var i=($scope.display.IndexRecord); i<=($scope.display.NumRecords*$scope.display.DivideRecords); i++) {
            if ($scope.RecordData.data[i] !== undefined) {

                $scope.product.data.push($scope.RecordData.data[i]);
                $scope.display.IndexRecord++;
            } 
        }

                    
  };

  $scope.filterSearch = function() {

        $scope.RecordData.data = $filter('filter')($scope.RD.data, {name: $scope.search}); 
         $scope.product.data = $filter('filter')($scope.RecordData.data, {name: $scope.search}); 
       
  };
   
   $scope.loadMoreRecords(); //load initial or more records
   

   $scope.clearCart = function() {
          $scope.productSave.data = [];
          $scope.display = angular.copy($scope.displayInitial);
          $scope.product.data = [];
          $scope.productSaveIndexTotal = {};
          $scope.RecordData = angular.copy($scope.RD); //initial data
          $scope.$emit('responseCounter', 0); 
         
          // localStorageService.clearAll();
          improveService.clearSomeLocalStorage('ls.productStorage');
          $scope.loadMoreRecords();
    };

    $scope.openCart = function(p, size) {

          var modalInstance = $modal.open({
                templateUrl: 'partials/openCart.html',
                controller: 'openCartCtrl',
                size: 'lg',
                scope:$scope,
                //backdrop: 'static',
                resolve: {
                  item: function () {
                    return p;
                  }
                }
          });

        modalInstance.result.then(function(selectedObject) {
        });

    };
     $scope.totalCart = function(p, size) {
          var modalInstance = $modal.open({
                templateUrl: 'partials/totalCart.html',
                controller: 'totalCartCtrl',
                size: 'lg',
                scope:$scope,
               // backdrop: 'static',
                resolve: {
                  item: function () {
                    return p;
                  }
                }
          });

        modalInstance.result.then(function(selectedObject) {
            $route.reload();      
        }, function () {
            $route.reload();  
        });



    };

    $scope.fetchMenuName = function(key,objectData) {
          //console.log(objectData);
          var menu_object = _.findWhere(s_pMenus, {id: parseInt(key)});
         /* var counter = improveService.selectedCount(objectData);
          var sub_computedprice = 0;

          _.each(objectData, function(objectResult) {
                 sub_computedprice += objectResult.price * objectResult.counter;
             
          }); 
          */
          return menu_object.title;
    };

    $scope.fetchCounter = function(objectData) {
          var counter = improveService.selectedCount(objectData);
          var sub_computedprice = 0;

          _.each(objectData, function(objectResult) {
                 sub_computedprice += objectResult.price * objectResult.counter;
          });

          return counter.counter + ' for ' + sub_computedprice;
    }

    $scope.fetchTotalItemsPrice = function(objectData) {
            var total_price = 0;
            var i=0;
           _.each(objectData, function(objectParentResult) {
                _.each(objectParentResult.data, function(objectChildResult) {
                      var counter = improveService.selectedCount(objectChildResult);
                     // console.log(objectChildResult);
                     i += counter.counter;
                     total_price +=  objectChildResult.price * objectChildResult.counter;
                });
           });
           return i + ' for ' + total_price;
    };

   

    $scope.productSaveIndexTotal = {}; //initialization
    for ( var i = 0, len = sessionStorage.length; i < len; ++i ) {    
           // objectPr =  JSON.parse( localStorage.getItem( localStorage.key( i ) )  );
            numb = improveService.stringGetNumber(sessionStorage.key( i ));
            if (localStorageService.get('productStorage['+numb+']') !== null) {
                $scope.productSaveIndexTotal[numb] = localStorageService.get('productStorage['+numb+']'); // get  product cart directives
                $scope.productSaveIndexTotal[numb].data = _.where($scope.productSaveIndexTotal[numb].data, {category: numb});  
            }
    }  


    $scope.$emit('responseCounter', $scope.counter); // call the function on the parent global controller   
    variableService.passed($scope,variableService); //global passed all scope
       

});





