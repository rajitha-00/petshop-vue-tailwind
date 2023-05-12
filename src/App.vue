<template>
  <HeaderPet/>
  <div class="mt-20" >
      <router-view/>
  </div>
  <FooterPet/>
</template>

<script>
import HeaderPet from './components/HeaderPet.vue';
import FooterPet from './components/FooterPet.vue'

export default {
  name: 'App',
  components: {
    HeaderPet,
    FooterPet,
  }
}
</script>

