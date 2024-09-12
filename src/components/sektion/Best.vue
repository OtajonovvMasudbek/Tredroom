<template>
  <div ref="section" :class="{'slide-up': isVisible}" class="opacity-0 transform translate-y-[50px] transition-all duration-1000 bg-emerald-50 py-10 px-5">
    <div class="bg-[#10505C] pt-20 lg:px-20 lg:pb-10 rounded-3xl px-3">
      <div class="text-center mx-auto">
        <p class="text-[#8bf7d3] bg-[#206f7e] rounded-xl py-1 px-3 flex mx-auto max-w-[150px]">
          Our Products
          <img class="w-8 pl-3" src="https://s.w.org/images/core/emoji/15.0.3/svg/1f4bb.svg" alt="strategy" />
        </p>
      </div>
      <div>
        <h2 class="text-[34px] text-center lg:text-[60px] text-white font-bold">
          Our best trading
          <span class="text-emerald-400"> courses </span>
        </h2>
      </div>
      <div class="lg:grid lg:grid-cols-2 grid grid-cols-1 gap-10">
        <tredroom-card
          image="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Ebook-01-1024x576.jpg"
          title="Technical Analysis"
          description="Over 2+ hours of Training Material"
          :price="49"
        />
        <tredroom-card
          image="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Ebook-01-1024x576.jpg"
          title="Crypto­currency"
          description="Over 2+ hours of Training Material"
          :price="129"
        />
        <tredroom-card
          image="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Ebook-01-1024x576.jpg"
          title="Technical Analysis"
          description="Over 2+ hours of Training Material"
          :price="149"
        />
        <tredroom-card
          image="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Ebook-01-1024x576.jpg"
          title="Technical Analysis"
          description="Over 2+ hours of Training Material"
          :price="199"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import tredroomCard from '../Common/tredroomCard.vue';

const isVisible = ref(false);
const section = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true;
    }
  }, { threshold: 0.1 });

  if (section.value) {
    observer.observe(section.value);
  }
});
</script>

<style scoped>
.opacity-0 {
  opacity: 0;
  transform: translateY(50px); 
}

.slide-up {
  opacity: 1;
  transform: translateY(0); 
}
</style>
