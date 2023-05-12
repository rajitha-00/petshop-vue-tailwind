<template>
  <!-- <HeaderPet/> -->
  <NewNavbar/>
  <div class="mt-20" >
      <router-view/>
  </div>
  <FooterPet/>
</template>

<script>
// import HeaderPet from './components/HeaderPet.vue';
import FooterPet from './components/FooterPet.vue';
import NewNavbar from './components/NewNavbar.vue';
export default {
  name: 'App',
  components: {
    // HeaderPet,
    FooterPet,
    NewNavbar,
  }
}
</script>

