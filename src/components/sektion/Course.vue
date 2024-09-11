<template>
    <div class="bg-emerald-50">
        <div>
            <h2 class="text-center text-[35px] font-bold pt-10 text-slate-900">
                Benefits of joining our course
            </h2>
            <p class="text-center text-[18px] font-semibold px-7 py-5  text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br> ullamcorper mattis, pulvinar dapibus leo.
            </p>
        </div>
        <div class="lg:flex lg:items-center lg:gap-14 py-10 px-5 gap-5 lg:justify-center grid grid-cols-2">
            <cardCounter/>
            <Counter/>
            <courseCounter/>
            <count-counter/>
        </div>
    </div>
</template>

<script setup>
   import cardCounter from "../Common/cardCounter.vue";
   import CountCounter from "../Common/countCounter.vue";
   import Counter from "../Common/Counter.vue";
   import courseCounter from "../Common/courseCounter.vue";

</script>CountCounter