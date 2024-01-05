<script setup>
import {onMounted, onUnmounted, ref} from 'vue'
import InputWithKey from "./InputWithKey.vue";

const active = ref(true)

const key1 = ref('123')
const key2 = ref('456')

function handleKey() {
  key1.value = key1.value + '1'
  key2.value = key2.value + '2'
}
onMounted(()=> console.log('Wrapper(key) mount'))
onUnmounted(()=> console.log('Wrapper(key) UNmount'))

const inputsValue = ref('')

</script>

<template>
  <div>
    <InputWithKey  v-model="inputsValue" v-if="active" :key="key1" number="Первый">Первый</InputWithKey>
    <InputWithKey  v-model="inputsValue" v-else :key="key2" number="Второй">Второй</InputWithKey>
    <button @click="active = !active">Переключить</button>
    <button @click="handleKey">Изменить key</button>
  </div>
</template>
