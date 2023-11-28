<template>
  <li class="app-header__navigation-items">
    <font-awesome-icon
      class="app-header__navigation-icon"
      icon="fa-solid fa-hand-holding-dollar"
    />Investing
    <div class="app-navigation__investing-dropwdown"></div>
  </li>
</template>

<script setup></script>

<style scoped lang="scss">
.app-header__navigation-items {
  position: relative;
}
.app-header__navigation-icon {
  margin-right: 10px;
}
.app-navigation__investing-dropwdown {
  background-color: white;
  position: absolute;
  width: 100%;
  height: 100px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
