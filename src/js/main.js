$(window).ready(function () {
    setTimeout(function(){
        $("[data-typer]").attr("data-typer", function(i, txt) {
            let $typer = $(this),
                tot = txt.length,
                pauseMax = 200,
                pauseMin = 60,
                ch = 0;

            (function typeIt() {
                if (ch > tot) return;
                $typer.html(txt.substring(0, ch++)+"<span>_</span>");
                setTimeout(typeIt, ~~(Math.random() * (pauseMax - pauseMin + 1) + pauseMin));
            }());
        });

        setTimeout(function(){
            window.setInterval(function(){
                $(".header span").toggleClass("d-none"); 
            }, 800);
            $(".fade").fadeIn("slow");
        }, 3000);
    }, 2000);

    if($("#skills").css("opacity") == 1){
        fillBars();
    }
});

function fillBars(){
    var bars = $(".fill");
    setTimeout(function(){
        bars.each(function(index){
            bars.eq(index).css("width", bars.eq(index).attr("fill")+"%");
        });
    }, 1200);
}