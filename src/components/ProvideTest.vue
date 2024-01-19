<script setup>
import { ref, provide } from 'vue'
import Child from './Child.vue'
const message = ref('hello')
provide('message', message)
</script>

<template>
  <input v-model="message">
  <Child />
</template>