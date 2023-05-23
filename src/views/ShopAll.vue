
<template>
  <HeaderPet/>
  <FoodsPet />
  <ShampooPet />
  <ToysPet />
  <HousesPet />
  <BedsPet />
    
  </template>
  
  <script>

import HeaderPet from '../components/navs/HeaderPet.vue';
import FoodsPet from '../components/shop/categories/FoodsPet.vue'; 
import ShampooPet from '../components/shop/categories/ShampooPet.vue';
import ToysPet from '../components/shop/categories/ToysPet.vue';
// import PetCollars from '../components/shop/categories/PetCollars.vue';
import HousesPet from '../components/shop/categories/HousesPet.vue';
import BedsPet from '../components/shop/categories/BedsPet.vue';
  
  export default {
    components: {
      FoodsPet,
      HeaderPet,
      ShampooPet,
      ToysPet,
      HousesPet,
      BedsPet}
    
  };
  </script>
  
