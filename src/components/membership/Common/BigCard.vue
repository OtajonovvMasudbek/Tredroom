<template>
    <div class="bg-gradient-to-b mt-4 from-[#0a292e] to-[#0f4a54] text-center p-6 rounded-lg shadow-lg">
      <h2 class="text-white  text-xl font-bold uppercase">{{ membershipType }}</h2>
      <h3 class="text-green-300 text-5xl font-bold mt-2">{{ price }}</h3>
      <p class="text-gray-300 mb-4 pt-2">{{ duration }}</p>
      <div class="text-center text-white">
        <p class="text-lg font-semibold mb-3">Included Features</p>
        <ul class="space-y-2 text-center">
          <li v-for="(feature, index) in features" :key="index" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            {{ feature }}
          </li>
        </ul>
      </div>
      <button class="bg-gradient-to-b from-[#2eac30] to-[#0ac34b] hover:bg-gradient-to-b hover:from-[#0ac34b] hover:to-[#2eac30] font-bold text-white py-2 px-4 mt-6 rounded-full">
        Subscribe Monthly
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      membershipType: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      duration: {
        type: String,
        required: true,
      },
      features: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  