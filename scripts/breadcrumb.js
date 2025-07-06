// breadcrumb.js
document.addEventListener("DOMContentLoaded", function () {
    const breadcrumb = document.querySelector(".abc-breadcrumb");
    const content = breadcrumb.getAttribute("data-content");
    if (content) {
        breadcrumb.textContent = content;
    } else {
        breadcrumb.textContent = "ABC - Legal";
    }
});
