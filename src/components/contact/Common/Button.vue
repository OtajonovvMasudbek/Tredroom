<template>
    <button
      class="bg-[#10505C] text-white w-full py-3 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-90"
      :disabled="isLoading"
      @click="handleClick"
    >
      <span v-if="isLoading" class="animate-pulse">is being sent...</span>
      <span class="text-xl font-bold" v-else>Submit</span>
    </button>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isLoading = ref(false);
  
  const handleClick = async () => {
    isLoading.value = true;
    await new Promise((resolve) => setTimeout(resolve, 2000));
    isLoading.value = false;
  };
  </script>
  