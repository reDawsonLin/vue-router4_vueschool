<template>
  <div class="container">
    <TheNavigation/>
    <RouterView :key="$route.path"/>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue';


</script>
