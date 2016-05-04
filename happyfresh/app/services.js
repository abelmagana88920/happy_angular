app.service('improveService', function() {
   
    var self = this;
    var newText='';
    this.clearCache = function(templateCache,timeout,milliseconds){
         timeout(function() { 
                templateCache.removeAll();
                console.log('clear cache');
         }, milliseconds);  
     };
    
    this.properCase = function(text){      
        newText='';
        for(i=0; i<text.length; i++) 
            if (i==0) newText += text[0].toUpperCase();      else newText += text[i];
        return newText;
    };



 
    //convert the flatten json data to a tree data  -- requires pid except index 0  note: use self instead of this
    this.toPredicate = function(array) {

         var predicate = _.each(array, function(pred){
                if (pred.title !== undefined) {
                       pred.predicate = pred
                            .title.toLowerCase()
                            .replace(/ /gi, '')
                            .replace(/&/gi,'');
                }
        });

         return predicate;
    }


    this.unflattenTree = function( array, parent, tree ){
            
        tree = typeof tree !== 'undefined' ? tree : [];
        parent = typeof parent !== 'undefined' ? parent : { id: 0 };


       
            
        var children = _.filter( array, function(child){  return child.pid == parent.id; });
     
        if( !_.isEmpty( children )  ){
            if( parent.id == 0 ){
               tree = children;   
            }else{
               parent['children'] = children;
            }
            _.each( children, function( child ){ self.unflattenTree( array, child ) } );                    
        }
        return tree;
    };


    this.uniqueList = function(arrObjectData) {
            uniqueListData = _.uniq(arrObjectData, function(item, key, id) { 
                return item.id;
            });

            return uniqueListData;
    };



    this.selectedCount = function(arrObjectData) {
            selectedCountData = _.countBy(arrObjectData, function(num) {
              return (num.counter != 0 && num.counter != undefined) ? 'counter': 'left';
           }); 

            selectedCountData.counter  = selectedCountData.counter == undefined ? 0 : selectedCountData.counter;
            return selectedCountData;
    };

    this.findingSorted = function(arrObjectData, property) {
                    findingCounter  =  _.filter(arrObjectData, function(pO){ return _.has(pO,property) && pO[property] != 0; });
                    sorted =  _.sortBy(findingCounter, function(o) { return o[property]; });

                    //return sorted;
                    return findingCounter;
    };
     
    this.stringGetNumber = function(strings) {
            var txt = strings;
            var numb = txt.match(/\d/g);
            numb = parseInt(numb.join("")); 
            return numb;
    };

    this.clearSomeLocalStorage = function(startsWith) {
        var myLength = startsWith.length;
        Object.keys(sessionStorage) 
            .forEach(function(key){ 
                if (key.substring(0,myLength) == startsWith) {
                    sessionStorage.removeItem(key); 
                } 
        }); 
   }


    




















    this.setTableName = function($scope,is) {
	$scope.table_name=$scope.paramTableName;
        $scope.tables_name=$scope.table_name + "s";
        $scope.t_name = {}; //initialized for view object of t_name

         $scope.tablep_name = this.properCase($scope.table_name);
         $scope['t_name'][$scope.table_name] = {};
    }

    this.fetchAllData = function(scope,Data,is) {
      
     
        Data.get(scope.tables_name).then(function(data){ 
        scope['t_name'][scope.tables_name] = data.data;
		scope.filteredItems = scope['t_name'][scope.tables_name].length;
	       
		scope.totalItems = scope['t_name'][scope.tables_name].length;
		scope.currentPage = 1; //current page
		scope.entryLimit = 20;

       }); 
   }

    this.pageFilter = function(scope,timeout,is) {
         
           scope.setPage = function(pageNo) { scope.currentPage = pageNo;  };
  	  scope.resetLimit = function() {  timeout(function() { scope.filteredItems = scope['t_name'][scope.tables_name].length;  }, 10); };  
  	  scope.sort_by = function(predicate) { scope.predicate = predicate; scope.reverse = !scope.reverse;}; 

    }

    this.manipulatePage = function($scope,Data,$modal,is) {
         
        $scope["changeStatus"] = function(table_name){
        table_name.status = (table_name.status=="Active" ? "Inactive" : "Active");
        Data.put($scope.tables_name+"/"+table_name.id,{status:table_name.status});
    };
	    $scope["deleteTableName"] = function(table_name){
		if(confirm("Are you sure to remove the " + $scope.table_name)){
		    Data.delete($scope.tables_name+"/"+table_name.id).then(function(result){
		        $scope['t_name'][$scope.tables_name] = _.without($scope['t_name'][$scope.tables_name], _.findWhere($scope['t_name'][$scope.tables_name], {id:table_name.id}));
		         $scope.totalItems = $scope['t_name'][$scope.tables_name].length;
		    });
		}
	    };
	    $scope.open = function (p,size) {
    		var modalInstance = $modal.open({
    		  templateUrl: 'partials/templateEdit.html',
    		  controller: 'templateEditCtrl',
    		  size: size,
    		  resolve: {
    		    item: function () {
    		      return p;
    		    }
    		  }
    		});
    		modalInstance.result.then(function(selectedObject) {
    		    if(selectedObject.save == "insert"){
    		        $scope['t_name'][$scope.tables_name].push(selectedObject);
    		        $scope['t_name'][$scope.tables_name] = $filter('orderBy')($scope['t_name'][$scope.tables_name], 'id', 'reverse');
    		    }else if(selectedObject.save == "update"){
    		        

    		        $scope.columns.forEach(function(column){
    		              p[column.predicate] = selectedObject[column.predicate]; //update dom fields
    		        });
    		      
    		    }
    		      $scope.totalItems = $scope['t_name'][$scope.tables_name].length;
    		});
	    };
    

    }
    
    

});

app.service('variableService', function() {
   
    var self = this;
    this.passed = function(scope, vs) {
        vs.scope = scope;
    }; 

});


app.service('watchService', function() {
   
    var self = this;

    this.watchSave = function(field_name,scope,ns){
       
        field_name.forEach(function(fn){
            
             console.log(fn);

             scope[fn] = ns[fn];

             scope.$watch(fn,function() {
                ns[fn] = scope[fn];           
             });
            
        });
    };
    
    this.namelength = function() {    
        return self.name.length;      
    };
    

});
