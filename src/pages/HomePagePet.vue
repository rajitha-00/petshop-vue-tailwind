<template>
    <div class="wrapper" id="home">
        <div class="inner-wrapper ">

            <section class="md:items-start md:justify-center ">

                <img class="heroImage " src="../assets/images/home/heroTheme.png" alt="">
                <div class="tipsContainer">
                    <div class="tips mb-5">
                        <div class="tipBox justify-center text-center">
                            <div class="tipText text-center">
                       
                                <div class="swiperPC " >
                                    <h1 class=" md:mt-0 md:text-xl" >Tips,</h1>

                                    <TipsSwiper/>
                                </div>
                               
                            </div>
                       </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import TipsSwiper from '@/components/TipsSwiper.vue';

    export default {
        components: {
            TipsSwiper,
         
      },
    }
</script>

