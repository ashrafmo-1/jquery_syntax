/*
- Click
- Dblclick
- Mouseenter
- Mouseleave
- Hover
*/

$(".desc").hide();
$(document).ready(() => { // remove "p" on page load
  $(".removeP").click(() => {
    // $(".removeP").hide();
    $("p").css("color", "#777");
    $("p").hide(); // remove "p" on page load
  })
  $(".show_desc").dblclick(() => {
    $(".desc").show();
  });
  // mouseenter
  $(".desc").mouseenter(() => {
    $(".desc").css("color", "red");
    $(".desc").css("font-size", "100px");
  });
  // mouseleave
  $(".desc").mouseleave(() => {
    $(".desc").css("color", "#000");
    $(".desc").css("font-size", "50px");
  });
  // hover = mouseenter && mouseleave
  $(".show_desc").hover(() => {
      $(".desc").css("color", "red");
      $(".desc").css("font-size", "10px");
    }, () => {
      $(".desc").css("color", "#000");
      $(".desc").css("font-size", "20px");
    }
  );
})