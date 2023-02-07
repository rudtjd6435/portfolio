$(function(){
  // 스크롤 시 header fade-in
  $(document).on('scroll', function(){
      if($(window).scrollTop() > 100){
          $("#header").removeClass("deactive");
          $("#header").addClass("active");
      }else{
          $("#header").removeClass("active");
          $("#header").addClass("deactive");
      }
  })

});


/***********************************************************/
const Btn1 = document.querySelector('#btn1');
const Btn2 = document.querySelector('#btn2');
const Btn3 = document.querySelector('#btn3');
const Btn4 = document.querySelector('#btn4');

const Txt1 = document.querySelector('.txt1');
const Txt2 = document.querySelector('.txt2');
const Txt3 = document.querySelector('.txt3');
const Txt4 = document.querySelector('.txt4');

Btn1.addEventListener('click', () => Txt1.style.display = 'block');
Btn1.addEventListener('click', () => Txt2.style.display = 'none');
Btn1.addEventListener('click', () => Txt3.style.display = 'none');
Btn1.addEventListener('click', () => Txt4.style.display = 'none');


Btn2.addEventListener('click', () => Txt1.style.display = 'none');
Btn2.addEventListener('click', () => Txt2.style.display = 'block');
Btn2.addEventListener('click', () => Txt3.style.display = 'none');
Btn2.addEventListener('click', () => Txt4.style.display = 'none');

Btn3.addEventListener('click', () => Txt1.style.display = 'none');
Btn3.addEventListener('click', () => Txt2.style.display = 'none');
Btn3.addEventListener('click', () => Txt3.style.display = 'block');
Btn3.addEventListener('click', () => Txt4.style.display = 'none');

Btn4.addEventListener('click', () => Txt1.style.display = 'none');
Btn4.addEventListener('click', () => Txt2.style.display = 'none');
Btn4.addEventListener('click', () => Txt3.style.display = 'none');
Btn4.addEventListener('click', () => Txt4.style.display = 'block');

/*********************************************/
var swiper = new Swiper(".mySwiper", { 
  slidesPerView: 7,
  spaceBetween: 3,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
delay: 600,
stopOnLastSlide: false,
disableOnInteraction: true,
},
});



