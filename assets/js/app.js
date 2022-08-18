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
})