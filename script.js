$(document).ready(function () {
    new WOW().init();
    $(function () {
        $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
            $("#analytics").mouseover(function(){
              $("#analytics").slideUp(1000);
            }).mouseout(function(){
              $("#design2").slideDown(1000);
            });
            $("#design2").mouseover(function(){
              $("#design2").slideUp(1000);
            }).mouseout(function(){
              $("#analytics").slideDown(1000);
            });

            $("#design").mouseover(function(){
              $("#design").slideUp(1000);
            }).mouseout(function(){
              $("#design3").slideDown(1000);
            });
            $("#design3").mouseover(function(){
              $("#design3").slideUp(1000);
            }).mouseout(function(){
              $("#design").slideDown(1000);
            });

            $("#development").mouseover(function(){
              $("#development").slideUp(1000);
            }).mouseout(function(){
              $("#design4").slideDown(1000);
            });
            $("#design4").mouseover(function(){
              $("#design4").slideUp(1000);
            }).mouseout(function(){
              $("#development").slideDown(1000);
            });
  });
  });