<template>
  <div class="bg-gradient-to-l from-[#0c2e34] to-[#10505C] rounded-lg p-4 shadow-md flex space-x-4 md:space-x-4 sm:space-x-2">
    <img :src="image" :alt="alt" class="lg:max-w-36 w-36 bg-cover sm:w-24 h-auto object-cover rounded-md" />
  
    <div class="flex flex-col justify-between flex-grow">
      <div>
        <h3 class="text-white font-bold text-lg sm:text-base">{{ title }}</h3>
        <p class="text-gray-300 text-sm sm:text-xs">{{ day }} | {{ time }}</p>
      </div>
  
      <button class="bg-green-500 hover:bg-green-400 items-center text-white py-2 px-4 sm:py-1 sm:px-3 mt-4 rounded-full flex justify-center">
        Join Live
        <i class="pt-1 pl-2 ri-arrow-right-s-line"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: 'Event Image',
    },
    title: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
};
</script>
