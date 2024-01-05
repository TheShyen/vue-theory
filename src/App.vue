<script setup>
import {onMounted, reactive, ref, watch} from 'vue'
import Input from "./components/Input.vue";
import Wrapper from "./components/Wrapper.vue";
import WrapperWithKey from "./components/WrapperWithKey.vue";
import Item from "./components/Item.vue";
const posts = ref([])
const posts1 = ref([])
onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => posts.value = json)
    
})


const title = ref('v-model argument example')
const obj = reactive({click: createObj})
const activeList = ref(true)
watch(() => obj.click, () => {
  console.log('watcher')
}, {immediate: true})
function createObj() {
  console.log(obj)
  delete obj.click
}

function handleDeleteItem(id) {
 posts.value.splice(posts.value.findIndex(item => item.id === id), 1)
}
</script>

<template>
  <h1>{{ title }}</h1>
  <input
    type="text"
    v-model="title"
  />
  <button v-on="obj">fff</button>
  
  <h1>Инпуты с v-if без key</h1>
  <Wrapper/>
  
  <h1>Инпуты с v-if c key</h1>
  <WrapperWithKey/>
  
  <button @click="activeList = !activeList" style="margin-top: 25px">Переключить листы</button>
  <div v-if="activeList">
    <h1>V-FOR</h1>
    <div>
      <Item v-for="post in posts" :post="post" @delete-item="handleDeleteItem"/>
    </div>
  </div>
  
  <div v-else>
    <h1>V-FOR with KEY</h1>
    <div>
      <Item v-for="post in posts" :post="post" :key="post.id" @delete-item="handleDeleteItem"/>
    </div>
  </div>
</template>