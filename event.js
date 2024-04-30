$(document).ready(function() {

    // $("button").click(function() {
    //     // alert("Welcome to jQuery!")
    //     $("h1").css("color", "red")
    //     $("h1").css("transition", "all 10s ease-in-out")
    //     $("h1").css("transform", "rotate(360deg)")
    // })

    $("input").change(function(){

        let type = $(this).val();

        $("h1").text(type);
    })
})    