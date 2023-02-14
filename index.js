/********************************************** */
const header = document.querySelector("#header");
const headerHeight = header.getBoundingClientRect().height;
 
window.addEventListener("scroll", () => {
      if (window.scrollY > headerHeight) {
      header.setAttribute("style", "background: #fff;", "z-index: 9999999999;");
   } else {
      
header.setAttribute("style", "background: transparent;");
   }
});
/*********************************************************************/
const h5 = document.querySelector('h5');
    const text = '꾸준한 노력으로 성장해나가고 싶은 개발자 김경성의 프로젝트를 소개합니다.';

    let i = 0;
  
    (function autoType() { 
      if (i < text.length) {
        h5.textContent += text[i];
        i++;
      } else {
        h5.textContent = "";
        i = 0;
      }
      setTimeout(autoType, 100);
    })();


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



