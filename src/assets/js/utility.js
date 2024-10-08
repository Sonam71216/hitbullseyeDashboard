
$(document).ready(function() {
    var owl = $('#owl-slider');
    owl.owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false
    });
});

/**sticky header**/

window.onscroll = function () {
    var header = document.querySelector("header");
    if (window.pageYOffset > 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };
  
  