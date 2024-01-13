<template>
  <div>
    <h1>{{ title }}</h1>
    <ChildComponentSlot>
      <template #customSlot>
        {{ slotValue }}
      </template>
    </ChildComponentSlot>
    <button @click="$emit('updateKey')">Изменить key</button>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, onUpdated, ref} from 'vue';
import ChildComponentSlot from "./ChildComponentSlot.vue";

const title = ref('Родительский компонент');
const slotValue = ref('Исходное значение слота');
defineEmits(['updateKey'])

onMounted(()=> console.log('Родитель Mounted'))
onUpdated(()=> console.log('Родитель Updated'))
onUnmounted(()=> console.log('Родитель UnMounted'))
</script>
