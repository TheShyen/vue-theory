<script setup>
import {onMounted, reactive, ref, watch} from 'vue'
import Input from "./components/Input.vue";

onMounted(() => {
  console.log('mounted')
})


const title = ref('v-model argument example')
const obj = reactive({click: createObj})

watch(() => obj.click, () => {
  console.log('watcher')
}, {immediate: true})
function createObj() {
  console.log(obj)
  delete obj.click
}
</script>

<template>
  <h1>{{ title }}</h1>
  <input
    type="text"
    v-model="title"
  />
  <button v-on="obj">fff</button>
</template>