// script.ts
const toggleButton = document.getElementById("toggleButton") as HTMLButtonElement;
const contents = document.querySelectorAll(".content");

toggleButton.addEventListener("click", () => {
    contents.forEach((content) => {
        const element = content as HTMLElement; // Cast to HTMLElement
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
});
