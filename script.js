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

    document.body.addEventListener('touchmove', function(event) {
        console.log(event.source);
        //if (event.source == document.body)
        event.preventDefault();
    }, false);

    window.onresize = function() {
        $(document.body).width(window.innerWidth).height(window.innerHeight);
    }

    $(function() {
        window.onresize();
    });

    $('select').material_select();
});
