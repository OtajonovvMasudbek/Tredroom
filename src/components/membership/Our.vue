<template>
  <div class="bg-green-50 pt-20">
    <div class="text-center mx-auto pb-10">
      <p
        class="text-[#8bf7d3] bg-[#206f7e] rounded-xl py-1 px-3 max-w-[120px] flex mx-auto"
      >
        Our Pricing
      </p>
    </div>
    <div class="">
      <h2 class="text-[#10505C] text-4xl text-center font-bold pb-10">
        Find the right plan for you
      </h2>
      <div class="lg:grid lg:grid-cols-3 gap-5 pb-10 mx-10">
        <big-card
          membershipType="BEGINNER"
          price="$25"
          duration="/Mon"
          :features="[
            'Comprehensive Course Materials',
            'Live Webinars and Q&A Sessions',
            'Personalized Trading Plan',
            'Daily Market Analysis and Insights',
            'Risk Management Workshops',
          ]"
        />
        <big-card
        membershipType="INTERMEDIATE"
        price="$35"
        duration="/Mon"
        :features="[
          'Comprehensive Course Materials',
          'Live Webinars and Q&A Sessions',
          'Personalized Trading Plan',
          'Daily Market Analysis and Insights',
          'Risk Management Workshops'
        ]"
        />
        <big-card
        membershipType="ADVANCED"
        price="$55"
        duration="/Mon"
        :features="[
          'Comprehensive Course Materials',
          'Live Webinars and Q&A Sessions',
          'Personalized Trading Plan',
          'Daily Market Analysis and Insights',
          'Risk Management Workshops'
        ]"
        /> 
      </div>
    </div>
  </div>
</template>

<script setup>
import BigCard from "./Common/BigCard.vue";
</script>