<script setup>
import {onMounted, onUnmounted, onUpdated, ref} from 'vue'

const props = defineProps(['number','modelValue'])
defineEmits(['update:modelValue'])

const msg = ref('')
console.log(props.number,'created')
onMounted(()=>{
  console.log(props.number,'Инпут зарендерился')
})
onUpdated(()=> console.log(props.number,'Update'))
onUnmounted(()=>console.log(props.number,'Размонтирвание инпута'))
</script>

<template>
  <div>
    <slot></slot>
    <h1>{{ props.modelValue }}</h1>
    <input :value="props.modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
  </div>
</template>