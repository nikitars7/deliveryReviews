import Swiper from "swiper";
import { Navigation, Pagination, Controller } from "swiper/modules";
export const swiper = () => {
  let swiper = new Swiper(".author__slider", {
    modules: [Navigation, Pagination, Controller],
    loop: true,
    slidesPerView: 5,
    autoHeight: true,
    centeredSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".reviews__arrow--left",
      prevEl: ".reviews__arrow--right",
    },
    pagination: {
      el: ".reviews__bullets",
      clickable: true,
    },
    breakpoints: {
      1150: {
        slidesPerView: 5,
      },
      820: {
        slidesPerView: 3,
      },
      200: {
        slidesPerView: 1,
      },
    },
  });
  let swiper2 = new Swiper(".reviews__slider", {
    modules: [Navigation, Pagination, Controller],
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    centeredSlides: true,
    thumbs: {
      swiper: swiper,
    },
  });
  swiper2.controller.control = swiper;
  swiper.controller.control = swiper2;
};
