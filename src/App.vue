<script setup>
import {onMounted, onUpdated, reactive, ref, watch} from 'vue'
import Input from "./components/Input.vue";
import Wrapper from "./components/Wrapper.vue";
import WrapperWithKey from "./components/WrapperWithKey.vue";
import Item from "./components/Item.vue";
import ParrentForSlot from "./components/ParrentForSlot.vue";
import TestList from "./components/TestList.vue";
import ProvideTest from "./components/ProvideTest.vue";
import {useMouse} from "./composables/useMouse.js";
import MyDropdown from "./components/my-dropdown/myDropdown.vue";
import DdMenuItem from "./components/my-dropdown/DdMenuItem.vue";
import ChildComponentSlot from "./components/ChildComponentSlot.vue";
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
const key1 = ref('123')
function handleDeleteItem(id) {
 posts.value.splice(posts.value.findIndex(item => item.id === id), 1)
}
const compModif = ref(10)
const { x, y } = useMouse(compModif.value)

watch(compModif, () => {
  console.log(compModif.value)
})
</script>

<template>
  <my-dropdown>
    <dd-menu-item>Первый</dd-menu-item>
    <dd-menu-item>2</dd-menu-item>
    <dd-menu-item>3</dd-menu-item>
  </my-dropdown>
  
  
  <TestList testProp1="aaaaaaaa" :test-prop2="10">
    
    <template #item="item">
      <input
        type="text"
        v-model="title"
      />
      <div class="item">
        <p>{{ item.body }}</p>
        <p>{{ item.username }} | {{ item.age }} years</p>
        <child-component-slot/>
      </div>
    </template>
  </TestList>
  
  <h1>Provide/inject</h1>
  <ProvideTest/>
  
  <h1 v-color="'#b9de34'" :key="'Aboba'">Composables</h1>
  <div>Mouse position is at: {{ x }}, {{ y }}</div>
  <button @click="compModif = compModif + 1">Плюс</button>
  <button @click="compModif = compModif - 1">Минус</button>
<!--  -->
<!--  <h1>Инпуты с v-if без key</h1>-->
<!--  <Wrapper/>-->
<!--  -->
<!--  <h1>Инпуты с v-if c key</h1>-->
<!--  <WrapperWithKey/>-->
<!--  -->
<!--  <button @click="activeList = !activeList" style="margin-top: 25px">Переключить листы</button>-->
<!--  <div v-if="activeList">-->
<!--    <h1>V-FOR</h1>-->
<!--    <div>-->
<!--      <Item v-for="post in posts" :post="post" @delete-item="handleDeleteItem"/>-->
<!--    </div>-->
<!--  </div>-->
<!--  -->
<!--  <div v-else>-->
<!--    <h1>V-FOR with KEY</h1>-->
<!--    <div>-->
<!--      <Item v-for="post in posts" :post="post" :key="post.id" @delete-item="handleDeleteItem"/>-->
<!--    </div>-->
<!--  </div>-->
</template>