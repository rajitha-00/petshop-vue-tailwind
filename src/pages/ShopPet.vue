<template>
   
    <div class="vectorShop">
        <img src="../assets/images/shop/Vector.png" alt="">
    </div>
    <div class="wrapper" id="shop">
        <div class="inner-wrapper">
            <section class="text-start px-4 mb-10">
                <div class="section-cat-header  text-brown-600 px-7  lg:max-w-7xl  mx-auto flex flex-wrap items-center justify-between">
                    <div class="section-left">
                        <div class="title">
                            <h2>Shop</h2>
                        </div>
                    </div>
                    <div class="section-right">
                        <div class="title">
                            <a href="/shop" class="bg-white px-4 py-2 rounded "  >Shop More  <span aria-hidden="true" class="text-xl">→</span> </a>
                        </div>
                    </div>
                </div>
<!-- Categories -->
                <div class="category-cards mt-7 px-7 lg:max-w-7xl mx-auto">
                    <div class="category-row flex flex-wrap items-center justify-between ">
                            <CategoryTile 
                            v-for="(cat, index) in Row1" :key="index"
                            :pathCat="cat.link"
                            :textCat="cat.label" />
                    </div>
                </div>
               
<!-- products card -->
                <div class="item-box">
                    <ProductCardMainVue/>
                </div>
                <div v-if="isLoggedIn" class="coupenCard rounded lg:max-w-5xl mx-auto px-7 flex items-center justify-around">
                    
                    <div class="cardCol">
                        <h2 class="text-2xl">COUPEN CODE : {{ user}}JPSR </h2>
                        <p>Use this at the store for 20% off</p>
                    </div>
                    <div class="cardCol">
                        <img src="../assets/images/shop/coupen.png" alt="">
                    </div>
                </div>
                <div v-else class="coupenCard rounded lg:max-w-5xl mx-auto px-7 flex items-center justify-around">
                    <div class="cardCol ">
                        <h1 class="text-4xl"> 20% OFF</h1>
                    </div>
                    <div class="cardCol w-3/5">
                        <a href="/login">
                            <h2 class="text-2xl">Sign Up to Get Your Free Coupon Code </h2>
    
                        </a>
                        <p>You Can Use at The Store</p>
                    </div>
                    <div class="cardCol">
                        <img src="../assets/images/shop/coupen.png" alt="">
                    </div>
                </div>

                <br>

<!-- watermark -->
                <div class="watermark">
                    <img src="../assets/images/shop/water.png" alt="">
                </div>
            </section>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
import CategoryTile from '../components/shop/CategoryTile.vue';
import ProductCardMainVue from '../components/shop/ProductCardMain.vue';
import firebaseConfig from '@/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(firebaseConfig);

export default {
  components: { CategoryTile, ProductCardMainVue },
  setup() {
    let Row1 = [
      { label: 'Food', link: require('@/assets/images/shop/foods.png') },
      { label: 'Shampoo', link: require('@/assets/images/shop/shampoo.png') },
      { label: 'Toys', link: require('@/assets/images/shop/toys.png') },
      { label: 'Houses', link: require('@/assets/images/shop/house.png') },
      { label: 'Beds', link: require('@/assets/images/shop/beds.png') },
    ];

    const isLoggedIn = ref(false);
    const user = ref('');

    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        isLoggedIn.value = true;
        user.value = userData.displayName;
      } else {
        isLoggedIn.value = false;
      }
    });

    return {
      Row1,
      isLoggedIn,
      user,
    };
  },
};
</script>
