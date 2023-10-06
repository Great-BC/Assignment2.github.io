$(document).ready(function(){
    // Fullscreen Mode

    $('#fullscreen-btn').click(function(){
        $('#header').css("display", "none")
        $('#songIframe').css("display", "none")
        $('#lyrics').css("transition", ".5s")
        $('#lyrics').css("width", "95vw")     
        // Font adjustment

        $('.lyricsText').css("font-size", "40px")
        $('.sadFont').css("font-size", "60px")
        $('.sadFont2').css("font-size", "60px")
        $('.sadFont3').css("font-size", "50px")
        $('.happyFont2').css("font-size", "60px")
        $('.happyFont3').css("font-size", "60px")
        $('.happyFont4').css("font-size", "40px")
        $('.vibrantFont').css("font-size", "65px")
        $('.vibrantFont2').css("font-size", "60px")
        $('.lyricsHead').css("font-size", "55px")
        // cancel button
        $('#fullscreen-btn').css("display", "none")
        $('#cancel-btn').css("width", "60px")
        $('#cancel-btn').css("height", "60px")
        $('#cancel-btn').css("display", "flex")
        

        

    });

    $('#cancel-btn').click(function(){
        $('#header').css("display", "flex")
        $('#songIframe').css("display", "flex")
        $('#cancel-btn').css("display", "none")
        $('#fullscreen-btn').css("display", "flex")

        //
        $('#lyrics').css("width", "37vw")
        // Font adjustment
        $('.lyricsText').css("font-size", "30px")
        $('.lyricsHead').css("font-size", "45px")
        $('.sadFont').css("font-size", "50px")
        $('.sadFont2').css("font-size", "50px")
        $('.sadFont3').css("font-size", "40px")
        $('.happyFont2').css("font-size", "50px")
        $('.happyFont3').css("font-size", "50px")
        $('.happyFont4').css("font-size", "30px")
        $('.vibrantFont').css("font-size", "55px")
        $('.vibrantFont2').css("font-size", "50px")
        
    });
});