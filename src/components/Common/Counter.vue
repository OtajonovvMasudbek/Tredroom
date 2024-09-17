<template>
  <div
    class="flex items-center space-x-4"
    ref="counterElement"
  >
    <div class="bg-[#0e3b43] rounded-full p-4 md:p-6">
      <i class="ri-eye-line text-green-400 text-3xl md:text-5xl"></i>
    </div>

    <div class="text-black flex items-center space-x-1 md:space-x-2">
      <span class="text-4xl md:text-6xl font-bold">{{ currentCount }}M</span>
      <span class="text-lg md:text-xl font-bold -translate-y-2 md:-translate-y-3">+</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentCount: 0,
      endValue: 50,
      interval: null,
    };
  },
  mounted() {
    this.createObserver();
  },
  methods: {
    createObserver() {
      const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.startCounter();
            observer.unobserve(entry.target); 
          }
        });
      }, options);

      observer.observe(this.$refs.counterElement);
    },
    startCounter() {
      if (this.interval) return;
      this.interval = setInterval(() => {
        if (this.currentCount < this.endValue) {
          this.currentCount += 1;
        } else {
          clearInterval(this.interval);
          this.interval = null;
        }
      }, 50);
    }
  },
  beforeUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
</script>
