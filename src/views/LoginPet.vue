<template>
    <CleanNav/>
    <div class="vectorShop">
        <img src="../assets/images/shop/Vector.png" alt="">
    </div>
    <section>

        <div class="loginSection justify-center flex items-center mx-auto">
            <div class="bg-yellow-200 rounded shadow p-10 justify-center items-center mt-20">

                    <form class="flex flex-col gap-1">
                        <label for="email">Email</label>
                        <input type="email" v-model="email" placeholder="Enter Email Address" class="border rounded px-10 py-1 mx-auto" />
                        <label for="password">Password</label>
                        <input type="password" v-model="password" class="px-10 py-1 mx-auto border rounded" placeholder="*******" />
                        <button type="submit" class="bg-white mt-5 shadow rounded-lg p-1" @click.prevent="register">Register</button>
                    </form>
                    <br>
                    <button @click="handleSignInGoogle" class="bg-white w-full mt-10 shadow px-10 py-1 mx-auto rounded hover:bg-red-50-300 ">Login with Google</button>
            </div>
        </div>
    </section>
</template>

<script>
import CleanNav from '../components/navs/CleanNav.vue';
import { getAuth, createUserWithEmailAndPassword ,signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
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
                email: '',
                password: '',
                router: useRouter(),
                user: '',
                isSignedIn: false,
            }
        },
        methods: {
            register() {
            createUserWithEmailAndPassword(getAuth(), this.email, this.password)
                .then((data) => {
                console.log('Logged in')
                console.log(data);
                this.router.push('/')
                })
                .catch((error) => {
                console.log(error.code)
                alert('Sorry you could not sign up' + error.message)
                })
            },
            handleSignInGoogle(){
            signInWithPopup(getAuth(), provider)
                .then((result) => {

                // console.log(result.user.displayName);
                this.user = result.user.displayName;
                this.isSignedIn = true;
                this.router.push('/')
                }).catch((error) => {
                console.log(error)
                });
            },
        }
        
     }
</script>

