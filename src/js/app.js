$(function() {

  // Will only work inside scrollable container
  var wow = new WOW({
    boxClass: 'wow',
    scrollContainer: '.main-content'
  });
  wow.init();

  // Will only work inside header
  var wowHeader = new WOW({
    boxClass: 'wowHeader',
    scrollContainer: '.navbar'
  });
  wowHeader.init();

  $('.work-main-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    adaptiveHeight: true,
    infinite: false,
    draggable: false,
    speed: 1
  });

  $('.work-thumbnail-carousel')
    .on('init', function(event, slick) {
      $('.work-thumbnail-carousel .slick-slide.slick-current').addClass('active-state');
    })
    .slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      focusOnSelect: false,
      infinite: false,
      speed: 1,
      responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });

  // $('.work-main-carousel').on('afterChange', function(event, slick, currentSlide) {
  //   $('.work-thumbnail-carousel').slick('slickGoTo', currentSlide);
  //   var currrentNavSlideElem = '.work-thumbnail-carousel .slick-slide[data-slick-index="' + currentSlide + '"]';
  //   $('.work-thumbnail-carousel .slick-slide.is-active').removeClass('is-active');
  //   $(currrentNavSlideElem).addClass('is-active');
  // });

  $('.work-thumbnail-carousel').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    $(this).siblings().removeClass('active-state');
    $(this).addClass('active-state');
    var goToSingleSlide = $(this).data('slick-index');
    //      console.log(goToSingleSlide);
    $('.work-thumbnail-carousel').slick('slickGoTo', goToSingleSlide);
    $('.work-main-carousel').slick('slickGoTo', goToSingleSlide);
  });

  $('.contact-form > .form-group').children('.form-control').each(function(){
    $(this).focusin(function(){
      $(this).parent().addClass('active');
    });
    $(this).focusout(function(){
      $(this).parent().removeClass('active');
    })
  });

  $('#jtNavbar').on('show.bs.collapse', function () {
    $('.navbar-icon').addClass('open');
  });

  $('#jtNavbar').on('hide.bs.collapse', function () {
    $('.navbar-icon').removeClass('open');
  });

  $('#jtNavbar > .navbar-nav > li').each(function(){
    $(this).children('a').click(function(){
      $('#jtNavbar').collapse('hide');
      $('.navbar-icon').removeClass('open');
    });
  });

  $('a[href*="#"]').on('click', function(e) {
    // prevent default action and bubbling
    e.preventDefault();
    e.stopPropagation();
    // set target to anchor's "href" attribute
    var target = $(this).attr('href');
    // scroll to each target
    if (window.matchMedia('(min-width: 1200px)').matches) {
      $(target).velocity('scroll', {
        duration: 500,
        easing: 'ease-in-out'
      });
    } else {
      $(target).velocity('scroll', {
        duration: 500,
        offset: -60,
        easing: 'ease-in-out'
      });
    }
  });




});

console.log(`app.js has loaded!`);
