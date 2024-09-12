<template>
    <div>
      <div class="pt-20 lg:px-20 lg:pb-10 rounded-3xl px-3">
        <div>
          <p class="text-[#206f7e] bg-[#8bf7d3] pb-5 rounded-xl py-1 px-3 flex max-w-[100px]">
            Contact us
          </p>
        </div>
        
        <div>
          <h2 class="text-[34px] lg:text-[60px] pb-5 text-[#0f2b31] font-bold">
            General enquiries
          </h2>
          <p class="pb-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit integer sed,
            ornare nascetur <br />
            metus pharetra odio hac nibh vel pellentesque,
          </p>
        </div>
  
        <div class="grid lg:grid-cols-2 grid-cols-1">
          <div class="grid grid-cols-2 gap-10 mt-10">
            <div class="flex gap-5">
              <i class="bg-[#12353c] w-10 h-12 text-white rounded-xl px-3 py-3 ri-phone-fill"></i>
              <div>
                <p>Contact Center</p>
                <p class="font-bold">+888-807-5000</p>
              </div>
            </div>
            <div class="flex gap-5">
              <i class="bg-[#12353c] w-10 h-12 text-white rounded-xl px-3 py-3 ri-phone-fill"></i>
              <div>
                <p>Contact Center</p>
                <p class="font-bold">+888-807-5000</p>
              </div>
            </div>
            <div class="flex gap-5">
              <i class="bg-[#12353c] w-10 h-12 text-white rounded-xl px-3 py-3 ri-phone-fill"></i>
              <div>
                <p>Contact Center</p>
                <p class="font-bold">+888-807-5000</p>
              </div>
            </div>
            <div class="flex gap-5">
              <i class="bg-[#12353c] w-10 h-12 text-white rounded-xl px-3 py-3 ri-phone-fill"></i>
              <div>
                <p>Contact Center</p>
                <p class="font-bold">+888-807-5000</p>
              </div>
            </div>
          </div>
  
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="block">
              <label for="first-name" class="block mb-2 font-bold">First Name</label>
              <input
                id="first-name"
                class="outline-none py-2 rounded-lg px-2 border-2 border-gray-300 focus:border-blue-500 transition-all w-full"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div class="block">
              <label for="last-name" class="block mb-2 font-bold">Last Name</label>
              <input
                id="last-name"
                class="outline-none py-2 rounded-lg px-2 border-2 border-gray-300 focus:border-blue-500 transition-all w-full"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div class="block">
              <label for="email" class="block mb-2 font-bold">E-mail</label>
              <input
                id="email"
                class="outline-none py-2 rounded-lg px-2 border-2 border-gray-300 focus:border-blue-500 transition-all w-full"
                type="email"
                placeholder="E-mail"
              />
            </div>
            <div class="block">
              <label for="telephone" class="block mb-2 font-bold ">Telephone</label>
              <input
                id="telephone"
                class="outline-none py-2 rounded-lg px-2 border-2 border-gray-300 focus:border-blue-500 transition-all w-full"
                type="tel"
                placeholder="Your direct contact number"
              />
            </div>
            <div class="block lg:col-span-2">
              <label for="enquiry" class="block mb-2 font-bold lg:text-center">
                Your enquiry - how can we help you?
              </label>
              <textarea
                id="enquiry"
                class="outline-none py-2 rounded-lg px-2 border-2 border-gray-300 focus:border-blue-500 transition-all w-full"
                rows="5"
                placeholder="Your enquiry"
              ></textarea>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Button from "../Common/Button.vue";
  </script>
  