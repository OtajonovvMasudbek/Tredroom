<template>
  <div
    ref="latestArticlesSection"
    :class="{'slide-up': isVisible}"
    class="my-16 opacity-0 transform translate-y-[50px] transition-all duration-1000"
  >
    <h2 class="text-[#10505C] pl-5 text-[40px] font-bold">
      Our Latest Articles
    </h2>
    <div class="lg:grid lg:grid-cols-3 grid grid-cols-1 gap-4 mt-8">
      <img-card
        imageSrc="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Blog-06.jpg"
        text="How to Use TradingView"
        description="oneprobl4ckMild   August 13, 2024"
      />
      <img-card
        imageSrc="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Blog-04.jpg"
        text="The Newest AI Stock Spike"
        description="oneprobl4ckMild   August 13, 2024"
      />
      <img-card
        imageSrc="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Blog-08.jpg"
        text="What to do in a slow market?"
        description="oneprobl4ckMild   August 13, 2024"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ImgCard from '../Common/ImgCard.vue';

const isVisible = ref(false);
const latestArticlesSection = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true;
    }
  }, { threshold: 0.1 });

  if (latestArticlesSection.value) {
    observer.observe(latestArticlesSection.value);
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
