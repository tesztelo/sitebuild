$( document ).ready(function() {
    
    /* MODAL */

    $(function() {

        //----- NYIT

        $('[data-popup-open]').on('click', function(e)  {
            var targeted_popup_class = jQuery(this).attr('data-popup-open');
            $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

            e.preventDefault();

        });

        //----- BEZÁR

        $('[data-popup-close]').on('click', function(e)  {
            var targeted_popup_class = jQuery(this).attr('data-popup-close');
            $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

            e.preventDefault();

        });

    });

        /*PLACEHOLDER KATT*/

        $('input,textarea').focus(function(){
           $(this).data('placeholder',$(this).attr('placeholder'))
                  .attr('placeholder','');
        }).blur(function(){
           $(this).attr('placeholder',$(this).data('placeholder'));
        });


    /*DASHBOARD */

        /*BEÁLLÍTÁS - CHECKBOX*/

        $('input[name="check-telefon"]').on('click', function(){
            if ( $(this).is(':checked') ) {
                $('input[name="dashboard-telefon"]').fadeIn()
;
                $('.dashboard-telefon button').fadeIn()
;
            } 
            else {
                $('input[name="dashboard-telefon"]').fadeOut()
;
                $('.dashboard-telefon button').fadeOut()
;
            }
        });

        /*MENTÉS GOMB*/
        $('.dashboard-settings button[type="button"]').on('click', function(){
            
                $(this).css("display" , "none");
                $(this).parents('.dashboard-table-row').find('.edit-fields').fadeIn().prev().css("display" , "none");;
                $(this).parents('.dashboard-table-row-item').find('button[type="submit"]').fadeIn(); 
           
        });   
 


        /*ACCORDION*/

        if( jQuery(".toggle .toggle-title").hasClass('active') ){
        jQuery(".toggle.active .toggle-title").closest('.toggle').find('.toggle-inner').show();
        }
        jQuery(".toggle .toggle-title").click(function(){
            if( jQuery(this).parent().hasClass('active') ){
                jQuery(this).parent().removeClass("active").closest('.toggle').find('.toggle-inner').slideUp(200);
            }
            else{   jQuery(this).parent().addClass("active").closest('.toggle').find('.toggle-inner').slideDown(200);
            }
        });


        if( jQuery(".toggle-child .toggle-child-title").hasClass('active') ){
        jQuery(".toggle-child.active .toggle-child-title").closest('.toggle-child').find('.toggle-inner').show();
        }
        jQuery(".toggle-child .toggle-child-title").click(function(){
            if( jQuery(this).parent().hasClass('active') ){
                jQuery(this).parent().removeClass("active").closest('.toggle-child').find('.toggle-child-inner').slideUp(200);
            }
            else{   jQuery(this).parent().addClass("active").closest('.toggle-child').find('.toggle-child-inner').slideDown(200);
            }
        });


});





