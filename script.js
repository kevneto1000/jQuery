$(document).ready(function() {
    $("button[id='text']").css("background-color", "red");

    // $("div h1:nth-child(3)").css("background-color", "green");

    // $("#btn").parent().css("border", "1px solid green");

    // $("#btn").parents()
    // .css("border", "5px dotted green")
    // .css("padding", "1rem")
    // .css("margin", "1rem")
    // .css("border-radius", "10px")

    // $("#btn").prev()
    // .css("border", "2px dashed green")
    // .css("padding", "1rem")
    // .css("margin", "1rem")
    // .css("border-radius", "10px")

    $("#btn").prevAll()
    .css("border", "5px dotted green")
    .css("padding", "1rem")
    .css("margin", "1rem")
    .css("border-radius", "10px")

    // $("#btn").prevUntil("#second")
    // .css("border", "5px dotted green")
    // .css("padding", "1rem")
    // .css("margin", "1rem")
    // .css("border-radius", "10px")

    // javascript
    // let sel = document.querySelectorAll("div h1:first-child");

    // for(let each of sel){
    //     each.style.backgroundColor = "blue";
    // }
})