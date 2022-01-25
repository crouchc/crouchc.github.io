document.addEventListener('DOMContentLoaded', () => {
    $(".header").click(function () {
        $header = $(this);
        $content = $header.next();
        $(".content").not($content).slideUp().prev().text("More...");
        $content.slideToggle(500, function () {
            $header.text(function () {
                return $content.is(":visible") ? "Less..." : "More...";
            });
        });

    });

    var slideIndex = 0;
    showSlides();

    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
})