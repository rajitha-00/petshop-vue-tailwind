<template>
    <div class="mx-auto max-w-2xl md:py-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <!-- <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> -->

      <div class="mt-3  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in ProductsMain" :key="product.id" class="group hover:scale-105 delay-150 relative px-6  py-3 rounded shadow product-card">
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
              <button class="primaryBtn w-full py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Buy Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ProductCardMain",
        setup(){
            let ProductsMain = [
            {
                id: 1,
                name: 'Pet Food ',
                href: '#',
                imageSrc: 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/2823705-center-1',
                imageAlt: "petFood.",
                price: '$40',
                offer: '(500g)',
            },
            {
                id: 2,
                name: 'Pet Food',
                href: '#',
                imageSrc: 'https://www.skinners.co.uk/wp-content/uploads/2021/07/ft-grain-free-15kg.jpg',
                imageAlt: "petFood",
                price: '$75',
                offer: '(1kg)',
            },
            {
                id: 3,
                name: 'Pet Food',
                href: '#',
                imageSrc: 'https://i5.walmartimages.com/asr/927079b1-bf90-459f-8cdb-a5175f8a2d39.a2fe8bd75d560014eaa09304c91ab947.jpeg',
                imageAlt: "petFood",
                price: '$35',
                offer: '(3kg)',
            },
            {
                id: 4,
                name: 'Toy Chiken',
                href: '#',
                imageSrc: 'https://static-01.daraz.lk/p/ee33afce6fc3bbda6e824078c0c7fcdc.jpg',
                imageAlt: "petFood",
                price: '$60',
                offer: 'Unit: 1',
            },
            {
                id: 5,
                name: 'Toy Banana Dog',
                href: '#',
                imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-lzLT2WF65XL2WJ8ma0U2Op1PkrPQqymMEw&usqp=CAU',
                imageAlt: "petFood",
                price: '$55',
                offer: 'Unit: 1',
            },
            {
                id: 6,
                name: 'Pet House',
                href: '#',
                imageSrc: 'https://sc04.alicdn.com/kf/He03836f6c9ef40b9a65aca6e7e498277m.jpg',
                imageAlt: "Front of men's Basic Tee in black.",
                price: '$35',
                offer: 'Unit: 1',
            },
            {
                id: 7,
                name: 'Pet House',
                href: '#',
                imageSrc: 'https://sc04.alicdn.com/kf/Hd23b039476ec4c10a728ab0e9ba00e256.jpg',
                imageAlt: "Front of men's Basic Tee in Unit: 1.",
                price: '$35',
                offer: 'Unit: 1',
            },
            {
                id: 8,
                name: 'Pet House',
                href: '#',
                imageSrc: 'https://sc04.alicdn.com/kf/He03836f6c9ef40b9a65aca6e7e498277m.jpg',
                imageAlt: "Front of men's Basic Tee in Unit: 1.",
                price: '$35',
                offer: 'Unit: 1',
            },
            ];
            return { ProductsMain };
        },
    }
</script>

<style lang="scss" scoped>

</style>