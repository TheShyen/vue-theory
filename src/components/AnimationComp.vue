<script setup>
import { shallowRef } from 'vue'
import GrandChild from "./GrandChild.vue";
import ChildComponentSlot from "./ChildComponentSlot.vue";
const activeComponent = shallowRef(GrandChild)
</script>

<template>
  <label>
    <input type="radio" v-model="activeComponent" :value="GrandChild"> GrandChild
  </label>
  <label>
    <input type="radio" v-model="activeComponent" :value="ChildComponentSlot"> GrandChild
  </label>
  <Transition name="fade" mode="out-in">
    <KeepAlive>
      <component :is="activeComponent"></component>
    </KeepAlive>
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>