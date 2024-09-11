<template>
  <div class="bg-[#10505C] lg:rounded-t-xl pt-20 md:pt-40 flex flex-col items-center">
    <div class="max-w-[200px] md:max-w-[250px] mb-6">
      <img
        src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Logo-01-1.png"
        alt="traderoom"
      />
    </div>
    <p class="max-w-[350px] md:max-w-[700px] text-lg md:text-xl text-center  text-slate-400">
      Subscribe to our newsletter and we will keep you informed about upcoming webinars, news, events, and updates to our products.
    </p>
    <div class="my-7 flex justify-center">
      <div class="flex items-center">
        <input
          class="w-[200px] pl-5 sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] rounded-xl outline-none py-3 lg:py-4"
          type="email"
          placeholder="Enter your email"
        />
        <button
          class="bg-[#05180C] hover:bg-[#030b06] text-white px-5 rounded-r-xl py-3 lg:py-4 -translate-x-[20px] md:-translate-x-[30px]"
        >
          Subscribe
        </button>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-10 px-10 mb-10 w-full">
      <ul class="flex flex-col items-center md:items-start">
        <li class="font-bold text-xl text-white mb-3">
          <router-link to="">Home</router-link>
        </li>
        <li class="text-lg font-semibold text-slate-400">
          <router-link to="">About</router-link>
        </li>
        <li class="text-lg font-semibold text-slate-400">
          <router-link to="">Services</router-link>
        </li>
        <li class="text-lg font-semibold text-slate-400">
          <router-link to="">Contact</router-link>
        </li>
        <li class="text-lg font-semibold text-slate-400">
          <router-link to="">Blog</router-link>
        </li>
      </ul>

      <ul class="flex flex-col items-center md:items-start">
        <li class="font-bold text-xl text-white mb-3">
          <router-link to="">Home</router-link>
        </li>
        <li class="text-lg font-semibold text-slate-400">
          <router-link to="">About</router-link>
        </li>
        <li class="text-lg font-semibold text-slate-400">
          <router-link to="">Services</router-link>
        </li>
        <li class="text-lg font-semibold text-slate-400">
          <router-link to="">Contact</router-link>
        </li>
        <li class="text-lg font-semibold text-slate-400">
          <router-link to="">Blog</router-link>
        </li>
      </ul>

      <!-- Third column -->
      <ul class="flex flex-col items-center md:items-start">
        <li class="font-bold text-xl text-white mb-3">
          <router-link to="">Home</router-link>
        </li>
        <li class="text-lg font-semibold text-slate-400">
          <router-link to="">About</router-link>
        </li>
        <li class="text-lg font-semibold text-slate-400">
          <router-link to="">Services</router-link>
        </li>
        <li class="text-lg font-semibold text-slate-400">
          <router-link to="">Contact</router-link>
        </li>
        <li class="text-lg font-semibold text-slate-400">
          <router-link to="">Blog</router-link>
        </li>
      </ul>

      <!-- Fourth column -->
      <ul class="flex flex-col items-center md:items-start">
        <li class="font-bold text-xl text-white mb-3">
          <router-link to="">Home</router-link>
        </li>
        <li class="text-lg font-semibold text-slate-400">
          <router-link to="">About</router-link>
        </li>
        <li class="text-lg font-semibold text-slate-400">
          <router-link to="">Services</router-link>
        </li>
        <li class="text-lg font-semibold text-slate-400">
          <router-link to="">Contact</router-link>
        </li>
        <li class="text-lg font-semibold text-slate-400">
          <router-link to="">Blog</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
