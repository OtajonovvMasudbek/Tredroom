<template>
  <div class="bg-[#8bf7d3] py-20 pb-30">
    <div class="bg-[#08292f] lg:mx-5 lg:rounded-[45px]">
      <div class="text-center mx-auto py-20">
        <p
          class="text-[#8bf7d3] bg-[#206f7e] rounded-xl py-1 px-3 flex mx-auto max-w-[150px]"
        >
          Our Services
          <img
            class="w-8 pl-3"
            src="https://s.w.org/images/core/emoji/15.0.3/svg/1f4c8.svg"
            alt="strategy"
          />
        </p>
      </div>
      <div>
        <h2 class="text-[34px] text-center lg:text-[60px] text-white font-bold">
          Learn to trade with <br />
          <span class="text-emerald-400"> technical analysis </span>
        </h2>
      </div>
      <div class=" px-10 py-10 pb-32 grid lg:grid-cols-3 gap-10">
          <Card
            text="BEGINNER"
            imgSrc="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-004.png"
            title="The best place to learn to trade. Period."
            item="Lorem ipsum dolor sit amet"
            buttonText="Join Membership"
          />
          <Card
            text="INTERMEDIATE"
            imgSrc="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-003.png"
            title="Take your trading career to the next level."
            item="Lorem ipsum dolor sit amet"
            buttonText="Join Membership"
          />
          <Card
            text="ADVENCED"
            imgSrc="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-005.png"
            title="Collaborate with other professional traders."
            item="Lorem ipsum dolor sit amet"
            buttonText="Join Membership"
          />
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from '../Common/Card.vue';

const handleButtonClick = () => {
  alert('Button clicked!');
};
</script>



      
