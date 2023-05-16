<template>
    <div class="vectorShop">
      <img src="../assets/images/donation/Vector.png" alt="">
    </div>
    <div class="wrapper rescue" id="donation">
      <div class="inner-wrapper">
        <section class="">
          <div class="section-cat-header lg:max-w-7xl  mx-auto text-brown-600 mb-10 flex flex-wrap items-center justify-between">
            <div class="section-left">
              <div class="title">
                  <h2>Donation</h2>
              </div>
            </div>
            
          </div>
          <div class="cardSection lg:max-w-7xl  mx-auto md:flex-wrap md:flex justify-between lg:justify-around items-center">

            <DonationCard
              v-for="(don, index) in Donation"
              :key="index"
              :logo="don.logoDon"
              :title="don.headDon"
              :body="don.bodyDon"
            />
          </div>
          <div class="footerPage flex justify-center mt-10 mb-5 mx-6 md:mb-20">
              <img src="../assets/images/donation/petfooter.png" alt="">
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import DonationCard from '../components/DonationCard.vue';
  
  export default {
    name: 'DonationPet',
    components: { DonationCard },
    setup() {
      let Donation = [
        {
          headDon: 'Make a Difference with a Bronze Membership',
          bodyDon: 'With a bronze membership, you can make a difference in the lives of animals in need while also receiving amazing discounts and offers at our shop. By donating a minimum of $50, you will become a bronze member and receive a 10% discount on all purchases made at our store for an entire year. You will also receive exclusive offers and updates on our rescue efforts, so you can stay connected to our mission.',
          logoDon: require('@/assets/images/donation/bronse.png'),
        },
        {
            headDon: 'Save on Pet Supplies with a Silver Membership',
            bodyDon: 'Upgrade to a silver membership and save big on all your pet supply needs. By donating $100 or more, you will become a silver member and receive a 15% discount on all purchases made at our store for an entire year. You will also receive early access to new products, special offers, and exclusive updates on our rescue efforts. Join our community of animal lovers today and become a silver member to save on all your pet supply needs.',
            logoDon: require('@/assets/images/donation/silver.png'),
        },
        {
            headDon: 'Make a Lasting Impact with a Gold Membership',
            bodyDon: 'Make a lasting impact on the lives of dogs in need by becoming a gold member of our community. By donating $250 or more, you will become a gold member and receive a 20% discount on all purchases made at our store for an entire year. You will also receive exclusive invitations to our events, behind-the-scenes access to our rescue efforts, and personalized updates on the dogs you have helped us save.',
            logoDon: require('@/assets/images/donation/gold.png'),
        }
      ];
      return {
        Donation,
      };
    },
  };
  </script>
  
