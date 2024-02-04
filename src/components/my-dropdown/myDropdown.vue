<template>
  <div class="dropdown" :ref="(el) => { dropdownElem = el }">
    <div @click="toggleDropdown">
      <slot></slot>
    </div>
    <transition name="fade">
      <ul v-if="isOpen" class="dropdown-menu">
        <li v-for="option in options">
          <a href="#">
            {{option}}
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
defineProps(['options'])
const isOpen = ref(false);
const dropdownElem = ref(null)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

const handleClickOutside = (event) => {
  if (dropdownElem.value && !dropdownElem.value.contains(event.target)) {
    closeDropdown();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}



.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 100%;
}
li {
  padding: 10px;
  border-bottom: 1px solid #eee;
  &:hover {
    background: #cdd2d9;
    transition: 0.5s all;
  }
}
a {
  text-decoration: none;
  color: #333;
  display: block;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
