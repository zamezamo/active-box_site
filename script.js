$(function () {
  console.log("Start script.js");

  // Fixed Header
  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();

  let nav = $("#nav");
  let navToggle = $("#navToggle");

  $(window).on("scroll resize", function () {
    scrollPos = $(this).scrollTop();
    introH = intro.innerHeight();
    checkScroll(scrollPos, introH);
    //console.log(scrollPos);
  });

  function checkScroll(scrollPos, introH) {
    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  //   Smooth scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elemID = $(this).data("scroll");
    let elemOffset = $(elemID).offset().top;

    nav.removeClass("show");

    $("html, body").animate(
      {
        scrollTop: elemOffset - 70,
      },
      1000
    );
    // console.log(elemID);
    // console.log(elemOffset);
  });

  //   NAV TOGGLE
  $("#navToggle").on("click", function (event) {
    event.preventDefault();
    nav.toggleClass("show");
  });


//   Reviews: slick.js CDN
  let slider = $("#reviewsSlider");

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });
});
