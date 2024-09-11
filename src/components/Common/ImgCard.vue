<template>
    <div class="testimonial-card cursor-pointer hover:shadow-lg transition-shadow duration-300 max-w-xs mx-auto p-4 rounded-lg bg-white">
      <div>
        <img :src="imageSrc" :alt="altText" class="w-full h-[250px] object-cover rounded-lg" />
      </div>
      <h2 class="text-2xl text-[#10505C] font-bold mt-4 line-clamp-1">
        {{ text }}
      </h2>
      <p class="text-sm text-slate-500 mt-2 line-clamp-2">
        {{ description }}
      </p>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    imageSrc: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      default: 'Image'
    },
    text: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped>
  /* You can add additional styles here if needed */
  </style>
  