
<template>
  <HeaderPet/>
  <div class="wrapper">
    <div class="inner-wrapper">
      <section id="foods">
        <div>
          <h2>Pet Foods</h2>
        </div>
        <FoodsPet />
      </section>
    </div>
  </div>
    
  </template>
  
  <script>

  import FoodsPet from './categories/FoodsPet.vue';
  import HeaderPet from '../HeaderPet.vue';
  
  export default {
    components: {FoodsPet,HeaderPet,}
    
  };
  </script>
  
