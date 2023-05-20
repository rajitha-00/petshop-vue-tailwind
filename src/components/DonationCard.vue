<template>
    <div class="card-donation  mt-5 mb-5 md:w-1/3 lg:w-96 px-10 py-12 text-white">
        <div class="cardHeader ">
            <div class="cardLogo mb-5 flex justify-between items-center">
                <img :src="logo" alt="">
                <img src="../assets/images/donation/cardside.png" alt="">
            </div>
            <div class="cardTitle">
                <h2 class="text-center">
                    {{ title }}
                </h2>
            </div>
        </div>
        <div class="cardBody mt-3">
            <p class="font-sans text-sm lg:text-lg">{{body}}</p>
        </div>
        <div class="cardFooter flex justify-center items-center mt-5">
            <div class="memberButton">
                <button class="primaryBtn w-full py-1 px-4 rounded text-sm font-sans">GET MEMBERSHIP</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"DonationCard",
        props: ['logo','title','body',]
    }
</script>

<style lang="scss" scoped>

</style>