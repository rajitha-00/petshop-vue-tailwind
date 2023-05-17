<template>

  <div class="mt-20" >
      <router-view/>
  </div>
  <FooterPet/>
</template>

<script>

import FooterPet from './components/FooterPet.vue';
export default {
  name: 'App',
  components: {

    FooterPet,
  }
}
</script>

