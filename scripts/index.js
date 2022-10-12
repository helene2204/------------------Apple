import Swiper from '../lib/swiper-bundle.esm.browser.min.js';

new Swiper('.goods_block',{
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    320:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
    },
    1024:{
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1440:{
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  navigation:{
    prevEl: '.goods_arrow_prev',
    nextEl: '.goods_arrow_next',
  },
  preventClicks: true,
  a11y: false,
})

const productMoreBtn=document.querySelectorAll('.product_more')
const modal=document.querySelector('.modal')
const formPlaceholder=document.querySelectorAll('.form_placeholder')
const formInput=document.querySelectorAll('.form_input')

productMoreBtn.forEach((btn)=>{
  btn.addEventListener('click', ()=> {
  modal.classList.add('modal_open')
})
})

modal.addEventListener('click',(event)=>{
  if (event.target === modal){
    modal.classList.remove('modal_open')
  }
})

formInput.forEach((input,i)=>{
  input.addEventListener('focus',()=>{
    formPlaceholder[i].classList.add('form_placeholder_active')
  })

  input.addEventListener('blur',()=>{
    if (input.value === ''){
      formPlaceholder[i].classList.remove('form_placeholder_active')
    }
  })
})