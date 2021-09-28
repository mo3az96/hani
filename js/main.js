$(document).ready(function () { 
    $('.menu-icon').click(function () {
        $(".header-sidenav").slideToggle(300);
        $(this).toggleClass("act");
        $("body").toggleClass("overflow");
    }); 

});