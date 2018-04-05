    "use strict";
         let $ = require('jquery');




         
        $('#cover').click(function () {
            $('#cover').attr('src', 'imgs/u5.jpg');
        });

$(function () {
    $(".img-swap").live('click', function () {
        if ($(this).attr("class") == "img-swap") {
            this.src = this.src.replace("_off", "_on");
        } else {
            this.src = this.src.replace("_on", "_off");
        }
        $(this).toggleClass("on");
    });
});









// $("#bought").click(function () {
//     $("#welcome").remove();
//     $(".uniContainer-wrapper").html("");
//     loadBoughtBookToDOM();
//     meg.purple();
// });