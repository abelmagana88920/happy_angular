 		
         // when click on the menu
 		document.getElementById('show-menu').addEventListener('focus', function () {
            document.getElementById('menu').style.display = 'block';
            document.getElementById('wrapper').style.margin = '0 0 0 180px';
        });


        // when blur in menu

        


         document.getElementById('show-menu').addEventListener('blur', function () {

           setTimeout(function() {
                document.getElementById('menu').style.display = 'none';
                document.getElementById('wrapper').style.margin = '0 0 0 0';
           }, 300); //delay 0.5 sec	
          
        });


      


		   