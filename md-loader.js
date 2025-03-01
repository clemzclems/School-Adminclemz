document.addEventListener("DOMContentLoaded", function() {
    fetch("results.md")
    .then(response => response.text())
    .then(text => {
        document.querySelector("#results").innerHTML = marked(text);
    });
});