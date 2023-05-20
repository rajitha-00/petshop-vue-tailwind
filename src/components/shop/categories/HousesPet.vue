<template>
    <div class="wrapper" id="houses">
        <div class="inner-wrapper">
            <section >
                <div class="section-cat-header  text-brown-600 px-7  lg:max-w-7xl  mx-auto flex flex-wrap items-center justify-between">
                    <div class="section-left">
                        <div class="title">
                            <h2>Houses</h2>
                        </div>
                    </div>
                    
                </div>
                <div class="mx-auto max-w-2xl py-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div class="mt-6  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            
                        <div
                          v-for="product in products"
                          :key="product.id"
                          class="group hover:scale-105 delay-150 relative px-6 py-3 rounded shadow product-card"
                        >
                          <div class="overflow-hidden h-60 rounded-md lg:aspect-none group-hover:opacity-75">
                              <img :src="require('@/assets/db/houses/' + product.id + '.jpg')" :alt="product.name" class="object-contain h-60 object-center" />
                          </div>
                          <div class="mt-5 flex justify-between">
                            <div>
                              <h3 class="text-sm text-gray-700">
                                <a :href="product.href">
                                  <span aria-hidden="true" class="absolute inset-0"></span>
                                  {{ product.name }}
                                </a>
                              </h3>
                              <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>
                            </div>
                            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
                          </div>
                          <div class="button mt-5">
                            <a :href="product.href">
                              <button class="bg-yellow-600 w-full hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Buy Now
                              </button>
                            </a>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    

</template>

<script>
    import axios from 'axios';
    export default {
        data() {
      return {
        products: [],
      };
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await axios.get('http://localhost:3000/houses');
          this.products = response.data;
        } catch (error) {
          console.error(error);
        }
      },
    },
    }
</script>

<style lang="scss" scoped>

</style>