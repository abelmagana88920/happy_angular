
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




app.directive('productCart', function($compile, $parse) {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: '../partials/freshRecord.html',
        scope: {
             productObject: '=',
             timerValue: '@'
        },

        link: function(scope, element, attrs) {

             
             attrs.$observe('tv', function(tv) {
                 if (scope.tv === undefined) scope.tv=1; 
                 else scope.tv++;
             });
           
           
           console.log(scope.timerValue);
           /* scope.disabled = attrs.hasOwnProperty('disabled');
            scope.required = attrs.hasOwnProperty('required');
            scope.pattern = attrs.pattern || '.*'; */
        }
       
      };
});