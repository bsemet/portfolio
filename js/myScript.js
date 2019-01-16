jQuery(document).ready(function($) {
    //$("#content").load("includes/galerie.html");
    $("#content1").load("includes/work.html");
    $("#content2").load("includes/skills.html");

    //$("#content1").hide();
    $("#content2").hide();
    $("#content3").hide();
    $("#awork").addClass("linkactive");


    $('#awork').click(function(){
        $("#awork").addClass("linkactive");
        $("#askills").removeClass("linkactive");
        $("#content3").fadeOut(300);
        $("#content2").fadeOut(300, function() {
            $("footer").fadeIn(300);
            $("#content1").fadeIn(300, function(){

                $('.card').on( "click", function() {
                    switch ($(this).attr("id")){
                        case "1" :
                            $("#content3").load("includes/gals/chester.html");
                            $("#content1").fadeOut(300, function() {
                                $("#content3").fadeIn(300);
                            });
                            
                        break;
                        case "2":

                    }
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
    
    $('#askills').click(function(){
        $("#askills").addClass("linkactive");
        $("#awork").removeClass("linkactive");
        $("footer").fadeOut(300);
        $(".workdiv").fadeOut(300, function() {
            $("#content2").fadeIn(300);
        });
        
    });
 });