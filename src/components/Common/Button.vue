<template>
    <div class="">
        <button :class="['lg:flex lg:items-center px-8 pl-5 py-2 lg:text-slate-900 font-bold md:block md:text-left md:rounded-xl lg:rounded-xl rounded-xl lg:transition-transform lg:transform hover:scale-95', gradientClass]">
            <slot name="icon-left" class="mr-2"></slot>
            {{ buttonText }}
            <slot name="icon-right" class="ml-2"></slot>
        </button>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    buttonText: {
        type: String,
        required: true,
    },
});

const gradientClass = 'bg-gradient-to-r from-green-400 via-green-300 to-green-500';
</script>
