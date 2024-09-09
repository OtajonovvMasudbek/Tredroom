<template>
    <div class=" lg:max-w-[190px] grid grid-cols-2 sm:grid-cols-3 lg:flex gap-4">
      <img 
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        alt="logo"
        class=" h-auto transition-transform duration-300 hover:scale-105"
      />
    </div>
  </template>
  
  <script setup>
  const images = [
    "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/logo-preview-2.png",
    "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/logo-preview-3.png",
    "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/logo-preview-4.png",
    "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/logo-preview-8.png",
    "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/logo-preview-6.png",
    "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/logo-preview-1.png"
  ];
  </script>
  