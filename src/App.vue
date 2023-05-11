<template>
  <HeaderPet/>
  <div class="container mx-auto">
      <router-view/>
  </div>
  
</template>

<script>
import HeaderPet from './components/HeaderPet.vue';


export default {
  name: 'App',
  components: {
    HeaderPet,
  }
}
</script>

