<script setup>
import {onUpdated, ref} from 'vue'

const props = defineProps(['testProp1', 'testProp2'])

const items = ref([
  { body: 'ABOBA', username: 'TheShy', age: 20 },
  { body: 'Vue top', username: 'Kostya', age: 18 }
])
const message = ref('Theshy')
onUpdated(()=> console.log('TestList Updated'))
</script>

<template>
  <p>{{ message }}</p>
  <button @click="message = message + 'обновлено'">Обновить сообщение</button>
  <ul>
    <li v-for="item in items">
      <div>{{testProp1}} ||| {{testProp2}}</div>
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