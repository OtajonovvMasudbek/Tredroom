<template>
  <div>
    <div class="text-center mx-auto pt-10">
      <p
        class="text-[#8bf7d3] bg-[#206f7e] rounded-xl py-1 px-3 max-w-[120px] flex mx-auto"
      >
        Our Pricing
      </p>
    </div>
    <div class="text-center pt-[20px] lg:pt-[20px]">
      <h2
        class="pl-3 lg:pt-0 text-slate-900 font-bold text-[30px] lg:text-[45px]"
      >
        Members-Only Live Trade
      </h2>
      <p class="pt-5 pl-3 lg:pt-10 text-slate-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        <br />

        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <Button class="mt-10 pl-3 lg:mt-14" buttonText="Explore Membership">
        <template #icon-right>
          <i class="pt-1 pl-2 ri-arrow-right-line"></i>
        </template>
      </Button>
    </div>
    <div class=" px-10 py-3">
      <div class="flex flex-wrap space-x-2 space-y-2 mb-4 justify-center">
  <button
    class="text-gray-600 font-bold focus:text-white py-2 px-4 rounded-lg focus:outline-none focus:bg-[#10505C] w-20"
  >
    Mon
  </button>
  <button
    class="text-gray-600 font-bold focus:text-white py-2 px-4 rounded-lg focus:outline-none focus:bg-[#10505C] w-20"
  >
    Tue
  </button>
  <button
    class="text-gray-600 font-bold focus:text-white py-2 px-4 rounded-lg focus:outline-none focus:bg-[#10505C] w-20"
  >
    Wed
  </button>
  <button
    class="text-gray-600 font-bold focus:text-white py-2 px-4 rounded-lg focus:outline-none focus:bg-[#10505C] w-20"
  >
    Thu
  </button>
  <button
    class="text-gray-600 font-bold focus:text-white py-2 px-4 rounded-lg focus:outline-none focus:bg-[#10505C] w-20"
  >
    Fri
  </button>
  <button
    class="text-gray-600 font-bold focus:text-white py-2 px-4 rounded-lg focus:outline-none focus:bg-[#10505C] w-20"
  >
    Sat
  </button>
  <button
    class="text-gray-600 font-bold focus:text-white py-2 px-4 rounded-lg focus:outline-none focus:bg-[#10505C] w-20"
  >
    Sun
  </button>
</div>


      <div
        class="grid grid-cols-1 md:grid-cols-2 pt-20 lg:grid-cols-3 gap-6 mt-1"
      >
        <event-card
          image="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Thumb-3.1-qsqwawxmmi5ewmf1xla5ybve9wt64ksndo8cts8fm8.jpg"
          alt="Market Movers"
          title="Market Movers: Weekly Analysis & Trade"
          day="Monday"
          time="09:00 ET"
        />
        <event-card
          image="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Thumb-3.2-qsqwbkfldd1kyvgx4dfu6nxx4jlch0dxswjhtp9lao.jpg"
          alt="Global Markets Update"
          title="Global Markets Update Tips for This Week"
          day="Monday"
          time="09:00 ET"
        />
        <event-card
          image="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Thumb-3.2-qsqwbkfldd1kyvgx4dfu6nxx4jlch0dxswjhtp9lao.jpg"
          alt="Crypto Watch"
          title="Crypto Watch: Navigating Market"
          day="Monday"
          time="09:00 ET"
        />
        <event-card
          image="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Thumb-3.2-qsqwbkfldd1kyvgx4dfu6nxx4jlch0dxswjhtp9lao.jpg"
          alt="Global Markets Update"
          title="Global Markets Update Tips for This Week"
          day="Monday"
          time="09:00 ET"
        />
        <event-card
          image="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Thumb-3.2-qsqwbkfldd1kyvgx4dfu6nxx4jlch0dxswjhtp9lao.jpg"
          alt="Global Markets Update"
          title="Global Markets Update Tips for This Week"
          day="Monday"
          time="09:00 ET"
        />
        <event-card
          image="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Thumb-3.2-qsqwbkfldd1kyvgx4dfu6nxx4jlch0dxswjhtp9lao.jpg"
          alt="Global Markets Update"
          title="Global Markets Update Tips for This Week"
          day="Monday"
          time="09:00 ET"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import EventCard from "../membership/Common/EventCard.vue";
</script>
