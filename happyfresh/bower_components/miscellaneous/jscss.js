 	 
         // when click on the menu
 		document.getElementById('show-menu').addEventListener('focus', function () {

           if (screen.width >= 1047) {
               document.getElementById('menu').style.display = 'block';
               document.getElementById('wrapper').style.margin = '0 0 0 180px';
           } else {

                document.getElementById('menu-horizontal').style.display = 'block';
                 height_horizontal_menu = document.getElementById('menu-horizontal').offsetHeight;
                document.getElementById('fixedhpanel').style.margin =  height_horizontal_menu + 'px 0 0 0';       
                
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


      


		   