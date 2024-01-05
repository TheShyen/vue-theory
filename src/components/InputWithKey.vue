<script setup>
import {onMounted, onUnmounted, onUpdated, ref} from 'vue'

const props = defineProps(['number','modelValue'])
defineEmits(['update:modelValue'])

const msg = ref('')
console.log(props.number,'created(key)')
onMounted(()=>{
  console.log(props.number,'Инпут(key) зарендерился')
})
onUpdated(()=> console.log(props.number,'Update(key)'))
onUnmounted(()=>console.log(props.number,'Размонтирвание инпута(key)'))
</script>

<template>
  <div>
    <slot></slot>
    <h1>{{ props.modelValue }}</h1>
    <input :value="props.modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
  </div>
</template>