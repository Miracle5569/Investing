<script setup>
import NavigationMenu from './components/NavigationMenu.vue'

// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <header class="app-header">
      <div class="app-header__container _container">
        <div class="app-header__logo">
          <img
            class="app-header__logo-image"
            src="/src/assets/images/investing.com.png"
            alt="logo"
          />
        </div>
        <NavigationMenu />
      </div>
    </header>
  </div>
</template>

<style scoped lang="scss">
.app-header {
  &__container {
    padding-top: 10px;
    max-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    position: relative;
    width: 50px;
    height: 50px;

    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }
}
</style>
