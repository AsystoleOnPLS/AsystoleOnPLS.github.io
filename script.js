$(document).ready(function() {
    $(".navbar .nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var navHeight = $(".navbar").outerHeight();
            $('html, body').animate({
                scrollTop: $(hash).offset().top - navHeight
            }, 800, function() {
                history.pushState(null, null, hash);
            });
        }
    });
});
