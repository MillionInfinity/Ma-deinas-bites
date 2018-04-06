    "use strict";
         let $ = require('jquery');




         
        // $('#ab').click(function () {
        //     $('#ab').attr('src', 'imgs/parm-qv.png');
        // });


$(function () {
    $("#ab").on({
        mouseenter: function () {
            $(this).attr('src', 'imgs/parm-qv.png');
        },
        mouseleave: function () {
            $(this).attr('src', 'imgs/parm.png');
        }
    });

});

$(function () {
    $("#bc").on({
        mouseenter: function () {
            $(this).attr('src', 'imgs/oatmeal_bites-qv.png');
        },
        mouseleave: function () {
            $(this).attr('src', 'imgs/oatmeal_bites.png');
        }
    });

});

$(function () {
    $("#cd").on({
        mouseenter: function () {
            $(this).attr('src', 'imgs/jam_poppy-qv.png');
        },
        mouseleave: function () {
            $(this).attr('src', 'imgs/jam_poppy.png');
        }
    });

});

$("#background").click(function(){
    window.location="shop.html";
});

$("#shop").click(function () {
    window.location = "shop.html";
});



//for collapse button item.html


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}