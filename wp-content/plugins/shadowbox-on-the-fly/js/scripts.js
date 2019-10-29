jQuery(document).ready(function ($) {

    Shadowbox.init({
        overlayOpacity: 0.75,
        onOpen: function () {

        },
        onClose: function () {

        }
    });

    var gallery = $('.gallery');
    gallery.prepend('<div class="gallery-note">VIEW GALLERY +</div>');

    $('.gallery-icon').each(function () {
        var src = $(this).find('img').attr('src');

        $(this).find('a').attr({'rel': 'shadowbox[hc-gallery]', 'href': src});
    });

    $('.gallery-icon a').on('click', function (e) {
        e.preventDefault();

    });


    $('.gallery-note a').click(function (e) {
        e.preventDefault();

        var firstLink = $(this).closest('.gallery').find('.gallery-icon').find('a');

        firstLink.click();

    });

/*    // v5*/

    var gallery2 = $('.wp-block-gallery');
    gallery2.prepend('<div class="gallery-note">VIEW GALLERY +</div>');

    $('.blocks-gallery-item figure').each(function () {
        var img = $(this).find('img')
        var src = img.attr('src');

        img.wrap( '<a href="' + src + '" rel="shadowbox[sbof-gallery]"></a>' );
    });




});

