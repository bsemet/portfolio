jQuery(document).ready(function ($) {

    $("#pageArticle").hide();
    $("#content").load("includes/work.html");
    $('#awork').click(function () {
        $(".jsgallery-container").remove();
        $("#awork").addClass("linkactive");
        $("#askills").removeClass("linkactive");
        $("#pageArticle").fadeOut(300, function () {
            $('#containerArticle').find('div').each(function () {
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
                            $('#containerArticle').find('div').each(function () {
                                $(this).empty();
                            });
                            $("#galleryTitle").append("Pélerinage Sonore");
                            $("#galleryText").append('<div class="card-body">Pélerinage Sonore is a techno festival organised by 3 DJ friends. '
                                + 'They needed banners for the events on the social medias. </br>'
                                + 'The first banner was for their second event. The event was called "Sharing Days". '
                                + 'They wanted a logo that would symbolise the sharing between people. </br>'
                                + 'The second banner was for the event "Clubbing Dead". Here the theme was Halloween. I used the play on words to make a banner'
                                + ' that both relate to the clubbing theme and also the serie The Walking Dead.</div>');
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb" src="img/work/pelerinage/pelerinage1.jpg">')
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb" src="img/work/pelerinage/pelerinage3.jpg">')
                            $("#galleryTech").append('<i class="fas fa-tools"></i> Illustrator, Photoshop, Cinema4D');
                            initGallery();
                            break;
                        case "3":
                            $('#containerArticle').find('div').each(function () {
                                $(this).empty();
                            });
                            $("#galleryTitle").append("Pélerinage Sonore");
                            $("#galleryText").append('<div class="card-body">Pélerinage Sonore is a techno festival organised by 3 DJ friends. '
                                + 'They needed banners for the events on the social medias. </br>'
                                + 'The first banner was for their second event. The event was called "Sharing Days". '
                                + 'They wanted a logo that would symbolise the sharing between people. </br>'
                                + 'The second banner was for the event "Clubbing Dead". Here the theme was Halloween. I used the play on words to make a banner'
                                + ' that both relate to the clubbing theme and also the serie The Walking Dead.</div>');
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb" src="img/work/pelerinage/pelerinage1.jpg">')
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb" src="img/work/pelerinage/pelerinage3.jpg">')
                            $("#galleryTech").append('<i class="fas fa-tools"></i> Illustrator, Photoshop, Cinema4D');
                            initGallery();
                            break;

                    }
                    $("#btnPageBack").removeAttr('style');
                    $("#tableArticle").removeAttr('style');
                    $("#pageArticle").fadeIn(300, function () {

                        $(".thumb").on({
                            mouseenter: function () {
                                $(this).css("opacity", "0.7")
                            },
                            mouseleave: function () {
                                $(this).css("opacity", "1")
                            }
                        });
                        $("#btnPageBack").on("click", function () {
                            $("#awork").click();
                        })
                    });

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

