(function($, window, document) {
    $(document).ready(function() {
        console.log('StaticPages#dv_sa_cause');
        // $(".maincause-sub-header").typed({
        //     strings: ["What is Eluci?"],
        //     typeSpeed: 0,
        //     callback: function() {
        //         $('.maincause-header').css('opacity', 1);
        //     }
        // });
        $('.eluci-info-holder').css('opacity', 1);

        skrollr.init({
            forceHeight: false,
            smoothScrolling: true
        });

        $('.join-scroll').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
        $('.facts-parent').css('height', $('#dv-block4').height());
    });
}(window.jQuery, window, document));