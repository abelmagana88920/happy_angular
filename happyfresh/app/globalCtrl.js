 app.controller('globalCtrl', function ($scope, $modal, $filter, $timeout, $templateCache, improveService, variableService, Data, _) {
   
     //$scope.paramTableName = $route.current.$$route.paramTableName; //product

      
    $scope.menus = [
    { id:0 },

    {   id:1, title: 'LIST & FAVORITES', pid:0, heading: true },
   	  {   id:2, title: 'Recommended', pid:0, indent: true },
      	{   id:3, title: 'Product 1', pid:2 },
   	   	   {   id:4, title: 'Sub Product', pid:3 },
   	   	   {   id:5, title: 'Sub Product', pid:3 },
   	   	{   id:6, title: 'Product 2', pid:2 },
   	   	   {   id:7, title: 'Sub Product', pid:6 },
   	   	   {   id:8, title: 'Sub Product', pid:6 },

   	  {   id:9, title: 'My Favorites', pid:0, indent: true},

   	{   id:10, title: 'CATEGORIES', pid:0, heading: true},
   	   {   id:11, title: 'Specials', pid:0, indent: true },
   	   {   id:12, title: 'Fresh Produce', pid:0, indent: true },
             {   id:13, title: 'Fresh Fruits', pid:12 },
             {   id:14, title: 'Fresh Vegetables', pid:12 },
             {   id:15, title: 'Fresh Herbs', pid:12 },
             {   id:16, title: 'Fresh Produce - Other', pid:12 },
   	   {   id:17, title: 'Meat & SeaFood', pid:0, indent: true },
   	   {   id:18, title: 'Deli', pid:0, indent: true },
   	   {   id:19, title: 'Bakery', pid:0, indent: true },
   	   {   id:20, title: 'Dairy', pid:0, indent: true },
   	   {   id:21, title: 'Dry & Canned Goods',pid:0, indent: true },
   	   {   id:22, title: 'Pantry', pid:0, indent: true },
   	   {   id:23, title: 'Beverages', pid:0, indent: true },
   	   {   id:24, title: 'Snacks', pid:0, indent: true },
   	   {   id:25, title: 'Frozen', pid:0, indent: true },
   	   {   id:26, title: 'Health & Beauty', pid:0, indent: true },
   	   {   id:27, title: 'Babies', pid:0, indent: true },
   	   {   id:28, title: 'Pets', pid:0, indent: true },
   	   {   id:29, title: 'Household', pid:0, indent: true },
   	   {   id:30, title: 'Ready to eat', pid:0, indent: true },
   
    ];


    /*console.log($scope.menus[12]
        .title.toLowerCase()
        .replace(/ /gi, '')
        .replace(/&/gi,'')
    ); */



    $scope.menus = improveService.toPredicate($scope.menus);
  
    $scope.menuTree = improveService.unflattenTree($scope.menus); 

    // getting (on) scope from child controller then (emit) to parent controller
    $scope.$on('responseCounter', function (evnt, data) {
         $scope.counterGlobal = data;
    });
    
    variableService.passed($scope,variableService); //global passed all scope


   
    
   

});