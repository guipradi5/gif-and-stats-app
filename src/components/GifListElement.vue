<template>
  <li @click="emit('select', element)">{{ element.content_description }}</li>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps(["element"])
const element = ref(props.element)

const emit = defineEmits(["select"])
</script>

<script>
export default {
  name: "GifListElement"
}
</script>

<style scoped lang="scss">
li {
  padding: 10px 20px;
  list-style: none;
  cursor: pointer;
}
</style>
