$(function () {
    $("#slider1").carousel({
        interval: 2000,
        keyword: false,
        wrap: false
    });
});

$(document).ready(function () {
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });
});

document.getElementsByTagName("a").style.margin = "10px";

$(document).ready(function () {
    $(".fa").css({
        "padding": "8px",
        "font-size": "30px",
        "width": "32px",
        "text-aling": "center",
        "text-decoration": "none",
        "margin":"5px 2px"
    });

    $(".fa-facebook-f").css({
        "background": "#3B5998",
        "color":"white"
    });

    $("p#sosyalmedya:a").css({
        "backgorund":"black"
    });
});







//var resimler = [
//    {
//        image: 'icindekiler.png'
//    },
//    {
//        image: 'e-defterresim.jpg'
//    },
//    {
//        image: 'e-faturaresim.jpg'
//    }
//];

//document.querySelector('.card-img-bottom').setAttribute('src', resimler[2].image);
