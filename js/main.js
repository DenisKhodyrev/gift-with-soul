// FAQ

let faqQuestion = document.querySelectorAll(".faq__drop-down-list-item-question");
let faqAnswer = document.querySelectorAll(".faq__drop-down-list-item-answer");
let faqArrow = document.querySelectorAll(".faq__drop-down-list-item-arrow");

for (let i = 0; i < faqQuestion.length; i++) {
    faqQuestion[i].addEventListener("click", function () {
        faqAnswer[i].classList.toggle("faq__drop-down-list-item-answer_active");
        faqArrow[i].classList.toggle("faq__drop-down-list-item-arrow_active");
    });
}



// слайдер

let sliderNavigationItem = document.querySelectorAll(".slider__navigation-item");
let sliderSlides = document.querySelector(".slider__slides");
const sliderSlide = document.querySelector(".slider__slide");

for (let i = 0; i < sliderNavigationItem.length; i++) {
    sliderNavigationItem[i].addEventListener("click", function () {
        for (let j = 0; j < sliderNavigationItem.length; j++) {
            sliderNavigationItem[j].classList.remove("slider__navigation-item_active");
        }
        sliderNavigationItem[i].classList.add("slider__navigation-item_active");
        sliderSlides.style.transform="translateX(" + i*-1*sliderSlide.offsetWidth + "px)";
    });
}

let i = 0;
setInterval(() => {
    i = i + 1;
    if (i >= 4) {i = 0}
    sliderSlides.style.transform="translateX(" + i*-1*sliderSlide.offsetWidth + "px)";
    for (let j = 0; j < sliderNavigationItem.length; j++) {
        sliderNavigationItem[j].classList.remove("slider__navigation-item_active");
    }
    sliderNavigationItem[i].classList.add("slider__navigation-item_active");
}, 5000);

window.addEventListener("resize", function(){
    sliderSlides.style.transform="translateX(" + i*-1*sliderSlide.offsetWidth + "px)";
}, true);


// Продуктовые попапы

let popupBtns = document.querySelectorAll(".catalog__item-link-more");
let popupProductItem = document.querySelectorAll(".popup-product__item");

popupBtns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');
        document.querySelector(`[data-target="${path}"]`).classList.add('popup-product__item_active');
    })
})