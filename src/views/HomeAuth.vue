<template>
    <NewNavbar/>
    <HomePagePet/>
    <ShopPet />
    <RescuePet />
    <DonationPet/>
    <AboutUsPet/>
    <ContactUsPet/>
    
</template>

<script>
    import NewNavbar from '../components/navs/NewNavbar.vue';
    import HomePagePet from '../pages/HomePagePet.vue';
    import ShopPet from '../pages/ShopPet.vue';
    import RescuePet from '../pages/RescuePet.vue';
    import DonationPet from '../pages/DonationPet.vue';
    import ContactUsPet from '../pages/ContactUsPet.vue';
    import AboutUsPet from '../pages/AboutUsPet.vue';

    export default {
        components: {
            NewNavbar,
            HomePagePet,
            ShopPet,
            RescuePet,
            DonationPet,
            ContactUsPet,
            AboutUsPet
        }
    }
</script>

