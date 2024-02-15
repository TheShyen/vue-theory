<template>
  <div>ABOBA</div>
</template>

<script setup>
import {onMounted, onUnmounted, onUpdated} from "vue";
import { onActivated, onDeactivated } from 'vue'

onActivated(() => {
  console.log('CCS onActivated')
})

onDeactivated(() => {
  console.log('CCS onDeactivated')
})
onMounted(()=> console.log('childCompSlot Mounted'))
onUpdated(()=> console.log('childCompSlot Updated'))
onUnmounted(()=> console.log('childCompSlot UnMounted'))
</script>