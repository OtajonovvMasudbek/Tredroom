<template>
    <div class="bg-[#10505C] pt-[170px] px-5">
      <div class="mx-auto flex flex-col lg:flex-row items-center max-w-[1200px]">
        <div class="flex flex-col lg:flex-row items-center w-full">
          <div class="max-w-[700px] text-center lg:text-left">
            <h1 class="text-[34px] lg:text-[60px] text-white font-bold">
              Your path to trading Mastery
              <span class="text-emerald-400"> starts Header </span>
            </h1>
            <div>
              <Button class="mt-5" buttonText="Explore Membership">
                <template #icon-right>
                  <i class="pt-1 pl-2 ri-arrow-right-line"></i>
                </template>
              </Button>
              <p class="pt-5 text-white">
                15,000 Members Joined: Rated Excellent at <br />
                9.1/10 from 200 Reviews
              </p>
            </div>
          </div>
          <div class="relative mt-8 lg:mt-0 lg:ml-8">
            <img
              class="w-full"
              src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Heros-04.png"
              alt="img"
            />
            <img
              class="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
              src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-001.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Button from "../Common/Button.vue";
  </script>
  