<template>
  <div class="item">
    <div>{{props.post.id}}</div>
    <h2>{{props.post.name}}</h2>
    <button @click="$emit('delete-item', props.post.id)">Удалить</button>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, onUpdated} from "vue";
 
 const props = defineProps(['post'])
 defineEmits(['delete-item'])
 onMounted(() => console.log(props.post.id, "Mounted" ))
 onUpdated(()=> console.log(props.post.id, "Update" ))
 onUnmounted(()=> console.log(props.post.id, "OnMounted" ))
</script>

<style  scoped>
.item {
  display: flex;
  justify-content: center;
}
</style>