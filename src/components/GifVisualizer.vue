<template>
  <div class="gif-visualizer">
    <div class="gif-visualizer__wrapper">
      <img :src="element.media[0].gif.url" />
    </div>
    <div class="gif-visualizer__footer">
      <h3 class="gif-visualizer__description">
        {{ element.content_description }}
      </h3>
      <div class="gif-visualizer__data">
        <div class="gif-visualizer__data-size">
          <img src="@/assets/svg/file.svg" />
          {{ bytesToMb(element.media[0].gif.size) }} Mb
        </div>
        <div v-if="element.clickCount" class="gif-visualizer__data-clicks">
          <img src="@/assets/svg/data.svg" /> {{ element.clickCount }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, onMounted } from "vue";

const props = defineProps(["element"]);
const element = computed(() => props.element);
const clickCount = ref(null);

function bytesToMb(bytes) {
  return (bytes / 1024 / 1000).toFixed(2);
}
</script>

<script>
export default {
  name: "GifVisualizer",
};
</script>

<style scoped lang="scss">
.gif-visualizer {
  box-shadow: $shadow;
  &__wrapper {
    background: rgb(51, 51, 51);
    display: flex;
    justify-content: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &__footer {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 20px;
    background: rgb(51, 53, 61);

    h3 {
      margin-top: 0;
    }
  }

  &__data {
    display: flex;

    > div {
      display: flex;
      margin-right: 20px;

      img {
        height: 1rem;
        width: 1rem;
        filter: invert(1);
        margin-right: 5px;
      }
    }
  }
}
</style>
