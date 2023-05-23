
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
  import HousesPet from '../components/shop/categories/HousesPet.vue';
  import BedsPet from '../components/shop/categories/BedsPet.vue';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  import firebaseConfig from '@/firebaseConfig';
  import { ref, onMounted } from 'vue';
  
  const auth = getAuth(firebaseConfig);
  
  export default {
    components: {
      FoodsPet,
      HeaderPet,
      ShampooPet,
      ToysPet,
      HousesPet,
      BedsPet
    },
  
    setup() {
      const router = useRouter();
      const isLoggedIn = ref(false);
  
      onMounted(() => {
        onAuthStateChanged(auth, (user) => {
          isLoggedIn.value = !!user;
          
            if (!isLoggedIn.value) {
            // Redirect to the home page if not logged in
            router.push('/');
            alert('To access the shop you have to login first!')
            }else {
                router.push('/shop');
            }
        });
      });
  
      return {
        isLoggedIn
      };
    }
  };
  </script>