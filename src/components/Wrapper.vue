<script setup>
import Input from './Input.vue';
import { ref } from 'vue'

const active = ref(true)

const inputsValue = ref('')
</script>

<template>
  <div>
    <Input v-model="inputsValue" v-if="active" number="Первый">Первый</Input>
    <Input v-model="inputsValue" v-else number="Второй">Второй</Input>
    <button @click="active = !active">Переключить</button>
  </div>
</template>