
// Get the project list items
const projectListItems = document.querySelectorAll('.project-list li');

// Get the project info elements
const projectInfoElements = document.querySelectorAll('.project-info');

// Add event listeners to project list items
projectListItems.forEach(item => {
    item.addEventListener('click', () => {
    // Get the ID of the clicked item
    const id = item.getAttribute('data-id');

    // Remove the 'active' class from all project info elements
    projectInfoElements.forEach(info => {
        info.classList.remove('active');
    });

    // Add the 'active' class to the project info element with the corresponding ID
    const projectInfo = document.querySelector(`#${id}`);
    projectInfo.classList.add('active');
    });


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