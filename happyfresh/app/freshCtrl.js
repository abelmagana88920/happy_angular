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

    $scope.counter = 0;

    $scope.number={'timer':1, arrayNumber: []};

   /* $scope.count_cart = function(operation) {
            console.log(operation);

    }; */
    $scope.img_folder = 'image_download/';

    $scope.product = [
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

    $scope.$emit('response', $scope.counter); // call the function on the parent global controller
    
    variableService.passed($scope,variableService); //global passed all scope
    
   

});



