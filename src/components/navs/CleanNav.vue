<template>
    <header class="petHeader fixed inset-x-0 top-0 z-50">
         <nav class="navbar  lg:max-w-7xl px-7 lg:mx-auto fixed flex items-center justify-between py-4 " aria-label="Global">
           <div class="flex lg:flex-1">
               <a href="/" class="hidden md:flex">
                <img src="logo.png" class="w-48" alt="">
               </a>
               <a href="/"  class="flex md:hidden w-12 h-w-12">
                 <img src="../../assets/images/home/logo.png" alt="">
               </a>
           </div>
           <div class="flex lg:hidden">
             <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
               <span class="sr-only">Open main menu</span>
               <Bars3Icon class="h-6 w-6" aria-hidden="true"  />
             </button>
           </div>
           <div class="hidden lg:flex lg:gap-x-12">
             <a v-for="item in navigation" :key="item.name" :href=" item.href"   class="md:text-md text-stone-950">{{ item.name }}</a>
           </div>
         
         </nav>
         <Dialog as="div" class="lg:hidden " @close="mobileMenuOpen = false" :open="mobileMenuOpen">
           <div class="fixed inset-0 z-50" />
           <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto menuMobile bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
             <div class="flex items-center justify-between">
               <a href="/" class="-m-1.5 p-1.5">
                 <span class="sr-only">Your Company</span>
                 <img class="h-10 w-auto" src="../../assets/images/home/logo.png" alt="" />
               </a>
               <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                 <span class="sr-only">Close menu</span>
                 <XMarkIcon class="h-6 w-6" aria-hidden="true" />
               </button>
             </div>
            
           </DialogPanel>
         </Dialog>
       </header>
</template>
     
     <script setup>
     import { ref } from 'vue'
     import { Dialog, DialogPanel } from '@headlessui/vue'
     import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
     
     const navigation = [
       { name: 'Home', href: '/' },
      
     ]
     
     const mobileMenuOpen = ref(false)
     </script>