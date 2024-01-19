<script setup>
import { inject } from 'vue'

const message = inject('message')
</script>

<template>
  <p>
    Сообщение {{ message }}
  </p>
  <button @click="message = message + 1">Изменить сообщение</button>
</template>