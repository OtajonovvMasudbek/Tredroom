<template>
  <div
    ref="section"
    :class="{'slide-up': isVisible}"
    class="opacity-0 transform translate-y-[50px] transition-all duration-1000 bg-[#8bf7d3]"
  >
    <div class="mx-auto max-w-[1200px] text-center">
      <p class="px-5 text-slate-600 py-10 text-[14px]">
        Collaborated with over 800+ trusted worldwide partners
      </p>
      <Img />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Img from '../Common/Img.vue';

const isVisible = ref(false);
const section = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true;
    }
  }, { threshold: 0.1 });

  if (section.value) {
    observer.observe(section.value);
  }
});
</script>

<style scoped>
/* Initial hidden state */
.opacity-0 {
  opacity: 0;
  transform: translateY(50px); /* Start below the viewport */
}

/* Slide-up effect when visible */
.slide-up {
  opacity: 1;
  transform: translateY(0); /* Slide up to normal position */
}
</style>
