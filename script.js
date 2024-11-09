// script.ts
var toggleButton = document.getElementById("toggleButton");
var contents = document.querySelectorAll(".content");
toggleButton.addEventListener("click", function () {
    contents.forEach(function (content) {
        var element = content; // Cast to HTMLElement
        if (element.style.display === "none") {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });
});
