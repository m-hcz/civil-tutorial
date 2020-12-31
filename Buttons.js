import k1, { copy } from "./kapitoly/k1.js";
import k2 from "./kapitoly/k2.js";
import k3 from "./kapitoly/k3.js";
import k4 from "./kapitoly/k4.js";
import k5 from "./kapitoly/k5.js";
import k6 from "./kapitoly/k6.js";
import k7 from "./kapitoly/k7.js";
import k8 from "./kapitoly/k8.js";
import k9 from "./kapitoly/k9.js";

import k10 from "./kapitoly/k10.js";

$(document).ready(() => {
  // remove copy
  $("#start .copyright").remove();
  // append copy
  $("#start").append(copy);
});

$("#setting").click(() => {});

$("#btn-heading").click(() => {
  // remove all from box2
  $("#kap").empty();
  // remove copy
  $("#start .copyright").remove();
  // append copy
  $("#start").append(copy);

  $(".box2").addClass("box-hidden");
  $(".button").removeClass("btn-active");
  $("#start").removeClass("box-hidden");
});

// $("#btn1").click(() => {
//   $(".box-start").addClass("box-hidden");

//   $(".box2").removeClass("box-hidden");

//   $(".button").removeClass("btn-active");
//   $("#btn1").addClass("btn-active");

//   // remove all from box2
//   $("#kap").empty();
//   // append new chapter
//   $("#kap").append(k1);

//   resizeTextArea();
// });

$(".btn-click").each(function (i) {
  $(this).click(function () {
    $(".box-start").addClass("box-hidden");

    $(".box2").removeClass("box-hidden");

    $(".button").removeClass("btn-active");
    $(this).addClass("btn-active");

    // remove all from box2
    $("#kap").empty();
    // append new chapter
    $("#kap").append(() => {
      switch (i) {
        case 0:
          return k1;
        case 1:
          return k2;
        case 2:
          return k3;
        case 3:
          return k4;
        case 4:
          return k5;
        case 5:
          return k6;
        case 6:
          return k7;
        case 7:
          return k8;
        case 8:
          return k9;
        case 9:
          return k10;
      }
    });

    resizeTextArea();
    prependLink();
  });
});

function resizeTextArea() {
  $("textarea").each(function () {
    $(this).height(0);
    $(this).height(this.scrollHeight);
  });
}

function prependLink() {
  $("a").each(function () {
    $(this).prepend(`<i class='fas fa-caret-square-right'></i> `);
  });
}
