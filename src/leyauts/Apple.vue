<template>
  <div
    ref="challengeSection"
    :class="{'slide-up': isVisible}"
    class="bg-[#051517] mx-5 rounded-xl mb-10 bg-cover bg-center opacity-0 transform translate-y-10 transition-all duration-1000"
  >
    <h1
      class="text-2xl md:text-5xl lg:text-6xl lg:text-left text-center text-white font-bold px-5 md:px-10 py-5 md:py-10"
    >
      Apply to Join My Trading <br />Challenge
    </h1>
    <div
      class="flex flex-col md:flex-row items-center pl-5 md:pl-7 mt-5 md:mt-10 pb-5 md:pb-9 space-y-4 md:space-y-0 md:space-x-4"
    >
      <div class="flex items-center">
        <img
          class="w-16 h-16 md:w-20 md:h-20 rounded-full -translate-x-2 md:-translate-x-3"
          src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0002-qs6zolu0rc7lnhwexmp2xxy5z3dzb6asrwhd1xn5lc.jpg"
          alt="Testimonial"
        />
        <img
          class="w-16 h-16 md:w-20 md:h-20 rounded-full -translate-x-6 md:-translate-x-8"
          src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0002-qs6zolu0rc7lnhwexmp2xxy5z3dzb6asrwhd1xn5lc.jpg"
          alt="Testimonial"
        />
        <img
          class="w-16 h-16 md:w-20 md:h-20 rounded-full -translate-x-10 md:-translate-x-12"
          src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0002-qs6zolu0rc7lnhwexmp2xxy5z3dzb6asrwhd1xn5lc.jpg"
          alt="Testimonial"
        />
        <img
          class="w-16 h-16 md:w-20 md:h-20 rounded-full -translate-x-14 md:-translate-x-16"
          src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0002-qs6zolu0rc7lnhwexmp2xxy5z3dzb6asrwhd1xn5lc.jpg"
          alt="Testimonial"
        />
      </div>
      <p
        class="text-white text-lg md:text-xl font-medium -translate-x-10 md:-translate-x-16"
      >
        Join 584700+ traders inside
      </p>
    </div>
    <Button class="pb-10 pl-10 pt-5 ml-4 mb-4 lg:mt-5" buttonText="Explore Membership">
      <template #icon-right>
        <i class="pt-1 pl-2 ri-arrow-right-line"></i>
      </template>
    </Button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Button from '@/components/Common/Button.vue';

const isVisible = ref(false);
const challengeSection = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true;
    }
  }, { threshold: 0.1 });

  if (challengeSection.value) {
    observer.observe(challengeSection.value);
  }
});
</script>

<style scoped>
/* Initial hidden state */
.opacity-0 {
  opacity: 0;
  transform: translateY(10px); /* Start below the viewport */
}

/* Slide-up effect when visible */
.slide-up {
  opacity: 1;
  transform: translateY(0); /* Slide up to normal position */
}
</style>
