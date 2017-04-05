console.log("Hi");

// magic
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


$( document ).ready(function() {
    var ctrlVideo = document.getElementById("videoplay");

    $('.playpause').click(function(){

        if (!$('.playpause').hasClass("active")){
            ctrlVideo.play();
            $('.playpause').toggleClass("active");
            $('.playpause').removeClass("deactive");
        }

        if (($('.playpause').hasClass("active"))) {
            $('#videoplay').click(function() {
                ctrlVideo.pause();
                $('.playpause').toggleClass("deactive");
                $('.playpause').removeClass("active");

            })

        }

        else {
            ctrlVideo.pause();
            $('.playpause').toggleClass("deactive");
        }
    });

});
