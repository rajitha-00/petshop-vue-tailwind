<template>
    <div class="vectorShop">
      <img src="../assets/images/shop/Vector.png" alt="">
    </div>
    <div class="wrapper" id="contact">
      <div class="inner-wrapper">
        <section>
          <div class="section-cat-header text-brown-600 px-12 mb-10 flex flex-wrap items-center justify-between">
            <div class="section-left">
              <div class="title">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
          <div class="flex">

              <div class="contactCard text-white w-4/5 rounded p-10 " >
                  <div class="cardHeader-contact ">
                  <div class="title text-center">
                      <p>We love hearing from our customers and fellow pet lovers! Here's how you can get in touch with us:</p>
                  </div>
                  </div>
                  <div class="flex  items-center justify-around">
  
                      <div class="cardLeft text-sm ">
                      <p class="my-5">
                          Address: <br>
                          Jack Pet Supplies and Sherlock Rescue, <br>
                          542 Peradeniya Rd, <br>
                          Kandy, Sri Lanka 20000
                      </p>
                      <p class="my-5">
                          Phone: (+94)817 818 181
                      </p>
                      <p class="my-5">
                          Email: info@jackpetsupplies.com
                      </p>
                      <p class="my-5">
                          WhatsApp at (+94)817 818 181
                      </p>
                      </div>
                      <div class="cardRight">
                      <div class="signUpCard">
                          <p>SIGN-UP TO GET YOUR COUPON CODE </p>
                      </div>
                      <div class="socialCard">
                          <div class="socialIcon " v-for="(ico, index) in Icons" :key="index">
                          <a :href="ico.link">
                              <img :src="ico.path" alt="">
                          </a>
                          </div>
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
  export default {
    name: "ContactUsPet",
    setup() {
      let Icons = [
        { link: "#", path: require("@/assets/images/contactus/Instagram.png").default },
        { link: "#", path: require("@/assets/images/contactus/YouTube.png").default },
        { link: "#", path: require("@/assets/images/contactus/Facebook.png").default },
        { link: "#", path: require("@/assets/images/contactus/Telegram.png").default },
        { link: "#", path: require("@/assets/images/contactus/TikTok.png").default },
      ];
  
      return { Icons };
    },
  };
  </script>