<template>
    <section id="home">
        This Is Home Petshop
    </section>
    <ShopPet />
    <RescuePet />
    <DonationPet/>
    <AboutUsPet/>
    <ContactUsPet/>
</template>

<script>
    import ShopPet from './ShopPet.vue';
    import RescuePet from './RescuePet.vue';
    import DonationPet from './DonationPet.vue';
    import ContactUsPet from './ContactUsPet.vue';
    import AboutUsPet from './AboutUsPet.vue';

    export default {
        components: {
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