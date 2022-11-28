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
let popupExit = document.querySelectorAll(".popup-product__exit");
let popupBlock = document.querySelectorAll(".popup-product__block");


popupBtns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');
        document.querySelector(`[data-target="${path}"]`).classList.add('popup-product__item_active');
    })
})

popupExit.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-target');
        document.querySelector(`[data-target="${path}"]`).classList.remove('popup-product__item_active');

    })
})

popupProductItem.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-target');
        let div = document.querySelector(`[data-target2="${path}"]`)
        const withinBoundaries = e.composedPath().includes(div);
        if ( ! withinBoundaries ) {
            el.classList.remove('popup-product__item_active');
        }
    })
})

// переключение картинок в продуктовом попапе

let imgPreview = document.querySelectorAll(".popup-product__block-img-item-preview");
let imgMain = document.querySelectorAll(".popup-product__block-img-item-main-img");

imgPreview.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-previewimg');
        let img = document.querySelector(`[data-mainimg="${path}"]`)
        imgPreview.forEach((ele) => {
            ele.classList.remove('popup-product__block-img-item-preview_active');
        });
        el.classList.add('popup-product__block-img-item-preview_active');

        imgMain.forEach((elem) => {
            elem.classList.remove('popup-product__block-img-item-main-img_active');
        })
        img.classList.add('popup-product__block-img-item-main-img_active');
    })
})


// попап - заявка

let popupRequest = document.querySelector(".popup-request");
let popupRequestbtn = document.querySelectorAll(".popup-request-btn");

popupRequestbtn.forEach((el) => {
    el.addEventListener("click", (e) => {
        popupRequest.classList.add('popup-request_active');
    })
})


