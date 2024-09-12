<template>
  <div ref="section" :class="{'slide-up': isVisible}" class="opacity-0 transform translate-y-[50px] transition-all duration-1000">
    <div class="text-center py-10">
      <h2 class="text-[30px] font-bold text-slate-900">Our trading learning provider</h2>
    </div>
    <div class="py-10 grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-5 px-5">
      <stocks-card
        title="Stocks Trading"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        imageUrl="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-008.png"
      />
      <stocks-card
        title="Forexs Treding"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        imageUrl="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-012-1.png"
      />
      <stocks-card
        title="Cryptos Trading"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        imageUrl="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-010.png"
      />
      <stocks-card
        title="Stocks indeces"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        imageUrl="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-009.png"
      />
      <stocks-card
        title="Commodities Trading"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        imageUrl="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-011-1.png"
      />
      <stocks-card
        title="Bonds Trading"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        imageUrl="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-013.png"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import stocksCard from '../Common/stocksCard.vue';

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
