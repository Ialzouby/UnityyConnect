(function ($) {
  "use strict";
  console.clear();

  let device_width = window.innerWidth;
  var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(
      navigator.userAgent
    )
      ? true
      : false;
  var webvibe = {
    /* Init */
    init() {
      webvibe.mobileMenu();
      webvibe.sidebarToggle();
      webvibe.marquee();
      webvibe.stickySidebar();
      webvibe.scrollBtn();
      webvibe.slider();
      webvibe.counter();
      webvibe.popup();
    },

    slider() {
      if ($(".team-slider").length) {
        new Swiper(".team-slider", {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".arrow-next",
            prevEl: ".arrow-prev",
          },
        });
      }
      if ($(".testimonial-slider-items").length) {
        new Swiper(".testimonial-slider-items", {
          pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
          },
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        });
      }
    },
    marquee() {
      if ($(".marquee").length) {
        $(".marquee").marquee({
          speed: 70,
          gap: 100,
          delayBeforeStart: 0,
          direction: "left",
          duplicated: true,
          pauseOnHover: false,
          startVisible: true,
        });
      }
      if ($(".marquee2").length) {
        $(".marquee2").marquee({
          speed: 70,
          gap: 30,
          delayBeforeStart: 0,
          direction: "left",
          duplicated: true,
          pauseOnHover: true,
          startVisible: true,
        });
      }
    },
    mobileMenu() {
      $(".menu-bar").on("click", function () {
        $(".mobile_menu_content").addClass("opened");
        $(".body-overlay").addClass("apply");
      });
      $(".close_btn").on("click", function () {
        $(".mobile_menu_content").removeClass("opened");
        $(".body-overlay").removeClass("apply");
      });
      $(".body-overlay").on("click", function () {
        $(".mobile_menu_content").removeClass("opened");
        $(".body-overlay").removeClass("apply");
      });

      if ($("#navbarNav").length && $(".main-menu-mobile").length) {
        let navContent = document.querySelector("#navbarNav").outerHTML;
        let mobileNavContainer = document.querySelector(".main-menu-mobile");
        mobileNavContainer.innerHTML = navContent;

        let arrow = $(".main-menu-mobile .dropdown-nav > a");

        arrow.each(function () {
          let self = $(this);
          let arrowBtn = document.createElement("BUTTON");
          arrowBtn.classList.add("dropdown-toggle-btn");
          arrowBtn.innerHTML = "<i class='fa-light fa-angle-down'></i>";

          self.append(function () {
            return arrowBtn;
          });

          self.on("click", function (e) {
            e.preventDefault();
            let self = $(this);
            self.toggleClass("dropdown-opened");
            self.parent().toggleClass("expanded");
            self
              .parent()
              .parent()
              .addClass("dropdown-opened")
              .siblings()
              .removeClass("dropdown-opened");
            self.parent().children(".submenu").slideToggle();
          });
        });
      }
    },
    sidebarToggle() {
      $(".toggle-sidebar").click(function () {
        $(".sidebar").addClass("open");
        $(".sidebar-overlay").addClass("open");
      });
      $(".sidebar-overlay").click(function () {
        $(".sidebar").removeClass("open");
        $(".sidebar-overlay").removeClass("open");
      });
    },
    stickySidebar() {
      $(window).on("scroll", function () {
        if ($(".main-menu").length) {
          var windowpos = $(window).scrollTop();
          var siteHeader = $(".main-menu");
          //    var scrollLink = $(".scroll-top");
          if (windowpos >= 250) {
            siteHeader.addClass("fixed-header");
            // scrollLink.fadeIn(300);
          } else {
            siteHeader.removeClass("fixed-header");
            // scrollLink.fadeOut(300);
          }
        }
      });
    },
    scrollBtn() {
      $(".scroll_btn").on("click", function () {
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          300
        );
      });

      $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 500) {
          $(".scroll_btn").fadeIn();
        } else {
          $(".scroll_btn").fadeOut();
        }
      });
    },
    counter() {
      $(".counter").countUp();
    },
    popup() {
      $(".play-btn").magnificPopup({
        type: "iframe",
      });
    },
  };
  $(document).ready(function () {
    AOS.init({ offset: 30, duration: 1500 });
    $("select").niceSelect();
    webvibe.init();
    // const wcuLists = document.querySelectorAll(".wcu-lists li");
    // const wcuImg = document.querySelector("#wcu-img");
    // wcuLists.forEach((li) => {
    //   li.addEventListener("mouseenter", function () {
    //     const img = this.getAttribute("data-img");
    //     if (img) {
    //       wcuImg.src = img;
    //     }
    //   });
    // });
  });
})(jQuery);
