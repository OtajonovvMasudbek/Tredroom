<template>
    <div class="px-3  bg-green-50 rounded-lg">
      <img :src="imageSrc" :alt="imageAlt" class="w-20  h-20 mb-4" />
      <h3 class="lg:text-xl  text-center font-bold lg:text-left text-gray-800">{{ title }}</h3>
      <p class="text-gray-500 text-center lg:text-left">{{ description }}</p>
    </div>
  </template>
<script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true,
      },
      imageAlt: {
        type: String,
        default: 'Image',
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  
  