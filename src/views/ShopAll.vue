
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
  import { getAuth,onAuthStateChanged } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  import firebaseConfig from '@/firebaseConfig'
  import { onBeforeUnmount } from 'vue'
  firebaseConfig
  const router = useRouter()
  const authListener = onAuthStateChanged(getAuth(),function(user) {
      if (!user) { // not logged in
          alert('you must be logged in to view this. redirecting to the home page')
          router.push('/')
      }
  });
  onBeforeUnmount(() => {
      // clear up listener
      authListener()
  })
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
  
