<template>
   
    <div class="vectorShop">
        <img src="../assets/images/shop/Vector.png" alt="">
    </div>
    <div class="wrapper" id="shop">
        <div class="inner-wrapper">
            <section class="text-start px-4 mb-10">
                <div class="section-cat-header  text-brown-600  lg:max-w-7xl  mx-auto flex flex-wrap items-center justify-between">
                    <div class="section-left">
                        <div class="title">
                            <h2>Shop</h2>
                        </div>
                    </div>
                    <div class="section-right">
                        <div class="title">
                            <a href="#" class="bg-white px-4 py-2 rounded "  >Shop More  <span aria-hidden="true" class="text-xl">→</span> </a>
                        </div>
                    </div>
                </div>
<!-- Categories -->
                <div class="category-cards mt-7  lg:max-w-7xl mx-auto">
                    <div class="category-row flex flex-wrap items-center justify-between ">
                            <CategoryTile 
                            v-for="(cat, index) in Row1" :key="index"
                            :pathCat="cat.link"
                            :textCat="cat.label" />
                    </div>
                </div>
               
<!-- products card -->
                <div class="item-box">
                    <ProductCardMainVue/>
                </div>

<!-- watermark -->
                <div class="watermark">
                    <img src="../assets/images/shop/water.png" alt="">
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import CategoryTile from '../components/shop/CategoryTile.vue';
    import ProductCardMainVue from '../components/shop/ProductCardMain.vue';
    export default {
        components: { CategoryTile,ProductCardMainVue},
        setup() {
            let Row1 = [
            { label: 'Food', link: require('@/assets/images/shop/foods.png') },
            { label: 'Shampoo', link: require('@/assets/images/shop/shampoo.png') },
            { label: 'Toys', link: require('@/assets/images/shop/toys.png') },
            { label: 'Collars', link: require('@/assets/images/shop/colors.png') },
            { label: 'Houses', link: require('@/assets/images/shop/house.png') },
            { label: 'Beds', link: require('@/assets/images/shop/beds.png') },
      
            ];

          

            return { Row1,  };
        },
    }
</script>

