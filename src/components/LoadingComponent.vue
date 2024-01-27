<template>
  <div>
    <p>Loading...</p>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, onUpdated} from "vue";

onMounted(()=> console.log('Loading Mounted'))
onUpdated(()=> console.log('Loading Updated'))
onUnmounted(()=> console.log('Loading UnMounted'))
</script>

<style lang="scss" scoped>

</style>