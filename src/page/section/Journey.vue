<template>
    <div class="relative flex justify-center py-10 bg-gray-900">
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-500" :style="{ height: `${lineHeight}px`, width: '4px' }"></div>
      <div class="w-full max-w-screen-lg">
        <div class="flex items-center w-full mb-10">
          <div class="w-1/2 pr-8">
            <img src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/thumbnail-06.jpg" alt="2010 Event" class="rounded-lg">
          </div>
          <div class="w-1/2">
            <div class="bg-gray-800 p-4 rounded-lg">
              <span class="bg-lime-500 text-gray-800 px-2 py-1 rounded-lg text-sm font-bold">2010</span>
              <h2 class="text-white text-xl mt-2">The Wall Street Internship</h2>
              <p class="text-gray-400">We bring the right people together to challenge established thinking...</p>
            </div>
          </div>
        </div>
        <div class="flex items-center w-full mb-10">
          <div class="w-1/2 order-2 pl-8">
            <img src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/thumbnail-06.jpg" alt="2015 Event" class="rounded-lg">
          </div>
          <div class="w-1/2 order-1">
            <div class="bg-gray-800 p-4 rounded-lg">
              <span class="bg-lime-500 text-gray-800 px-2 py-1 rounded-lg text-sm font-bold">2015</span>
              <h2 class="text-white text-xl mt-2">Laying the Foundation</h2>
              <p class="text-gray-400">We bring the right people together to challenge established thinking...</p>
            </div>
          </div>
        </div>
        <div class="flex items-center w-full mb-10">
          <div class="w-1/2 pr-8">
            <img src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/thumbnail-06.jpg" alt="2010 Event" class="rounded-lg">
          </div>
          <div class="w-1/2">
            <div class="bg-gray-800 p-4 rounded-lg">
              <span class="bg-lime-500 text-gray-800 px-2 py-1 rounded-lg text-sm font-bold">2010</span>
              <h2 class="text-white text-xl mt-2">The Wall Street Internship</h2>
              <p class="text-gray-400">We bring the right people together to challenge established thinking...</p>
            </div>
          </div>
        </div>
        <div class="flex items-center w-full mb-10">
          <div class="w-1/2 order-2 pl-8">
            <img src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/thumbnail-06.jpg" alt="2015 Event" class="rounded-lg">
          </div>
          <div class="w-1/2 order-1">
            <div class="bg-gray-800 p-4 rounded-lg">
              <span class="bg-lime-500 text-gray-800 px-2 py-1 rounded-lg text-sm font-bold">2015</span>
              <h2 class="text-white text-xl mt-2">Laying the Foundation</h2>
              <p class="text-gray-400">We bring the right people together to challenge established thinking...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      lineHeight: 0, 
    };
  },
  mounted() {
    const observer = new IntersectionObserver(this.handleScroll, {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    const target = document.querySelector('.relative');
    observer.observe(target);
  },
  methods: {
    handleScroll(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.lineHeight = entry.intersectionRatio * entry.target.offsetHeight;
        }
      });
    },
  },
};
</script>

  