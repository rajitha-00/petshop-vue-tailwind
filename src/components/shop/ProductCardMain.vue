<template>
    <div class="mx-auto max-w-2xl md:py-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <!-- <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> -->

      <div class="mt-3  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group hover:scale-105 delay-150 relative px-6  py-3 rounded shadow product-card">
          <div class="overflow-hidden h-60 rounded-md  lg:aspect-none items-center justify-center mx-auto group-hover:opacity-75 ">
            <img :src="product.imageSrc" :alt="product.imageAlt" class=" object-contain h-60 object-center " />
          </div>
          <div class="mt-5 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.offer }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
          </div>
          <div class="button mt-5">
            <a :href="product.href">
              <button class="primaryBtn font-sans w-full py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Buy Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import productsMain from '../../assets/db/shop.json'
    export default {
        name: "ProductCardMain",
        data(){ 
            return { 
              products: productsMain,
            };
        },
    }
</script>

<style lang="scss" scoped>

</style>