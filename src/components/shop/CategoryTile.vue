<template>
<div class="tile mb-10 shadow lg:px-6  text-center items-center justify-center bg-white rounded">
    <!-- <a :href="urlPath"></a> -->

    <div class="relative imgCat items-center justify-center">

        <img :src="pathCat" alt="" class="img-cat  lg:w-32 lg:h-w-32 w-20 p-2">
    </div>
    <p class="textCat p-2">{{ textCat }}</p>
  </div>
</template>

<script>
    export default {
        name: 'CategoryTiles',
        props: ['pathCat', 'textCat','url']
    }
</script>

<style lang="scss" scoped>

</style>