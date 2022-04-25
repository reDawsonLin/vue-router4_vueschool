<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<script>
/**
 * # 這是 vue-school課程使用的方法
 */
import sourceData from '@/data.json'

export default {
  data() {
    return {
      destination: null,
    }
  },
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id)
    },

    //S2: 打API時就不需要這個
    // destination() {
    //   return sourceData.destinations.find(destination => destination.id === this.destinationId)
    // }
  },
  // S2:模擬資料是打 API來的情況
  methods: {
    async initData() {
      const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
      this.destination = await response.json()
    }
  },
  async created() {
    this.initData()
    // this.$watch(() => this.$route.params, this.initData)
  }
}
</script>


<script setup>
/**
 * ? Q: 這邊好像不能用同樣的方法，複製到 setup環境下做，computed計算後的結果不能傳到下一個上面
 * * A: 找到方法了！ 相較於原本使用兩個 computed的方法，我們將其中一個設成 ref變數，另一個使用computed跟著變動
 *      (假設 ref變數會跟著變動，類似watch的功能... 待驗證)
*/

// import sourceData from '@/data.json'
// import { computed, ref } from '@vue/runtime-core'
// import { useRoute } from 'vue-router'

// const route = useRoute();
// const destinationId = ref(parseInt(route.params.id));

// const destination = computed(() => {
//   return sourceData.destinations.find(destination => destination.id === destinationId.value)
// })
</script>


