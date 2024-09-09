<template>
  <div class="bg-[#10505C] w-full fixed top-0 left-0 px-5 flex flex-wrap md:flex-nowrap justify-between py-4 md:py-6 items-center z-50">
    <router-link to="/" class="flex-shrink-0">
      <img
        class="w-[150px] md:w-[190px]"
        src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Logo-01-1.png"
        alt="traderoom"
      />
    </router-link>

    <div class="lg:hidden flex items-center">
      <button @click="toggleMenu" class="text-white focus:outline-none">
        <i class="ri-menu-3-fill text-3xl"></i>
      </button>
    </div>

    <div class="hidden lg:flex lg:flex-wrap lg:justify-center lg:gap-10 md:gap-6 mt-4 md:mt-0">
      <router-link
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        class="text-white text-xl font-semibold hover:text-[#2FFFB9] transition-colors duration-500"
      >
        {{ link.label }}
      </router-link>
    </div>

    <div class="mt-4 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
      <Button class="hidden lg:block" buttonText="Contact us">
        <template #icon-left>
          <i class="ri-telegram-2-fill pt-1 pr-2"></i>
        </template>
      </Button>
    </div>

    <transition name="slide-fade">
      <div v-if="isMenuOpen" class="fixed inset-y-0 right-0 bg-[#10505C] z-50 w-64 p-4 lg:hidden flex flex-col items-center gap-4">
        <button @click="toggleMenu" class="text-white text-3xl self-end">
          <i class="ri-close-fill"></i>
        </button>
        <router-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          class="text-white text-2xl font-semibold hover:text-[#2FFFB9] transition-colors duration-500"
        >
          {{ link.label }}
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from "../components/Common/Button.vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const links = [
  { label: 'Home', to: '/' },
  { label: 'Membership', to: '/membership' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Page', to: '/page' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];
</script>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease; 
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
