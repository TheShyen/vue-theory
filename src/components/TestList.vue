<script setup>
import { ref } from 'vue'

const props = defineProps(['testProp1', 'testProp2'])

const items = ref([
  { body: 'ABOBA', username: 'TheShy', age: 20 },
  { body: 'Vue top', username: 'Kostya', age: 18 }
])

</script>

<template>
  <ul>
    <li v-for="item in items">
      <div>{{testProp1}}{{testProp2}}</div>
      <slot name="item" v-bind="item"/>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 5px;
  background: blue;
}
li {
  padding: 5px 20px;
  margin: 10px;
  background: #4f3333;
}
</style>