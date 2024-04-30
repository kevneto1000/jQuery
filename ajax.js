$(document).ready(function() {
    // sending and receiving jokes
    $.ajax({
        type: "get",
        url: "https://v2.jokeapi.dev/joke/Any",
        dataType: "json",
        success: function (response) {
            $("p").text(response.setup)
            $("h1").text(response.delivery)
        }
    });

    $("h3").css("color", "green")

    //animate a text
    new Typed("#animate", {
        strings: ["I am a frontend developer", "reach out to me on", "+2347015796524"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
    })

    // animate on scroll
    AOS.init()
})

