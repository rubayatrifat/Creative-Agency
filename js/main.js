var humburgerIcon = document.querySelector('.mobile-menu-humburger');
var mobileMenu = document.querySelector('.nav-menu-mobile');
var closeBtn = document.querySelector('.close-btn');

humburgerIcon.addEventListener('click', function(){
	mobileMenu.style.right = '0px'; 
})

closeBtn.addEventListener('click', function(){
	mobileMenu.style.right = '-350px';
})




  var containerEl = document.querySelector('.portfolio-item');
  var mixer = mixitup(containerEl);

  const swiper = new Swiper('.sliders', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});



  var mybutton = document.querySelector(".scroll-to-top");

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

// mybutton.addEventListener('click', function(){
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// })
  
  $(".scroll-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });


  $('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});






$(window).on('load', function() {
      $("#loading").fadeOut(700);
    })

    new WOW().init()