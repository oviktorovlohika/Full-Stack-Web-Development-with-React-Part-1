$(document).ready(function () {
   $('#mycarousel').carousel({interva: 2000});
   $('#carouselButton').click(function () {
       if($('#carouselButton').children('span').hasClass('fa-pause')) {
          $('#mycarousel').carousel('pause');
          $('#carouselButton').children('span').removeClass('fa-pause');
          $('#carouselButton').children('span').addClass('fa-play');
       }
       else if ($('#carouselButton').children('span').hasClass('fa-play')) {
          $('#mycarousel').carousel('cycle');
          $('#carouselButton').children('span').removeClass('fa-play');
          $('#carouselButton').children('span').addClass('fa-pause');
       }
   });

   $('#loginModal').click(function () {
      $('#myModal').modal('toggle');
   });

   $('#buttonReserveModal').click(function () {
      $('#reserveModal').modal('toggle');
   });
});