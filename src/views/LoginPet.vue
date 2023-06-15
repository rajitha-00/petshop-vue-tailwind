<template>
    <CleanNav/>
    <div class="vectorShop">
        <img src="../assets/images/shop/Vector.png" alt="">
    </div>
    <section>

        <div class="loginSection justify-center flex items-center mx-auto ">
            <div class="bg-yellow-200 rounded shadow p-10 justify-center items-center mt-40">
                <h2 class="text-center mb-5">Sign up to get more offers!</h2>
                <div class="flex justify-between items-center bg-white shadow px-12 py-2">
                    <img  class="px-2 " src="google.png" alt=""/>
                    <button @click="handleSignInGoogle" class="bg-white  py-1 px-1 rounded hover:bg-red-50-300 ">Login with Google</button>
                </div>    
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

