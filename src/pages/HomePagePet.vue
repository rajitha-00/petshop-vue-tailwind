<template>
    <div class="wrapper" id="home">
        <div class="inner-wrapper ">

            <section class="md:items-start md:justify-center ">
                <img class="heroImage " src="../assets/images/home/heroTheme.png" alt="">
                <div class="tipsContainer">
                    <div class="tips">
                        <div class="tipBox justify-center text-center">
                            <div class="tipText text-center">
                                <!-- tip1 -->
                                <div class="swiperPC md:visible sm:invisible " >
                                    <h1 class="sm:mb-0 md:mb-5 md:text-xl" >Tips,</h1>

                                    <TipsSwiper/>
                                </div>
                                <div class="swiperMobile md:invisible" >
                                    <h1 class="sm:mb-5 md:mb-5 md:text-xl" >Tips,</h1>
                                    <MobileSwiper/>
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
    import MobileSwiper from '@/components/MobileSwiper.vue';
    export default {
        components: {
            TipsSwiper,
            MobileSwiper,
      },
    }
</script>

