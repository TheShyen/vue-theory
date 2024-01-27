<template>
  <div>
    <div>ABOBA</div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, onUpdated} from "vue";

onMounted(()=> console.log('childCompSlot Mounted'))
onUpdated(()=> console.log('childCompSlot Updated'))
onUnmounted(()=> console.log('childCompSlot UnMounted'))
</script>