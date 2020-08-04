$(document).ready(function () {
    $("#mycarousel").carousel({interval: 2000});

    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        } else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
});
$("#myInput").click(function () {
    $('#myModal').modal('toggle')
})
$("#closeBtn").click(function () {
    $('#myModal').modal('hide')
})
$("#closeBtn2").click(function () {
    $('#myModal').modal('hide')
})

$("#loginBtn").click(function () {
    $('#loginModal').modal('toggle')
})
$("#loginCloseBtn").click(function () {
    $('#loginModal').modal('hide')
})
$("#loginCancelBtn").click(function () {
    $('#loginModal').modal('hide')
})


