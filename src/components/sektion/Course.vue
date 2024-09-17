<template>
    <div ref="section" :class="{'slide-up': isVisible}" class="opacity-0 transform translate-y-[50px] transition-all duration-1000 bg-emerald-50">
      <div>
        <h2 class="text-center text-[35px] font-bold pt-10 text-slate-900">
          Benefits of joining our course
        </h2>
        <p class="text-center text-[18px] font-semibold px-7 py-5 text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br> ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div class="lg:flex lg:items-center lg:gap-14 py-10 px-5 gap-5 lg:justify-center grid grid-cols-2">
        <cardCounter />
        <Counter />
        <courseCounter />
        <CountCounter />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import cardCounter from '../Common/cardCounter.vue';
  import CountCounter from '../Common/countCounter.vue';
  import Counter from '../Common/Counter.vue';
  import courseCounter from '../Common/courseCounter.vue';
  
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
  .opacity-0 {
    opacity: 0;
    transform: translateY(50px); 
    }
  
  .slide-up {
    opacity: 1;
    transform: translateY(0); 
  }
  </style>
  