<template>
    <div class="my-5">
      <h2
        class="lg:text-lg font-semibold px-5 bg-slate-100 mb-1 rounded-lg lg:py-5 py-2 text-[18px] cursor-pointer text-center flex items-center justify-center"
        @click="toggleContent"
      >
        {{ heading }}
        <span class="ml-2 w-10 transition-transform duration-300" :class="{'rotate-180': showContent}">
          <i class="fa fa-chevron-down "></i>
        </span>
      </h2>
  
      <div
        class="relative bg-white border  rounded shadow-lg overflow-hidden transition-all duration-500"
        :class="{'max-h-96 opacity-100': showContent, 'max-h-0 opacity-0': !showContent}"
        style="width: 90%; max-width: 950px; margin: 0 auto;"
      >
        <p class="text-base   p-4 lg:text-[15px] text-center">
          {{ content }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    heading: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  });
  
  const showContent = ref(false);
  
  function toggleContent() {
    showContent.value = !showContent.value;
  }
  </script>
  
  <style scoped>
  .relative {
    padding: 0 2rem;
  }
  
  @media (max-width: 768px) {
    .relative {
      padding: 0 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .text-base {
      font-size: 0.875rem;
    }
  }
  
  .rotate-180 {
    transform: rotate(180deg);
  }
  
  .max-h-0 {
    max-height: 0;
  }
  
  .max-h-96 {
    max-height: 24rem;
  }
  
  .transition-all {
    transition: max-height 0.5s ease, opacity 0.5s ease;
  }
  </style>
  