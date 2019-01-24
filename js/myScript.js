jQuery(document).ready(function ($) {
    $("#content").load("includes/work.html");

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

$("#awork").click();

});

