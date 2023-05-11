<template>
    <div class="swiperPC">

        <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="false"
        :modules="modules"
    
        >
          <swiper-slide >Regular checkups are essential for ensuring your dog's health and well-being. Your vet can provide preventive care, such as vaccinations, parasite prevention, and dental care, as well as diagnose and treat any health issues that arise.</swiper-slide>
          <swiper-slide>Look for dog food that has high-quality protein as the first ingredient and does not contain artificial preservatives, colors, or flavors. You can also consider talking to your vet for specific dietary recommendations based on your dog's age, breed, and health condition.</swiper-slide>
          <swiper-slide>Overfeeding your dog can lead to obesity, which can cause various health problems, such as diabetes, heart disease, and joint issues. Be sure to follow the feeding instructions on the dog food package or consult your vet to determine how much food your dog needs based on their weight, age, and activity level.</swiper-slide>
          <swiper-slide>Keep a bowl of fresh, clean water available for your dog at all times. Change the water daily and clean the bowl regularly to prevent bacteria buildup.</swiper-slide>
          <swiper-slide>Exercise is important for maintaining your dog's physical and mental health. Take your dog for walks, play games, and engage in activities that your dog enjoys.</swiper-slide>
          <swiper-slide>While it may be tempting to share your food with your dog, many human foods can be harmful to dogs. For example, chocolate, grapes, onions, and garlic can be toxic to dogs, and fatty foods can cause digestive upset.</swiper-slide>
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