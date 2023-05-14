<template>
<div class="tile shadow lg:px-6  text-center bg-white rounded">
    <img :src="pathCat" alt="" class="img-cat lg:w-32 lg:h-w-32 md:w-20 p-2">
    <p class="textCat p-2">{{ textCat }}</p>
  </div>
</template>

<script>
    export default {
        name: 'CategoryTiles',
        props: ['pathCat', 'textCat']
    }
</script>

<style lang="scss" scoped>

</style>