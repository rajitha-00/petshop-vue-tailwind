
<template>
  <HeaderPet/>
  <FoodsPet />
  <ShampooPet />
  <ToysPet />
  <!-- <PetCollars /> -->
  <HousesPet />
  <BedsPet />
    
  </template>
  
  <script>

import HeaderPet from '../navs/HeaderPet.vue';
import FoodsPet from './categories/FoodsPet.vue'; 
import ShampooPet from './categories/ShampooPet.vue';
import ToysPet from './categories/ToysPet.vue';
// import PetCollars from './categories/PetCollars.vue';
import HousesPet from './categories/HousesPet.vue';
import BedsPet from './categories/BedsPet.vue';
  
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
  
