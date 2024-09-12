<template>
  <div ref="section" :class="{'slide-up': isVisible}" class="opacity-0 transform translate-y-[50px] transition-all duration-1000 bg-[#8bf7d3] py-20 pb-30">
    <div class="bg-[#08292f] lg:mx-5 lg:rounded-[45px]">
      <div :class="{'slide-up': isVisible}" class="text-center mx-auto py-20 opacity-0 transform translate-y-[50px] transition-all duration-1000">
        <p class="text-[#8bf7d3] bg-[#206f7e] rounded-xl py-1 px-3 flex mx-auto max-w-[150px]">
          Our Services
          <img
            class="w-8 pl-3"
            src="https://s.w.org/images/core/emoji/15.0.3/svg/1f4c8.svg"
            alt="strategy"
          />
        </p>
      </div>

      <div :class="{'slide-up': isVisible}" class="opacity-0 transform translate-y-[50px] transition-all duration-1000">
        <h2 class="text-[34px] text-center lg:text-[60px] text-white font-bold">
          Learn to trade with <br />
          <span class="text-emerald-400"> technical analysis </span>
        </h2>
      </div>

      <div class="px-10 py-10 pb-32 grid lg:grid-cols-3 gap-10">
        <Card
          text="BEGINNER"
          imgSrc="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-004.png"
          title="The best place to learn to trade. Period."
          item="Lorem ipsum dolor sit amet"
          buttonText="Join Membership"
          @click="handleButtonClick"
        />

        <Card
          text="INTERMEDIATE"
          imgSrc="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-003.png"
          title="Take your trading career to the next level."
          item="Lorem ipsum dolor sit amet"
          buttonText="Join Membership"
          @click="handleButtonClick"
        />

        <Card
          text="ADVANCED"
          imgSrc="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-005.png"
          title="Collaborate with other professional traders."
          item="Lorem ipsum dolor sit amet"
          buttonText="Join Membership"
          @click="handleButtonClick"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Card from '../Common/Card.vue';

// Example function for button click
const handleButtonClick = () => {
  alert('Button clicked!');
};

// Track visibility of section for animation
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
/* Initial hidden state for text and cards */
.opacity-0 {
  opacity: 0;
  transform: translateY(50px); /* Start below the viewport */
}

/* Slide-up effect when visible */
.slide-up {
  opacity: 1;
  transform: translateY(0); /* Slide up to normal position */
}
</style>
