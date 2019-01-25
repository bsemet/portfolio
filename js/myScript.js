jQuery(document).ready(function ($) {
    $("#content").load("includes/work.html");
    $("#pageArticle").fadeOut(0);
    $('#awork').click(function () {
        $("#awork").addClass("linkactive");
        $("#askills").removeClass("linkactive");
        $("#pageArticle").fadeOut(300, function () {
            $('#pageArticle').find('div').each(function () {
                $(this).empty();
            });
        });
        $("#content").fadeOut(300, function () {
            $("#content").empty();
            $("#content").load("includes/work.html");
            $("#content").fadeIn(300, function () {

                $('.card').on("click", function () {
                    $("#content").fadeOut(300, function () {
                        $("#content").empty();
                    });
                    switch ($(this).attr("id")) {
                        case "1":
                            break;
                        case "3":
                            $('#pageArticle').find('div').each(function () {
                                $(this).empty();
                            });
                            $("#galleryTitle").append("Chester");
                            $("#galleryText").append('<div class="panel-body">Ceci est une photo de chester</div>');
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb" src="img/chesteroml.jpg">')
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb" src="img/chesteroml.jpg">')
                            initGallery();

                            break;

                    }
                    $("#pageArticle").fadeIn(300);
                });

                $(".card").on({
                    mouseenter: function () {
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

    function initGallery() {
        $("body").jsgallery({

            // custom image selector
            imgSelector: "img",

            // 0 = image 1
            currentImage: 0,

            // custom footer of the gallery
            customHTMLFooter: "",

            // click background overlay to close
            bgClickClose: true,

            // templates for nav buttons and close button HTML
            leftNavHTML: '<i class="fa fa-chevron-left">',
            rightNavHTML: '<i class="fa fa-chevron-right">',
            closeHTML: '<i class="fa fa-times"></i>'

        });
    }

});

