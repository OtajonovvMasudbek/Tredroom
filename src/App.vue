<template>
  <div>
    <Header/>
    <router-view></router-view> 
    <Asked/>
    <Apple/>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '@/leyauts/Header.vue';
import Asked from '@/leyauts/Asked.vue';
import Apple from '@/leyauts/Apple.vue';
import Footer from '@/leyauts/Footer.vue';
</script>
