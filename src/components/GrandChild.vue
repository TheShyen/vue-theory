<script setup>
import {inject, onMounted} from 'vue'
import { onActivated, onDeactivated } from 'vue'

onActivated(() => {
  console.log('GC onActivated')
})

onDeactivated(() => {
  console.log('GC хук onDeactivated')
})
const message = inject('message')

onMounted(() => {
  console.log('GC Mounted')
})

</script>

<template>
  <p>
    Сообщение {{ message }}
  </p>
</template>