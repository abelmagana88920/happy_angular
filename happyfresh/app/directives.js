
app.directive('formElement', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            label : "@",
            model : "="
        },
        link: function(scope, element, attrs) {
            scope.disabled = attrs.hasOwnProperty('disabled');
            scope.required = attrs.hasOwnProperty('required');
            scope.pattern = attrs.pattern || '.*';
        },
        template: '<div class="form-group"><label class="col-sm-3 control-label no-padding-right" >  {{label}}</label><div class="col-sm-7"><span class="block input-icon input-icon-right" ng-transclude></span></div></div>'
      };
        
});


app.directive('formInput', function() {
    return {
        restrict: 'E',
        transclude: true,
  	templateUrl: '../partials/templateInput.html',
        scope: {
            label : "@",
            tNameObject : "=",
	    columnsObject : "=",
	    tableNameFormObject : "=",
	    tableNameString : "@"
        },

        link: function(scope, element, attrs) {
           
          scope.disabled = attrs.hasOwnProperty('disabled');
            scope.required = attrs.hasOwnProperty('required');
            scope.pattern = attrs.pattern || '.*';
        }
       
      };
        
});


app.directive('dynamicName', function($compile, $parse) {
  return {
    restrict: 'A',
    terminal: true,
    priority: 100000,
    link: function(scope, elem) {
     var name = $parse(elem.attr('dynamic-name'))(scope);
      // $interpolate() will support things like 'skill'+skill.id where parse will not
        
      elem.removeAttr('dynamic-name');
      elem.attr('name', name);
      $compile(elem)(scope); 
    }
  };
});



app.directive('onlyNumbers', function() {
  
    return function(scope, element, attrs) {
          if (attrs.onlyNumbers=="number") {
		var keyCode = [8,9,13,37,39,46,48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105,110,190];
		element.bind("keydown", function(event) {
		    if($.inArray(event.which,keyCode) == -1) {
		        scope.$apply(function(){
		            scope.$eval(attrs.onlyNum);
		            event.preventDefault();
		        });
		        event.preventDefault();
		    }

		});
         }
    };
});

app.directive('focus', function() {
    return function(scope, element, attrs) {
 
      if (attrs.focus) {
        element[0].focus();
      }
    }      
});
app.directive('animateOnChange', function($animate) {
  return function(scope, elem, attr) {
      
      scope.$watch(attr.animateOnChange, function(nv,ov) {
                  
        if (nv!=ov) {
               console.log(attr.animateOnChange);
              var c = 'change-up';
              $animate.addClass(elem,c, function() {
              $animate.removeClass(elem,c);
          });
        }
      });  
  }  
});




