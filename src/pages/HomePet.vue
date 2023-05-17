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
    import HomePagePet from './HomePagePet.vue';
    import ShopPet from './ShopPet.vue';
    import RescuePet from './RescuePet.vue';
    import DonationPet from './DonationPet.vue';
    import ContactUsPet from './ContactUsPet.vue';
    import AboutUsPet from './AboutUsPet.vue';

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

