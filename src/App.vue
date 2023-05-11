<template>
  <HeaderPet/>
  <div class="mt-20" >
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

