<template>
  <div class="home">
    <h1>All Destination</h1>

    <div class="destinations">
      <router-link v-for="destination in destinations" :key="destination.id"
        :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }">
        <!-- 這裡我們指定了 router(路由)的名字，然後在網址後面加上了params。 -->
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name">
      </router-link>
    </div>

  </div>
</template>

<script>
import sourceData from '@/data.json';

export default {
  data() {
    return {
      destinations: sourceData.destinations
    }
  }
}
</script>

<script setup>
// import { ref } from 'vue';
// import sourceData from '@/data.json';

// const destinations = ref(sourceData.destinations);
</script>