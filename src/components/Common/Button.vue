<template>
    <button
      class="relative px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg overflow-hidden group"
    >
      <span class="absolute inset-0 transition-transform transform -translate-x-full group-hover:translate-x-0 bg-emerald-400 h-full"></span>
      <span class="relative z-10">
        <slot name="icon-left"></slot>
        {{ buttonText }}
        <slot name="icon-right"></slot>
      </span>
    </button>
  </template>
  
  <script setup>
  const props = defineProps({
    buttonText: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped>
  button {
    cursor: pointer;
  }
  
  button:hover {
    outline: none;
  }
  
  button:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: rgba(255, 255, 255, 0.2);
    transition: width 0.4s ease, height 0.4s ease, top 0.4s ease, left 0.4s ease;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
  
  button:hover:before {
    width: 400%;
    height: 400%;
    top: -50%;
    left: -50%;
  }
  </style>
  