$(document).ready(function() {
    console.log("Website loaded successfully!");
    $("form").submit(function(event) {
        alert("Application submitted! We'll review your details.");
    });
});