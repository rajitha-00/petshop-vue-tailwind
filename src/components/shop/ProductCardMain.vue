<template>
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <!-- <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> -->

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in ProductsMain" :key="product.id" class="group relative">
          <div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
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
                name: 'Basic 2 Tee',
                href: '#',
                imageSrc: 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/2823705-center-1',
                imageAlt: "Front of men's Basic Tee in black.",
                price: '$35',
                color: 'Black',
            },
            {
                id: 2,
                name: 'Basic 33 Tee',
                href: '#',
                imageSrc: 'https://www.skinners.co.uk/wp-content/uploads/2021/07/ft-grain-free-15kg.jpg',
                imageAlt: "Front of men's Basic Tee in black.",
                price: '$35',
                color: 'Black',
            },
            {
                id: 3,
                name: 'Basic  23  Tee',
                href: '#',
                imageSrc: 'https://i5.walmartimages.com/asr/927079b1-bf90-459f-8cdb-a5175f8a2d39.a2fe8bd75d560014eaa09304c91ab947.jpeg',
                imageAlt: "Front of men's Basic Tee in black.",
                price: '$35',
                color: 'Black',
            },
            {
                id: 3,
                name: 'Basic  23  Tee',
                href: '#',
                imageSrc: 'https://static-01.daraz.lk/p/ee33afce6fc3bbda6e824078c0c7fcdc.jpg',
                imageAlt: "Front of men's Basic Tee in black.",
                price: '$35',
                color: 'Black',
            },
            {
                id: 3,
                name: 'Basic  23  Tee',
                href: '#',
                imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-lzLT2WF65XL2WJ8ma0U2Op1PkrPQqymMEw&usqp=CAU',
                imageAlt: "Front of men's Basic Tee in black.",
                price: '$35',
                color: 'Black',
            },
            {
                id: 3,
                name: 'Basic  23  Tee',
                href: '#',
                imageSrc: 'https://sc04.alicdn.com/kf/He03836f6c9ef40b9a65aca6e7e498277m.jpg',
                imageAlt: "Front of men's Basic Tee in black.",
                price: '$35',
                color: 'Black',
            },
            {
                id: 3,
                name: 'Basic  23  Tee',
                href: '#',
                imageSrc: 'https://sc04.alicdn.com/kf/Hd23b039476ec4c10a728ab0e9ba00e256.jpg',
                imageAlt: "Front of men's Basic Tee in black.",
                price: '$35',
                color: 'Black',
            },
            {
                id: 3,
                name: 'Basic  23  Tee',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
                imageAlt: "Front of men's Basic Tee in black.",
                price: '$35',
                color: 'Black',
            },
            ];
            return { ProductsMain };
        },
    }
</script>

<style lang="scss" scoped>

</style>