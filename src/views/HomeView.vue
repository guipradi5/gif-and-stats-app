<template>
  <main>
    <aside class="side-bar">
      <h2>Top 8 gifs</h2>
      <Loader v-if="loading" />
      <ul v-else class="side-bar__gif-list">
        <GifListElement
          v-for="element in gifs"
          :key="element.id"
          :element="element"
          @select="selectGif"
        />
      </ul>
    </aside>
    <section class="main-body">
      <div class="gif-wrapper">
        <GifVisualizer v-if="selectedGif" :element="selectedGif" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { getGifs, getGifClickCount, postGifClick } from "../api/api";
import GifListElement from "@/components/GifListElement.vue";
import GifVisualizer from "@/components/GifVisualizer.vue";
import Loader from "@/components/Loader.vue";
import { onMounted, ref } from "vue";

let loading = ref(true);
let gifs = ref([{ id: 1 }]);
let selectedGif = ref(null);

onMounted(async () => {
  gifs.value = await getGifs();
  loading.value = false;
});

async function selectGif(element) {
  selectedGif.value = element;
  await postGifClick(element.id);
  selectedGif.value.clickCount = await getGifClickCount(element.id);
}
</script>

<script>
export default {
  name: "MainComponent",
};
</script>

<style scoped lang="scss">
main {
  display: flex;

  .side-bar {
    height: calc(
      100vh - $topBarHeight - ($topBarVerticalPadding * 2) - $topBarBottomMargin -
        30px
    );
    width: 30%;
    border-right: white 1px solid;

    h2 {
      padding: 30px;
      margin: 0;
    }

    &__gif-list {
      margin: 0;
      padding: 0;
    }
  }

  .main-body {
    width: 70%;
    display: flex;
    justify-content: center;

    .gif-wrapper {
      width: 90%;
    }
  }
}

@media screen and (max-width: 768px) {
  main {
    display: block;

    .side-bar {
      height: unset;
      border-bottom: 1px solid white;
      padding-bottom: 20px;
      width: 100%;
      margin-bottom: 30px;
    }

    .main-body {
      width: 100%;
    }
  }
}
</style>
