<template>
    <div class="mt-20">
      <div class="text-center mx-auto pb-10">
        <p
          class="text-[#142721] bg-[#b1fdb7] rounded-xl py-1 px-3 flex mx-auto max-w-[160px]"
        >
          FAQ Question
          <img
            class="w-8 pl-3"
            src="https://s.w.org/images/core/emoji/15.0.3/svg/2753.svg"
            alt="strategy"
          />
        </p>
      </div>
      <div>
        <h1 class="lg:text-[50px] text-[27px] text-slate-900 px-1 text-center font-bold">
          Frequently Asked Questions
        </h1>
        <p
          class="text-slate-500 pt-9 lg:text-[20px] px-5 pb-5 text-[17px] text-center"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec <br />
          ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div>
        <Will
          heading="Will I learn how to pick winning stocks?"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur."
        />
        <Will
          heading="Will I learn how to pick winning stocks?"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur."
        />
        <Will
          heading="Will I learn how to pick winning stocks?"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur."
        />
        <Will
          heading="Will I learn how to pick winning stocks?"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur."
        />
        <Will
          heading="Will I learn how to pick winning stocks?"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur."
        />
        <div class="flex justify-center">
            <Button class="my-5 pl-3 pb-10 lg:mt-14 mx-auto" buttonText="Explore All FAQ">
              <template #icon-right>
                <i class="pt-1 pl-2 ri-arrow-right-line"></i>
              </template>
            </Button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Will from "../components/Common/Will.vue";
  import Button from "@/components/Common/Button.vue";
  </script>
  