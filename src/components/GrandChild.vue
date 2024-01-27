<script setup>
import {inject, onMounted} from 'vue'

const message = inject('message')

onMounted(() => {
  console.log(message)
})
</script>

<template>
  <p>
    Сообщение {{ message }}
  </p>
  <button @click="message = message + 1">Изменить сообщение</button>
</template>