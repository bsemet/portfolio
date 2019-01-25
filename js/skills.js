jQuery(document).ready(function ($) {
   
    $('#askills').click(function () {
        $("#askills").addClass("linkactive");
        $("#awork").removeClass("linkactive");
        $("#pageArticle").fadeOut(300, function () {
            $('#pageArticle').find('div').each(function () {
                $(this).empty();
            });
        });
        $("#content").fadeOut(300, function () {
            $("#content").empty();
            $("#content").load("includes/skills.html");
            $("#content").fadeIn(300, function () {
                $("#containerskills").find(".row").on({
                    mouseenter: function () {

                        $(this).children().addClass("hoverOn");
                        //Efface le remplissage
                        $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': 2 * Math.PI * 35 }, 1);
                        //Relance l'animation sur ce cercle
                        animateCircle($(this).find($('svg.radial-progress')))
                        
                    },
                    mouseleave: function () {
                        $(this).children().removeClass("hoverOn");
                    }
                });
                $('svg.radial-progress').each(function () {
                    $(this).find($('circle.complete')).removeAttr('style');
                });

                //animateCircle($(".circle1"));
                animateAllCircles();
            });
        });

    });

    //Anime un cercle, passé en parametre
    function animateCircle(x) {
        if (x) {
            // Get percentage of progress
            percent = $(x).attr("data-percentage")
            // Get radius of the svg's circle.complete
            radius = $(x).find($('circle.complete')).attr('r');
            // Get circumference (2πr)
            circumference = 2 * Math.PI * radius;
            // Get stroke-dashoffset value based on the percentage of the circumference
            strokeDashOffset = circumference - ((percent * circumference) / 100);
            // Transition progress for 1.25 seconds
            $(x).find($('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);
        }
    }
    //Anime tous les cercles
    function animateAllCircles(){
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
    }

});

