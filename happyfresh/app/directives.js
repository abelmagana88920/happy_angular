
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




app.directive('productCart', function($compile, $parse, $filter, localStorageService,improveService) {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: '../partials/freshRecord.html',
        scope: {
             productObject: '=',
             numberObject: '=',
             index: '@',
             parent: '@',
             wowValue: '@',
             sizeGrid: '@',
             menuCategory: '=',
             modalDisplay: '@',
             totalCart: '@'
        },
        controller: function ($scope) { 

             var s_index = $scope.index;
             var s_productObject = $scope.productObject;
             var available_stock = s_productObject.data[s_index].availablestock == undefined ? (99999999999):s_productObject.data[s_index].availablestock;
            
             s_productObject.data[s_index].availablestock = s_productObject.data[s_index].availablestock == undefined ? 'Always Available': s_productObject.data[s_index].availablestock;
          
             if (s_productObject.data[s_index].counter == null ) s_productObject.data[s_index].counter=0;

             $scope.count_cart = function(operation) {
 
                    if (operation == 'plus' && (s_productObject.data[s_index].counter < available_stock || available_stock == 'Always Available') ) 
                            s_productObject.data[s_index].counter++;  
                    else if (operation == 'minus' && s_productObject.data[s_index].counter>0) 
                           s_productObject.data[s_index].counter--;
                    else if (operation == 'reset') 
                           s_productObject.data[s_index].counter=0;
 
                    $scope.left = s_productObject.data[s_index].availablestock == 'Always Available' ? '' : 'Will left: ' + (available_stock - s_productObject.data[s_index].counter);
                    $scope.computedprice = s_productObject.data[s_index].price * s_productObject.data[s_index].counter;
                    // if ( $scope.productObject.data[$scope.index].counter == 0) delete($scope.productObject.data[$scope.index].counter);
                     // when  zero clear the counter property

                    $scope.$parent.$parent.counter = parseInt(improveService.selectedCount(s_productObject.data).counter);
                    //  count the number of counter property in a cart using Improve Service

                    productStorage = {}
                    productStorage.data = improveService.findingSorted(s_productObject.data, "counter");
                    //find the property counter then sort it by counter by desc order
      
                    localStorageService.set('productStorage[' + s_productObject.data[s_index].category+ ']',productStorage);  // set and save
                    $scope.$parent.$parent.productSave = productStorage;

                    $scope.$emit('responseCounter', $scope.$parent.$parent.counter);
             }; 
        },
       
        link: function($scope, element, attrs) {
              var s_index = $scope.index;
              $scope.productObject.data[s_index].dataDuration = 800 * (parseInt(s_index%4)+1);  // changes the value of animation resets to 4 columns           
             // scope.productObject[scope.index].hello = scope.$parent.$parent.counter++; // update the value of the parent controller              
        }
       
      };
});

app.directive('dynamicPositionImage', function($compile, $parse) {
  return {
      restrict: 'AC',
      link: function($scope, element, attrs) {
     
          valueOfDynamic =  $parse(element.attr('dynamic-position-image'))($scope);
          if (valueOfDynamic == 'true') full_size = 100;
          else full_size = 210;

          element.bind('load', function() {
              element[0].style.margin = "auto";
              if (element[0].width > element[0].height && valueOfDynamic != 'true') {
                  element[0].style.marginTop = (element[0].width -  element[0].height)/2 + 'px';     
              }

              var computed_size =  full_size / (element[0].height / element[0].width);
              element[0].width = computed_size;
            
            
         });
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
            
                         //console.log(window.innerHeight + ' ' + window.scrollY + ' ' + hiddenContentHeight);
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