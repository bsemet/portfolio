jQuery(document).ready(function ($) {
    $('#aprofile').click(function () {
        $(".jsgallery-container").remove();
        $("#aprofile").addClass("linkactive");
        $("#askills").removeClass("linkactive");
        $("#awork").removeClass("linkactive");
        $("#pageArticle").fadeOut(300, function () {
            $('#containerArticle').find('div').each(function () {
                $(this).empty();
            });
        });
        $("#content").fadeOut(300, function () {
            $("#content").empty();
            $("#content").load("includes/profile.html");
            $("#content").fadeIn(300, function () {
                $(".rowprofile").find(".row").on({
                    mouseenter: function () {
                        $(this).children().addClass("hoverOn");
                    },
                    mouseleave: function () {
                        $(this).children().removeClass("hoverOn");
                    }
                });
            });
        });

    });

});

