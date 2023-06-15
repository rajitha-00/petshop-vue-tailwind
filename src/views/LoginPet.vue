<template>
    <CleanNav/>
    <div class="vectorShop">
        <img src="../assets/images/shop/Vector.png" alt="">
    </div>
    <section>

        <div class="loginSection justify-center flex items-center mx-auto">
            <div class="bg-yellow-200 rounded shadow p-10 justify-center items-center mt-20">

                    <button @click="handleSignInGoogle" class="bg-white w-full mt-10 shadow px-10 py-1 mx-auto rounded hover:bg-red-50-300 ">Login with Google</button>
            </div>
        </div>
    </section>
</template>

<script>
import CleanNav from '../components/navs/CleanNav.vue';
import { getAuth ,signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import firebaseConfig from '@/firebaseConfig'
import { useRouter } from 'vue-router'

const provider = new GoogleAuthProvider();


firebaseConfig

    export default {
        name:"LoginPet",

        components: {
            CleanNav,
        },
        data() {
            return {

                router: useRouter(),
                user: '',
                isLoggedIn: false,
            }
        },
        methods: {
            handleSignInGoogle(){
            signInWithPopup(getAuth(), provider)
                .then((result) => {

                console.log(result.user);
                this.user = result.user.displayName;
                this.isLoggedIn = true;
                this.router.push('/')
                }).catch((error) => {
                console.log(error)
                alert('Sorry you could not sign up' + error.message)
                });
            },
        }
     }

</script>

