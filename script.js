$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var navHeight = $(".navbar").outerHeight();
            $('html, body').animate({
                scrollTop: $(hash).offset().top - navHeight
            }, 800, function(){
                // window.location.hash = hash;
                history.pushState(null, null, hash);
            });
        }
    });
});
