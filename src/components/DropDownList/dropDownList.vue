<template>
  <!-- Стили передавать из родителя -->
  <ul>
    <li class="app-navigation__investing-dropwdown_item">
      <slot name="investment-accounting"></slot>
    </li>
    <li class="app-navigation__investing-dropwdown_item">
      <slot name="сharts-and-analytics"></slot>
    </li>
  </ul>
</template>

<script setup></script>

<style scoped lang="scss">
.app-navigation__investing-dropwdown_item {
  padding: 3px;
  font-size: 18px;
  &:hover {
    background-color: white;
    color: black;
    border-radius: 5px;
    text-decoration: underline;
  }
}
</style>
