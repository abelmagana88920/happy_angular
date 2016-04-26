app.controller('freshCtrl', function ($scope, $modal, $filter, $timeout, $templateCache, $route, improveService, variableService, Data, localStorageService) {
   
    

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
          DivideRecords: 1
    };

    $scope.product = [];

    /*$scope.RecordData = [
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'mamypoko.jpg',availablestock:4},
           {id:"2",name:"Tipco FREE DELIVERY set - Pick your own",subname:"",price:235.00,per:'2.32 l', img: 'tipco.jpg'},
           {id:"3",name:"Tipco FREE DELIVERY set - Orange",subname:"",price:235.00,per:'2.32 l', img: 'tipco2.jpg'},
           {id:"4",name:"Angoon Soybean Oil",subname:"Soybean Oil",price:42.00,per:'1000 ml', img: 'soybean.jpg'},
           {id:"5",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'wangkanai.jpg'},
           {id:"6",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'apple.jpg'},
           {id:"7",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'cabbage.jpg'},
           {id:"8",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'carrot.jpg'},
           {id:"9",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'chicken.jpg'},
           {id:"10",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'guava.jpg'},
           {id:"11",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'lime.jpg'},
           {id:"12",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'pork.jpg'},
           {id:"13",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'milk.jpg'},
           {id:"14",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'shrimpball.jpg'},
           {id:"15",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'spafood.jpg'},
           {id:"16",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'bread1.jpg'},
           {id:"17",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'bread2.jpg'},
           {id:"18",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'bread3.jpg'},
 
    ];*/

     $scope.RecordData = [
           {id:"1",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'mamypoko.jpg',availablestock:4},
           {id:"2",name:"Tipco FREE DELIVERY set - Pick your own",subname:"",price:235.00,per:'2.32 l', img: 'tipco.jpg'},
           {id:"3",name:"Tipco FREE DELIVERY set - Orange",subname:"",price:235.00,per:'2.32 l', img: 'tipco2.jpg'},
           {id:"4",name:"Angoon Soybean Oil",subname:"Soybean Oil",price:42.00,per:'1000 ml', img: 'soybean.jpg'},
             {id:"5",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'wangkanai.jpg'},
           {id:"6",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'apple.jpg'},
           {id:"7",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'cabbage.jpg'},
           {id:"8",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'carrot.jpg'},
           {id:"9",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'chicken.jpg'},
           {id:"10",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'guava.jpg'},
           {id:"11",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'lime.jpg'},
           {id:"12",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'pork.jpg'},
           {id:"13",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'milk.jpg'},
           {id:"14",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'shrimpball.jpg'},
           {id:"15",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'spafood.jpg'},
           {id:"16",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'bread1.jpg'},
           {id:"17",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'bread2.jpg'},
           {id:"18",name:"Mamy Poko Baby Wipes 80 Sheets",subname:"Baby Wipes 80 Sheets",price:135.00,per:'packet', img: 'bread3.jpg'},
 
          
           
    ];


   
  
    
    $scope.loadMoreRecords = function() {
        $scope.display.DivideRecords++;
   
         for (var i=($scope.display.IndexRecord); i<=($scope.display.NumRecords*$scope.display.DivideRecords); i++) {
            if ($scope.RecordData[i] !== undefined) {
                $scope.product.push($scope.RecordData[i]);
                $scope.display.IndexRecord++;

            } 

        }

          var uniqueList = _.uniq($scope.product, function(item, key, id) { 
           return item.id;
         });
   

         $scope.product = uniqueList;    
    };

     

       if (localStorageService.get('productStorage') !== null) {
          $scope.product = localStorageService.get('productStorage'); // get  product cart directives
          $scope.loadMoreRecords();
     } else {
          $scope.product = [];
          $scope.loadMoreRecords();
          localStorageService.remove('productStorage');       
     } 



  

      selectedCount = _.countBy($scope.product, function(num) {
              return num.counter != 0 ? 'counter': 'left';
      });  // count the number of property counter

                      
     $scope.counter = parseInt(selectedCount.counter); // parent counter number items


   //  localStorageService.set('productStorage',$scope.product);

   //console.log(localStorageService.get('productStorage'));

    $scope.openCart = function(p, size) {

          var modalInstance = $modal.open({
          templateUrl: 'partials/openCart.html',
          controller: 'openCartCtrl',
          size: size,
          scope:$scope,
          resolve: {
            item: function () {
              return p;
            }
          }
    });
        modalInstance.result.then(function(selectedObject) {

                
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



    $scope.$emit('response', $scope.counter); // call the function on the parent global controller
    
    variableService.passed($scope,variableService); //global passed all scope
    
   

});



