<template>
    <!-- <v-content>
      <HomePagePet id="#home"/>
      <ShopPet id="#shop"/>
      <RescuePet id="#rescue"/>
      <DonationPet id="#donation"/>
      <AboutUsPet id="#about"/>
      <ContactUsPet id="#contact"/>
    </v-content>  -->
    <HomePagePet/>
    <ShopPet />
    <RescuePet />
    <DonationPet/>
    <AboutUsPet/>
    <ContactUsPet/>
    
</template>

<script>
    import HomePagePet from './HomePagePet.vue';
    import ShopPet from './ShopPet.vue';
    import RescuePet from './RescuePet.vue';
    import DonationPet from './DonationPet.vue';
    import ContactUsPet from './ContactUsPet.vue';
    import AboutUsPet from './AboutUsPet.vue';

    export default {
        components: {
            HomePagePet,
            ShopPet,
            RescuePet,
            DonationPet,
            ContactUsPet,
            AboutUsPet
        }
    }
</script>

<style lang="scss" scoped>

</style>