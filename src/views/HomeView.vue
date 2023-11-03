<template>
  <main>  
    <aside class="side-bar">
      <h2>Top 8 gifs</h2>
      <ul class="side-bar__gif-list">
        <GifListElement v-for="element in gifs" :key="element.id" :element="element"></GifListElement>
      </ul>
    </aside>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getGifs } from '../api/api'
import GifListElement from '@/components/GifListElement.vue';

let gifs = ref([{id:1}])

onMounted(async () => {
  gifs.value = await getGifs()
})

</script>

<script>
export default {
  name: 'MainComponent'
}
</script>

<style scoped lang="scss">
.side-bar{
  max-width: 30%;
  border-right: white 1px solid;
  h2{
  padding: 15px;
  margin: 0;
  }
  &__gif-list{
    margin: 0;
    padding: 0;
  }
}
</style>
