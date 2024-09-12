<template>
  <div class="block py-20 lg:flex pl-1 pb-5 lg:pb-20 justify-between">
    <div class="relative lg:px-10  max-w-full  lg:max-w-[500px]">
      <img
        class="lg:max-w-[400px] translate-x-10 max-w-[250px] rounded-lg"
        src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Traderoom-jpg-02.jpg"
        alt="group"
      />
      <img
        class="absolute lg:max-w-[400px] max-w-[250px] inset-0 w-full rounded-lg shadow-xl translate-x-20 translate-y-20 lg:translate-x-40 lg:translate-y-60"
        src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Traderoom-jpg-01-800x533.jpg"
        alt="jon"
      />
    </div>

    <div class="text-left pt-10 lg:pt-[130px]">
      <h2 class="text-slate-900 font-bold text-[30px] lg:text-[45px]">
        A Trading Community <br />
        Dedicated To Your <br />
        Success!
      </h2>
      <p class="pt-5 text-slate-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        <br />
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <Button class="mt-10 lg:mt-14" buttonText="Explore Membership">
        <template #icon-right>
          <i class="pt-1 pl-2 ri-arrow-right-line"></i>
        </template>
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from "../Common/Button.vue";
</script>
  