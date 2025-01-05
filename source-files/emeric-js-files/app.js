/*! ------------------------------------------------
 * Project Name: Emeric - Coming Soon and Portfolio Template
 * Project Description: Emeric - clean and functional coming soon and portfolio template to kick-start your project
 * Tags: mix_design, coming soon, under construction, template, landing page, portfolio, one page, responsive, html5, css3, creative, clean, agency, personal page
 * Version: 1.0.1
 * Build Date: September 2023
 * Last Update: January 2024
 * This product is available exclusively on Themeforest
 * Author: mix_design
 * Author URI: https://themeforest.net/user/mix_design
 * File name: app.js
 * ------------------------------------------------

 * ------------------------------------------------
 * Table of Contents
 * ------------------------------------------------
 *
 *  1. GSAP blur background animation
 *  2. SVG Fallback
 *  3. Chrome Smooth Scroll
 *  4. Images moving ban
 *  5. Menu & Sections Behavior
 *  6. Popup Open/Close
 *  7. Header Appearance Change on Scroll
 *
 * ------------------------------------------------
 * Table of Contents End
 * ------------------------------------------------ */

/*! GSAP blur background animation */
console.clear();
const randomX = random(-400, 400);
const randomY = random(-200, 200);
const randomDelay = random(0, 50);
const randomTime = random(6, 12);
const randomTime2 = random(5, 6);
const randomAngle = random(-30, 150);

const blurs = gsap.utils.toArray(".blur");
blurs.forEach((blur) => {
  gsap.set(blur, {
    x: randomX(-1),
    y: randomX(1),
    rotation: randomAngle(-1)
  });

  moveX(blur, 1);
  moveY(blur, -1);
  rotate(blur, 1);
});

function rotate(target, direction) {
  gsap.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  gsap.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  gsap.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}

