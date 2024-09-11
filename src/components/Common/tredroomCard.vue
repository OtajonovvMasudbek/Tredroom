<template>
  <div
    class="bg-gradient-to-b pb-8 from-[#0d1911] my-10 to-[#0d0a2b] rounded-lg shadow-md flex flex-col items-center transition duration-300 hover:from-[#0f2a1a] hover:to-[#0f0a33] 
    max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-3"
  >
    <img :src="image" alt="Course Image" class="w-full rounded-t-lg pb-8 h-auto" />
    <h2 class="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">{{ title }}</h2>
    <p class="text-teal-100 mb-4 text-center px-4 sm:px-6 md:px-8">{{ description }}</p>
    
    <div class="flex flex-col items-center sm:flex-row  justify-between gap-8 sm:gap-20 mt-2 w-full px-4 sm:px-6 md:px-8">
      <div class="text-center sm:text-left  lg:pt-10">
        <span class="text-white text-4xl font-bold">${{ price }}</span>
        <span class="text-white text-xl">.99</span>
      </div>
      <button
  class="bg-green-500  text-black font-bold px-4 py-2 lg:mt-10 rounded-lg hover:bg-green-600 hover:scale-95 transform transition duration-300"
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
