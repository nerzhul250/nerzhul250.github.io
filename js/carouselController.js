$('.carousel').carousel({
    interval: 2000
})

// Enable Carousel Controls
$(".carousel-control-prev").click(function(){
    $(".carousel").carousel("prev");
});
$(".carousel-control-next").click(function(){
    $(".carousel").carousel("next");
});