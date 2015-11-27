/**
 * Created by Alexander on 2015-11-27.
 */

$(document).ready(function() {


    function fullscreen() {
        $('a').click(function() {
            if(!$(this).hasClass('noeffect')) {
                window.location = $(this).attr('href');
                return false;
            }
        });
    }

    fullscreen();
});