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
window.addEventListener('DOMContentLoaded', function() {
    var galleryContainer = document.getElementById('gallery-container');

    // Array of image filenames
    var imageFilenames = [
        'memes/ASY1.jpg',
        'memes/ASY2.jpg',
        'memes/ASY3.jpg',
        'memes/ASY4.jpg',
        'memes/ASY5.jpg',
        'memes/ASY6.jpg',
        'memes/ASY7.jpg',
        'memes/ASY8.jpg',
        'memes/ASY9.jpg',
        'memes/ASY10.jpg',
        'memes/ASY11.jpg',
        'memes/ASY12.jpg',
        'memes/ASY13.jpg',
        'memes/ASY14.jpg',
        'memes/ASY15.jpg',
        'memes/ASY16.jpg',
        'memes/ASY17.jpg',
        'memes/ASY18.jpg',
        // Add more filenames as needed
    ];

    // Generate HTML for each image
    imageFilenames.forEach(function(filename) {
        var galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        var link = document.createElement('a');
        link.href = filename;
        link.target = '_blank';

        var img = document.createElement('img');
        img.src = filename;
        img.alt = 'Image';

        link.appendChild(img);
        galleryItem.appendChild(link);
        galleryContainer.appendChild(galleryItem);
    });
});



