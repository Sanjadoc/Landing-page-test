$(document).ready(function() {
 
                  $("#owl-products").owlCarousel({
                        items : 5,
                        itemsCustom : false,
                        itemsDesktop : [1199,4],
                        itemsDesktopSmall : [980,3],
                        itemsTablet: [768,2],
                        itemsTabletSmall: false,
                        itemsMobile : [479,1],
                        singleItem : false,
                        itemsScaleUp : false,
                      
                      
                        //Basic Speeds
                        slideSpeed : 200,
                        paginationSpeed : 800,
                        rewindSpeed : 1000,

                        //Autoplay
                        autoPlay : true,
                        stopOnHover : false,
                      
                        // Responsive 
                        responsive: true,
                        responsiveRefreshRate : 200,
                        responsiveBaseWidth: window,
                      
                        // CSS Styles
                        baseClass : "owl-carousel",
                        theme : "owl-theme",
                       
                        //Auto height
                        autoHeight : true,
                  });
                });