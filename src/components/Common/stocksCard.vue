<template>
  <router-link to="/">
    <div
      class="card-container cursor-pointer flex items-center py-5 px-6 bg-white hover:bg-slate-100 shadow-md rounded-lg"
    >
      <div class="text-section">
        <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
        <p class="text-gray-600 text-lg">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
      </div>
      <div class="icon-section">
        <img :src="imageUrl" alt="Card Image" class="h-auto w-24" />
      </div>
    </div>
  </router-link>
</template>
  
  <script>
export default {
  name: "CardComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
};
</script>
  
  <style scoped>
.card-container {
  border: 1px solid #e5e7eb;
}
</style>
  