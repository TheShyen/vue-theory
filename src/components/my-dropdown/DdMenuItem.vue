<template>
  <li>
    <a href="#">
      <slot></slot>
    </a>
  </li>
</template>

<script setup>

</script>

<style scoped >
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
</style>