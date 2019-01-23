jQuery(document).ready(function ($) {
    //$("#content").load("includes/galerie.html");
    $("#content").load("includes/work.html");
    //$("#content2").load("includes/skills.html");



    $('#awork').click(function () {
        $("#awork").addClass("linkactive");
        $("#askills").removeClass("linkactive");

        $("#content").fadeOut(300, function () {
            $("#content").empty();
            $("#content").load("includes/work.html");
            $("#content").fadeIn(300, function () {

                $('.card').on("click", function () {
                    switch ($(this).attr("id")) {
                        case "1":

                            $("#content").fadeOut(300, function () {
                                $("#content").empty();
                                $("#content").load("includes/gals/chester.html");
                                $("#content").fadeIn(300);
                            });

                            break;
                        case "2":

                    }
                });

                $(".card").on({
                    mouseenter: function () {
                        console.log("hi");
                        $(this).find(".card-img-top").css("opacity", "0.7")
                    },
                    mouseleave: function () {
                        $(this).find(".card-img-top").css("opacity", "1")
                    }
                });
            });
        });

    });

    $('#askills').click(function () {
        $("#askills").addClass("linkactive");
        $("#awork").removeClass("linkactive");

        $("#content").fadeOut(300, function () {
            $("#content").empty();
            $("#content").load("includes/skills.html");
            $("#content").fadeIn(300, function () {
                $("#containerskills").find(".row").on({
                    mouseenter: function () {

                        $(this).children().addClass("hoverOn");
                        $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': 2 * Math.PI * 35 }, 1);
                        $('svg.radial-progress').each(function (index, value) {

                            // Get percentage of progress
                            percent = $(value).data('percentage');
                            // Get radius of the svg's circle.complete
                            radius = $(this).find($('circle.complete')).attr('r');
                            // Get circumference (2πr)
                            circumference = 2 * Math.PI * radius;
                            // Get stroke-dashoffset value based on the percentage of the circumference
                            strokeDashOffset = circumference - ((percent * circumference) / 100);
                            // Transition progress for 1.25 seconds
                            $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);

                        });
                    },
                    mouseleave: function () {
                        $(this).children().removeClass("hoverOn");
                    }
                });
                $('svg.radial-progress').each(function (index, value) {
                    $(this).find($('circle.complete')).removeAttr('style');
                });

                $('svg.radial-progress').each(function (index, value) {

                    // Get percentage of progress
                    percent = $(value).data('percentage');
                    // Get radius of the svg's circle.complete
                    radius = $(this).find($('circle.complete')).attr('r');
                    // Get circumference (2πr)
                    circumference = 2 * Math.PI * radius;
                    // Get stroke-dashoffset value based on the percentage of the circumference
                    strokeDashOffset = circumference - ((percent * circumference) / 100);
                    // Transition progress for 1.25 seconds
                    $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);

                });
            });
        });

    });



    $("#awork").click();


});

