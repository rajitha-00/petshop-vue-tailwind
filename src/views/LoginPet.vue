<template>
    <CleanNav/>
    <div class="vectorShop">
        <img src="../assets/images/shop/Vector.png" alt="">
    </div>
    <section>

        <div class="loginSection justify-center flex items-center mx-auto">
            <div class="flex justify-center items-center mt-20">


                    <button class="bg-white px-10 py-1 mx-auto rounded hover:bg-red-50-300 ">Login Google</button>
            </div>
        </div>
    </section>
</template>

<script>
import CleanNav from '../components/navs/CleanNav.vue';
    export default {
        name:"LoginPet",

        components: {
            CleanNav,
        }
        
     }
</script>