app.directive('productCart', function($compile, $parse, $filter, localStorageService) {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: '../partials/freshRecord.html',
        scope: {
             productObject: '=',
             numberObject: '=',
             index: '@',
             parent: '@',
              
        },
        controller: function ($scope) { 

             var available_stock = $scope.productObject[$scope.index].availablestock == undefined ? (99999999999):$scope.productObject[$scope.index].availablestock;
            
             $scope.productObject[$scope.index].availablestock = $scope.productObject[$scope.index].availablestock == undefined ? 'Always Available': $scope.productObject[$scope.index].availablestock;
          
             if ($scope.productObject[$scope.index].counter == null ) $scope.productObject[$scope.index].counter=0;
             $scope.count_cart = function(operation) {
                        
                          //set the initial value of available stock

                        //check wthe plus sign then check the available stock
        
                       if (operation == 'plus' && ($scope.productObject[$scope.index].counter < available_stock || available_stock == 'Always Available') ) {

                              //$scope.count++;
                              $scope.productObject[$scope.index].counter++;

                                
                            //  var selectedCount = $filter('filter')($scope.productObject, { counter:0 }).length;

                             // $scope.$parent.$parent.counter = parseInt($scope.$parent.$parent.counter)+1;
                       }
                       else if (operation == 'minus' && $scope.productObject[$scope.index].counter>0) {
                             //$scope.count--;
                             $scope.productObject[$scope.index].counter--;
                          
                            // $scope.$parent.$parent.counter = parseInt($scope.$parent.$parent.counter)-1;
                       }

                    $scope.left = $scope.productObject[$scope.index].availablestock == 'Always Available' ? '' : 'Will left: ' + (available_stock - $scope.count);
           
                   // if ( $scope.productObject[$scope.index].counter == 0) delete($scope.productObject[$scope.index].counter);
                     // when  zero clear the counter property


                     selectedCount = _.countBy($scope.productObject, function(num) {
                            return (num.counter != 0 && num.counter != undefined) ? 'counter': 'left';
                     });  // count the number of property counter

                      
                    $scope.$parent.$parent.counter = parseInt(selectedCount.counter); // parent counter number items

                    /*sorted =  _.sortBy($scope.productObject, function(o) { return o.counter; });

                    localStorageService.set('productStorage',sorted.reverse()); */

                    findingCounter  =  _.filter($scope.productObject, function(pO){ return _.has(pO,"counter") && pO.counter != 0; });
                    sorted =  _.sortBy(findingCounter, function(o) { return o.counter; });

                    localStorageService.set('productStorage',sorted.reverse());

  

                    $scope.$emit('response', $scope.$parent.$parent.counter);
             }; 
        },
       
        link: function($scope, element, attrs) {
          
              $scope.productObject[$scope.index].dataDuration = 800 * (parseInt($scope.index%4)+1);  // changes the value of animation resets to 4 columns
               
             // scope.productObject[scope.index].hello = scope.$parent.$parent.counter++; // update the value of the parent controller
                       
        }
       
      };
});

/*******************LOADING DIRECTIVES*******************************************/

app.directive('showDuringResolve', function($rootScope) {

  return {
    link: function(scope, element) {

      element.addClass('ng-hide');

      var unregister = $rootScope.$on('$routeChangeStart', function() {
        element.removeClass('ng-hide');
      });

      scope.$on('$destroy', unregister);
    }
  };
});

app.directive('resolveLoader', function($rootScope, $timeout) {

  return {
    restrict: 'E',
     
    templateUrl: '../partials/loading.html',
    link: function(scope, element) {

      $rootScope.$on('$routeChangeStart', function(event, currentRoute, previousRoute) {
        if (previousRoute) return;

        $timeout(function() {
          element.removeClass('ng-hide');
        });
      });

      $rootScope.$on('$routeChangeSuccess', function() {
        element.addClass('ng-hide');
      });
    }
  };
});


/*******************end LOADING DIRECTIVES*******************************************/


 app.directive('whenScrollEnds', function($document,$window) {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                var visibleHeight = element[0].offsetHeight;
                var threshold =150;


                $document.bind('scroll', function () {

                 
                  var scrollableHeight = element.prop('scrollHeight');
                    var hiddenContentHeight = scrollableHeight - visibleHeight;

                        //console.log(hiddenContentHeight+ ' ' + scrollableHeight + ' ' +document.body.offsetHeight);
                 /*   if (hiddenContentHeight - window.scrollY <= threshold) {        
                        // Scroll is almost at the bottom. Loading more rows
                        scope.$apply(attrs.whenScrollEnds);

                    } */ 
            
                         console.log(window.innerHeight + ' ' + window.scrollY + ' ' + hiddenContentHeight);
                    if ((window.innerHeight + window.scrollY) >= hiddenContentHeight) {
                         scope.$apply(attrs.whenScrollEnds);
                    }


 

                 });


                /*window.onscroll = function(ev) {
                    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                        // you're at the bottom of the page
                    }
                }; */
               /* element.scroll(function() {
                    var scrollableHeight = element.prop('scrollHeight');
                    var hiddenContentHeight = scrollableHeight - visibleHeight;

                    if (hiddenContentHeight - element.scrollTop() <= threshold) {
                        // Scroll is almost at the bottom. Loading more rows
                        scope.$apply(attrs.whenScrollEnds);
                    }
                }); */
            }
        };
    });