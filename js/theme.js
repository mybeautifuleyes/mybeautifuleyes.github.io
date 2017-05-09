// theme javascript

// smooth scrolling and scroll handlers for menu
jQuery(function($) {
    var scrolling = false;

    function setActive(li) {
        $(li).addClass('active').siblings().removeClass('active');
    }

    $('a.smooth-scroll').click(function(e) {
        setActive($(this).parent('li'));

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                scrolling = true;

                $('html,body').animate({
                    scrollTop: target.offset().top - 70
                }, 400, 'swing', function() {
                    scrolling = false;
                });

                return false;
            }
        }
    });

    $(window).on('scroll', function(e) {
        if (scrolling) {
            return;
        }

        var scrollTop = $(window).scrollTop(),
            closestDistance = Number.MAX_VALUE,
            closestId;

            $('a.smooth-scroll').each(function(i, item) {
                var id = $(this).attr('href').replace(/^#/, ''),
                    offset = $('#' + id).offset();

                if (offset && Math.abs(scrollTop - offset.top) < closestDistance) {
                    closestDistance = Math.abs(scrollTop - offset.top);
                    closestId = id;
                }
            });

        if (closestId) {
            setActive($('.navbar li a[href="#' + closestId + '"]').parent());
        }
    });
});

