(function($, window, document) {
    $(document).ready(function() {
        // console.log('StaticPages#dv_sa_cause');
        // $(".maincause-sub-header").typed({
        //     strings: ["What is Eluci?"],
        //     typeSpeed: 0,
        //     callback: function() {
        //         $('.maincause-header').css('opacity', 1);
        //     }
        // });
        // $('.eluci-info-holder').css('opacity', 1);

        $('.state').on('click', function () {
            $(this).css('opacity', '0.6');
        });

        $('.email-btn').on('click', function () {
            $(".answer").text("You conquered California and beheaded 1,000 people! Just because California has good weather!");
        });

        $(document).on("ajax:beforeSend", ".email-form", function() {
            console.log('running!');
            $(".loading-gif").removeClass('hidden');
        });

        $(document).on("ajax:complete", ".email-form", function() {
            console.log('running!');
            $(".loading-gif").addClass('hidden');
        });

        $('.lead-btn, .vip-join-btn').on("click", function() {
            $('.loading-gif-join').removeClass('hidden');
        });


        // $(document).on("ajax:beforeSend", ".lead-form", function() {
        //     $(".loading-gif-join").removeClass('hidden');
        // });

        // $(document).on("ajax:complete", ".lead-form", function() {
        //     console.log('running!');
        //     $(".loading-gif").addClass('hidden');
        // });

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

        // $('.email-btn').on("click", function() {
        //     headers: {
        //         Accept: "application/json; charset=utf-8",
        //     },
        //     url: 'http://localhost:3000/emails',
        //     // url: 'http://serene-hollows-1846.herokuapp.com/users/add',
        //     type: 'POST',
        //     datatype: "JSON",
        //     data: {
        //         name: $('.email-btn').val(),
        //     },
        //     success: function jsSuccess(data, textStatus, jqXHR) {

        //     },
        //     error: function jsError(jqXHR, textStatus, errorThrown) {

        //         console.log("ajax failed");
        //     }
        // });
})
}(window.jQuery, window, document));