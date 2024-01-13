<template>
  <div>
    <slot name="customSlot"></slot>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, onUpdated} from "vue";

onMounted(()=> console.log('Слот Mounted'))
onUpdated(()=> console.log('Слот Updated'))
onUnmounted(()=> console.log('Слот UnMounted'))
</script>