<template>
    <div class="swiperMb">

        <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="false"
        :navigation="false"
        :modules="modules"
        
        >
          <swiper-slide >High-quality dog food = Healthy dog.</swiper-slide>
          <swiper-slide>Monitor portion sizes to prevent obesity.</swiper-slide>
          <swiper-slide>Fresh water = Happy dog.</swiper-slide>
          <swiper-slide>Exercise = Physical and mental health.</swiper-slide>
          <swiper-slide>Regular vet checkups = Happy and healthy dog.</swiper-slide>
          <swiper-slide>Avoid table scraps = Keep your dog safe.</swiper-slide>
          ...
        </swiper>
    </div>
  </template>
  <script>
    // import Swiper core and required modules
    
  
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, Pagination, Navigation } from 'swiper';
    // Import Swiper styles
    import 'swiper/css';

    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    
    // Import Swiper styles
    export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
  </script>