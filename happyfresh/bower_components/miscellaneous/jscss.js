 	 
         // when click on the menu
 		document.getElementById('show-menu').addEventListener('focus', function () {
             
           if (screen.width >= 785) {
               document.getElementById('menu').style.display = 'block';
               document.getElementById('wrapper').style.margin = '0 0 0 180px';
           } else {

                document.getElementById('menu-horizontal').style.display = 'block';
                /* height_horizontal_menu = document.getElementById('menu-horizontal').offsetHeight;
                document.getElementById('fixedhpanel').style.margin =  height_horizontal_menu + 'px 0 0 0';    
                */   
                
            }
    });


 
 
        // when blur in menu

      /*    document.getElementById('show-menu').addEventListener('blur', function () {

                
                        setTimeout(function() {
                            document.getElementById('menu').style.display = 'none';
                            document.getElementById('wrapper').style.margin = '0 0 0 0';
                       }, 300); 
                  
          
        }); */


         document.getElementById('wrapper').addEventListener('focus', function () {
                    setTimeout(function() {
                            document.getElementById('menu').style.display = 'none';
                            document.getElementById('wrapper').style.margin = '0 0 0 0';
                       }, 300); 

                     document.getElementById('fixedhpanel').style.margin = '0 0 0 0';   
                     document.getElementById('menu-horizontal').style.display = 'none';
            
        });


        

        function menublur() {

                 setTimeout(function() {
                            document.getElementById('menu').style.display = 'none';
                            document.getElementById('wrapper').style.margin = '0 0 0 0';
               }, 300); 

                  document.getElementById('fixedhpanel').style.margin = '0 0 0 0'; 
                  document.getElementById('menu-horizontal').style.display = 'none';

         };


        function menufocus() {
                 setTimeout(function() { 
                      document.getElementById('menu').style.display = 'block';
                      document.getElementById('wrapper').style.margin = '0 0 0 180px';
                 }, 300);
         };


        function horizontalmenufocus() {
                  setTimeout(function() { 
                        document.getElementById('menu-horizontal').style.display = 'none';
                   }, 500);
         };



 

 /* window.onresize = function onresize() {
    var viewportmeta = document.querySelector('meta[name="viewport"]');


      if (viewportmeta) {
        viewportmeta.setAttribute('content', 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0');
        viewportmeta.setAttribute('content', 'width=device-width, minimum-scale=1.0, initial-scale=1.0');
      }
  
}   */

      


      


		   