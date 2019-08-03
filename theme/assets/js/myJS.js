"use strict";



/*-------------------
* MATM UI KIT js
-------------------*/

$(document).ready(function () {


    (function(){
        new WOW().init();
    })();





/*---------------------------
Wave effect Init
---------------------------*/
(function(){
 // Waves.attach('.btn:not(.btn-icon):not(.btn-float)');
 // Waves.attach('.btn-icon, .btn-float', ['waves-circle', 'waves-float']);
 Waves.init();
})();


/*---------------------------
bootstrap 4 Init
---------------------------*/
(function(){
        // Select all elements with data-toggle="tooltips" in the document
        $('[data-toggle="tooltip"]').tooltip(); 

        // Select all tabs
        $('.nav-tabs a').click(function(){
          $(this).tab('show');
      })

        // $('.collapse').collapse();


        // scroll spy navbar
        $('body').scrollspy({target: ".navbar"})

        // Select all elements with data-toggle="popover" in the document
        $('[data-toggle="popover"]').popover(); 

        // Enable manually modal
        $("#myModal").modal();
        $('#theModal').on('shown.bs.modal', function () {
          $('.modal-btn').trigger('focus')
      });
        // $('#theModal').modal('toggle'); /* show dialog after page load */

        // dropdown
        $('.dropdown-toggle').dropdown();
        $().dropdown('toggle');
        // collapse
        // $('.collapse').collapse();

        // button
        $('.btn').button();

        // alert
        $('.close').alert("close");

        // Activate Carousel
        $("#myCarousel").carousel();
        // Enable Carousel Indicators
        $(".item").click(function(){
          $("#myCarousel").carousel(1);
      });
        // Enable Carousel Controls
        $(".carousel-control-prev").click(function(){
          $("#myCarousel").carousel("prev");
      });

    })();


});






/*========Start Search Box==========*/
function openSearch() {
	document.getElementById("mySearchBoxId").style.display = "block";
}

function closeSearch() {
	document.getElementById("mySearchBoxId").style.display = "none";
}/*========End Search Box==========*/