$(function() {

  "use strict";

  /*! SVG Fallback */
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };

  /*! Chrome Smooth Scroll */
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {
  };

  /*! Images moving ban */
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

  /*! Menu & Sections Behavior */
  var menuTrigger        = $('#menu-trigger'),
      menuTriggerHead    = $('#menu-trigger-headline'),
      menu               = $('#menu'),
      header             = $('#header'),
      mainSection        = $('#main'),
      aboutSection       = $('#about'),
      worksSection       = $('#works'),
      contactSection     = $('#contact'),
      homeTrigger        = $('#home-trigger'),
      aboutTrigger       = $('#about-trigger'),
      worksTrigger       = $('#works-trigger'),
      contactTrigger     = $('#contact-trigger');

  menuTrigger.on('click', function(event){
    event.preventDefault();

    if (menu.hasClass('animate-in')) {
      menu.addClass('animate-out');
      setTimeout(function(){
        $('.active').addClass('animate-in');
        menuTrigger.removeClass('menu-opened');
        $('.menu').animate({
          scrollTop: 0 ,
        }, 100);
      }, 500);
      setTimeout(function(){
        header.removeClass('menu-is-visible');
        menu.removeClass('animate-in animate-out');
        // if one of the content sections is opened, the header becomes light/transparent
        if ($('.inner').hasClass('active')) {
          header.addClass('inner-is-visible');
        }
      }, 1500);
    } else {
      $('.active').addClass('animate-out');
      
      header.addClass('menu-is-visible');
      menuTrigger.addClass('menu-opened');
      setTimeout(function(){
        menu.addClass('animate-in');
        $('.active, .blocks__scroll').animate({
          scrollTop: 0 ,
        }, 100);
        if ($('.inner').hasClass('active')) {
          header.removeClass('inner-is-visible');
        }
      }, 500);
      setTimeout(function(){
        $('.active').removeClass('animate-out animate-in');
      }, 1200);
    }

  });

  /*! menu open from headline */
  menuTriggerHead.on('click', function(event) {
    event.preventDefault();
    $('.active').addClass('animate-out');
    header.addClass('menu-is-visible');
    menuTrigger.addClass('menu-opened');
    setTimeout(function(){
      menu.addClass('animate-in');
      $('.active, .blocks__scroll').animate({
        scrollTop: 0 ,
      }, 100);
      if ($('.inner').hasClass('active')) {
        header.removeClass('inner-is-visible');
      }
    }, 500);
    setTimeout(function(){
      $('.active').removeClass('animate-out animate-in');
    }, 1200);
  });

  /*! common actions on menu item click */
  $('.navigation__link').on('click', function(event){
    $('.active').removeClass('active');
    $('.active-link').removeClass('active-link');
    menu.addClass('animate-out');
    setTimeout(function(){
      menuTrigger.removeClass('menu-opened');
      $('.menu').animate({
        scrollTop: 0 ,
      }, 100);
    }, 500);
    setTimeout(function(){
      menu.removeClass('animate-in animate-out');
      header.removeClass('menu-is-visible');
    }, 1500);
  });

  /*! home section open */
  homeTrigger.on('click', function(event) {
    event.preventDefault();
    setTimeout(function(){
      mainSection.addClass('active animate-in');
      homeTrigger.addClass('active-link');
    }, 500);
  });

  /*! about section open */
  aboutTrigger.on('click', function(event) {
    event.preventDefault();
    setTimeout(function(){
      aboutSection.addClass('active animate-in');
      aboutTrigger.addClass('active-link');
    }, 500);
    setTimeout(function(){
      header.addClass('inner-is-visible');
    }, 1500);
  });

  /*! works section open */
  worksTrigger.on('click', function(event) {
    event.preventDefault();
    setTimeout(function(){
      worksSection.addClass('active animate-in');
      worksTrigger.addClass('active-link');
    }, 500);
    setTimeout(function(){
      header.addClass('inner-is-visible');
    }, 1500);
  });

  /*! contact section open */
  contactTrigger.on('click', function(event) {
    event.preventDefault();
    setTimeout(function(){
      contactSection.addClass('active animate-in');
      contactTrigger.addClass('active-link');
    }, 500);
    setTimeout(function(){
      header.addClass('inner-is-visible');
    }, 1500);
  });

  /*! Popup Open/Close */
  var notify            = $('#notify'),
      notifyTrigger     = $('#notify-trigger'),
      notifyClose       = $('#notify-close');

  /*! Notify Form Open */
  notifyTrigger.on('click', function(event){
    event.preventDefault();
    notify.addClass('animate-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      notifyClose.addClass('fade-in');
    });
  });

  /*! Notify Form Close */
  notifyClose.on('click', function(event){
    event.preventDefault();
    notifyClose.removeClass('fade-in');
    setTimeout(function(){
      notify.addClass('animate-out');
    }, 300);
    setTimeout(function(){
      notify.removeClass('animate-in animate-out');
    }, 1000);
  });

  /*! Header Appearance Change on Scroll */
  var header         = $('#header'),
      menu           = $('#menu'),
      inner          = $('.inner'),
      aboutSection   = $('#about'),
      worksSection   = $('#works'),
      contactSection = $('#contact'),
      mainSection    = $('#main');

  mainSection.on("scroll", function() {
    if ($('.main__content').offset().top < 10) {
      header.addClass('blurred');
    } else {
      header.removeClass('blurred');
    }
  });

  menu.on("scroll", function() {
    if ($('.menu__content').offset().top < 10) {
      header.addClass('blurred');
    } else {
      header.removeClass('blurred');
    }
  });

  aboutSection.on("scroll", function() {
    if ($('#about .inner__content').offset().top < -50) {
      header.addClass('blurred');
    } else {
      header.removeClass('blurred');
    }
  });

  worksSection.on("scroll", function() {
    if ($('#works .inner__content').offset().top < -50) {
      header.addClass('blurred');
    } else {
      header.removeClass('blurred');
    }
  });

  contactSection.on("scroll", function() {
    if ($('#contact .inner__content').offset().top < -50) {
      header.addClass('blurred');
    } else {
      header.removeClass('blurred');
    }
  });

});