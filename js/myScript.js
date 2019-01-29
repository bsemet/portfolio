jQuery(document).ready(function ($) {

    $("#pageArticle").hide();
    $("#content").load("includes/work.html");
    $('#awork').click(function () {
        $(".jsgallery-container").remove();
        $("#awork").addClass("linkactive");
        $("#aprofile").removeClass("linkactive");
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
                    $('html,body').animate({ scrollTop: 0 }, 0);
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
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb" src="img/work/pelerinage/pelerinage1.jpg">');
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb" src="img/work/pelerinage/pelerinage3.jpg">');
                            $("#galleryTech").append('<i class="fas fa-tools"></i> Illustrator, Photoshop, Cinema4D');
                            initGallery();
                            break;
                        case "2":
                            $('#containerArticle').find('div').each(function () {
                                $(this).empty();
                            });
                            $("#galleryTitle").append("Polyenco");
                            $("#galleryText").append('<div class="card-body">During my studies at Polytech Lyon, '
                                + "I have taken part of Polyenco for a year. Polyenco is a junior company, managed by students of the school. "
                                + 'The objective is to earn some experience while being at school. I was a designer.</br>'
                                + 'One of my missions was to create new business cards for the members.</div>');
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb" src="img/work/polyenco/Recto.jpg">');
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb" src="img/work/polyenco/Verso.jpg">');
                            $("#galleryTech").append('<i class="fas fa-tools"></i> GIMP');
                            initGallery();
                            break;
                        case "3":
                            $('#containerArticle').find('div').each(function () {
                                $(this).empty();
                            });
                            $("#galleryTitle").append("Polytech");
                            $("#galleryText").append('<div class="card-body">During my studies at Polytech Lyon, '
                                + "I've been in charge of the creation of banners that will represent the school for the class of 2017. </br>"
                                + 'Every banner is different, and you can actually see the evolution of my skills through the years. </br>'
                                + 'The last banner has been made for a friend that had a website linked to the school.</div>');
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb" src="img/work/polytech/Polytech1a.jpg">');
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb" src="img/work/polytech/Polytech1b.jpg">');
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb" src="img/work/polytech/Polytech2.jpg">');
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb" src="img/work/polytech/Polytech3.jpg">');
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb" src="img/work/polytech/PolytechQuotes.jpg">');
                            $("#galleryTech").append('<i class="fas fa-tools"></i> GIMP, Photoshop, Cinema4D');
                            initGallery();
                            break;
                        case "4":
                            $('#containerArticle').find('div').each(function () {
                                $(this).empty();
                            });
                            $("#galleryTitle").append("Safe Bike");
                            $("#galleryText").append('<div class="card-body">During my studies at Polytech Lyon, '
                                + "for a team exercise, we had to create a fictionnal company, with a concept and a product to sell. </br>"
                                + 'Our company was called Safe Bike and the product was an automatic break for kids bikes. '
                                + 'If it detects that the bike is going too fast, it will safely stop the bike.</br>'
                                + 'Part of my job was to create a logo for the company. Because we didnt have much time for this exercise, '
                                + "I couldn't work in a Agile way, so I created three different logos and let my teammates choose their favorite. </div>");
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb safebike" src="img/work/safebike/safebike1.jpg">');
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb safebike" src="img/work/safebike/safebike2.jpg">');
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb safebike" src="img/work/safebike/safebike3.jpg">');
                            $("#galleryTech").append('<i class="fas fa-tools"></i> Illustrator');
                            initGallery();
                            break;
                            case "5":
                            $('#containerArticle').find('div').each(function () {
                                $(this).empty();
                            });
                            $("#galleryTitle").append("Groen");
                            $("#galleryText").append('<div class="card-body">Groen is the Belgian ecological political party for Flanders. </br>'
                                + "I know some people working there and sometimes I help them create some banners for their social media events, like the one above. </div>");
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb groen" src="img/work/groen/groen8.jpg">');
                            $("#galleryTech").append('<i class="fas fa-tools"></i> Photoshop');
                            initGallery();
                            break;
                            case "6":
                            $('#containerArticle').find('div').each(function () {
                                $(this).empty();
                            });
                            $("#galleryTitle").append("Your Sounds");
                            $("#galleryText").append('<div class="card-body">Your Sounds is a Youtube channel that I created in order to practice my skills on Cinema4D.</br>'
                                +'I was posting musics that I liked with some animations following the music beat. '
                                + "Today the channel is not active but the videos are still available on Youtube. </br>"
                                +"Here is a link to the channel : <a rel='noopener noreferrer' target='_blank' href='https://www.youtube.com/channel/UC_884uSbHpDYJ4Z9POFujMA'><i class='fab fa-youtube-square'></i></div>");
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb" src="img/work/ys/yoursounds2.jpg">');
                            $("#gallerySlider").append('<img class="img-fluid img-thumbnail thumb" src="img/work/ys/yoursounds1.jpg">');
                            $("#galleryTech").append('<i class="fas fa-tools"></i> Cinema 4D');
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
    $("#btnPageBack").on("click", function () {
        $("#awork").click();
    })

    $('#btt').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 500);
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

