$(document).ready(function() {

    $("button").css("color", "aqua")
    .css("background-color","black")
    .css("width","100px")
    .css("height","50px")
    .css("border-radius","20px")
    .css("margin", "10px")

    $("#hide").click(function() {
        $("h1").hide(2000)
    })

    $("#show").click(function() {
        $("h1").show(2000)
    })

    $("#toggle").click(function() {
        $("h1").toggle(2000)
    })

    $("#slideup").click(function() {
        $("h1").slideUp(3000)
    })

    $("#slidedown").click(function() {
        $("h1").slideDown(3000)
    })

    $("#slidetoggle").click(function() {
        $("h1").slideToggle(3000)
    })

    $("#fadein").click(function() {
        $("h1").fadeIn(2000)
    })

    $("#fadeout").click(function() {
        $("h1").fadeOut(2000)
    })

    $("#fadetoggle").click(function() {
        $("h1").fadeToggle(2000)
    })

    $("#fadeto").click(function() {
        $("h1").fadeTo(2000, 0.5)
    })
    
    $("#fb").click(function() {
        $("h1").fadeTo(2000, 1)
    })
})