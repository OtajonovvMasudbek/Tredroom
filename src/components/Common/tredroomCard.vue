<template>
    <div class="bg-gradient-to-b pb-8 from-[#0d1911]  to-[#071e0f] rounded-lg shadow-md  flex flex-col items-center">
      <img :src="image" alt="Course Image" class="w-full rounded-t-lg pb-8 h-auto" />
      <h2 class="text-white text-2xl text-left font-semibold mb-2">{{ title }}</h2>
      <p class="text-teal-100 mb-4">{{ description }}</p>
      <div class="flex items-center  gap-28">
        
      <div class="flex items-baseline mb-4">
        <span class="text-teal-100 text-sm mr-1">Starting at:</span>
        <span class="text-white text-4xl font-bold">${{ price }}</span>
        <span class="text-white text-xl">.99</span>
      </div>
      <button
        class="bg-green-300 text-green-900 px-4  py-2 rounded-lg hover:bg-green-400 transition duration-300"
      >
        {{ buttonText }}
      </button>
    </div>

    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      buttonText: {
        type: String,
        default: 'Get Course Now'
      }
    }
  }
  </script>
  
  