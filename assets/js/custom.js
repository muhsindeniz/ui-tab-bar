$(document).ready(function () {

    $("#home").css({ 'filter': 'grayscale(100%)' });
    $("#likes").css({ 'filter': 'grayscale(100%)' });
    $("#search").css({ 'filter': 'grayscale(100%)' });
    $("#user").css({ 'filter': 'grayscale(100%)' });

    $("#home").click(function () {

        $("#home").css({ 'transition': 'all .6s ease-out', 'transform': 'scale(1.8) rotate(360deg)', 'filter': 'grayscale(0%)' });
        $("#likes").css({ 'transition': 'all .6s ease-out', 'transform': '', 'filter': 'grayscale(100%)' });
        $("#search").css({ 'transition': 'all .6s ease-out', 'transform': '', 'filter': 'grayscale(100%)' });
        $("#user").css({ 'transition': 'all .6s ease-out', 'transform': '', 'filter': 'grayscale(100%)' });


        $('body').css({ 'background-color': '#872607', 'transition': 'ease .4s all' });
    });

    $("#likes").click(function () {

        $("#home").css({ 'transition': 'all .6s ease-out', 'transform': '', 'filter': 'grayscale(100%)' });
        $("#likes").css({ 'transition': 'all .6s ease-out', 'transform': 'scale(1.8) rotate(360deg)', 'filter': 'grayscale(0%)' });
        $("#search").css({ 'transition': 'all .6s ease-out', 'transform': '', 'filter': 'grayscale(100%)' });
        $("#user").css({ 'transition': 'all .6s ease-out', 'transform': '', 'filter': 'grayscale(100%)' });

        $('body').css({ 'background-color': '#F4989E', 'transition': 'ease .4s all' });
    });

    $("#search").click(function () {

        $("#home").css({ 'transition': 'all .6s ease-out', 'transform': '', 'filter': 'grayscale(100%)' });
        $("#likes").css({ 'transition': 'all .6s ease-out', 'transform': '', 'filter': 'grayscale(100%)' });
        $("#search").css({ 'transition': 'all .6s ease-out', 'transform': 'scale(1.8) rotate(360deg)', 'filter': 'grayscale(0%)' });
        $("#user").css({ 'transition': 'all .6s ease-out', 'transform': '', 'filter': 'grayscale(100%)' });

        $('body').css({ 'background-color': '#FFCC66', 'transition': 'ease .4s all' });
    });

    $("#user").click(function () {

        $("#home").css({ 'transition': 'all .6s ease-out', 'transform': '', 'filter': 'grayscale(100%)' });
        $("#likes").css({ 'transition': 'all .6s ease-out', 'transform': '', 'filter': 'grayscale(100%)' });
        $("#search").css({ 'transition': 'all .6s ease-out', 'transform': '', 'filter': 'grayscale(100%)' });
        $("#user").css({ 'transition': 'all .6s ease-out', 'transform': 'scale(1.8) rotate(360deg)', 'filter': 'grayscale(0%)' });

        $('body').css({ 'background-color': '#21a394', 'transition': 'ease .4s all' });
    });
});