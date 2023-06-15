 <!-- Navbar for home page -->
 <template>
    <header class="petHeader fixed inset-x-0 top-0 z-50">
      <!-- Desktop view -->
      <nav class="navbar lg:max-w-7xl px-7 lg:mx-auto fixed flex items-center justify-between py-4" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="/" class="hidden md:flex">
            <img src="logo.png" class="w-48" alt="">
          </a>
          <a href="/" class="flex md:hidden w-12 h-w-12">
            <img src="../../assets/images/home/logo.png" alt="">
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="md:text-md text-stone-950">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <div v-if="isLoggedIn" class="flex">
            <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 hover:ring-2 hover:ring-amber-600 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="avatar.jpg" alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              
                <MenuItems class="absolute right-0 z-10  w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                 
                  <MenuItem class="px-2 ">
                    <a  class="'block px-4 py-2 mt-5 text-sm text-gray-700'" href="#">{{ user}}</a>
                  </MenuItem>
                  <br>
                  <MenuItem>
                    <button class="'block px-4 mt-5 py-2 text-sm text-gray-700'" @click="handleSignOut" > Logout </button></MenuItem>
                  </MenuItems>
              </transition>
            </Menu>
  
          </div>
          <div v-else>
            <a href="/login" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </nav>
      <!-- Moblie or Tab view -->
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
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
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <div v-if="isLoggedIn" class="py-6">
                <div class="flex items-center px-5">
                  <div class="flex-shrink-0">
                    <img class="h-12 w-12 rounded-full" src="avatar.jpg" alt="">
                  </div>
                  <div class="ml-3">
                    <div class="text-base">{{ user}}</div>
                  </div>
                  <button type="button" class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span class="sr-only">View notifications</span>
                    <BellIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div class="mt-3">
                  <button class="mt-2"> Settings </button>
                  <br>
                  <button class="mt-2" @click="handleSignOut"> Logout </button>
                </div>
              </div>
              <div  v-else>

                <a href="/login" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-stone-900 hover:bg-gray-50">Log in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </template>
  
  <script>
import { ref } from 'vue';
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import firebaseConfig from '@/firebaseConfig';
// import { useRouter } from 'vue-router';

const auth = getAuth(firebaseConfig);

export default {
  name: 'NewNavBar',
    components: {
      Dialog,
      DialogPanel,
      Bars3Icon,
      XMarkIcon,
      Menu,
      MenuItems,
      MenuButton,
      MenuItem,
      BellIcon
  },
  setup() {
    const mobileMenuOpen = ref(false);
    const navigation = [
      { name: 'Shop', href: '#shop' },
      { name: 'Rescue', href: '#rescue' },
      { name: 'Donation', href: '#donation' },
      { name: 'About Us', href: '#about' },
      { name: 'Contact Us', href: '#contact' },
    ];
    const isLoggedIn = ref(false);
    // const router = useRouter();
    const user = ref('');


    const handleSignOut = () => {
      signOut(auth)
        .then(() => {
          this.isLoggedIn = false;
        })
        .catch((error) => {
          console.log(error);
        });
    };

    onAuthStateChanged(auth, (userData) => {
      if (userData) {
      isLoggedIn.value = true; // if we have a user
      user.value = userData.displayName;
   
    } else {
      isLoggedIn.value = false // if we do not
    }
    });

    return {
      mobileMenuOpen,
      navigation,
      isLoggedIn,
      handleSignOut,
      user
    };
  }
};
</script>