<script setup>
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
        <ul class="app-header__navigation">
          <li class="app-header__navigation-items">
            <font-awesome-icon
              class="app-header__navigation-icon"
              icon="fa-solid fa-hand-holding-dollar"
            />Investing
          </li>
          <li class="app-header__navigation-items">
            <font-awesome-icon
              class="app-header__navigation-icon"
              icon="fa-solid fa-book-open"
            />Curse
          </li>
          <li class="app-header__navigation-items">
            <font-awesome-icon class="app-header__navigation-icon" icon="fa-solid fa-question" />Who
            are we
          </li>
          <li class="app-header__navigation-items">
            <font-awesome-icon
              class="app-header__navigation-icon"
              icon="fa-solid fa-user-tie"
            />Profile
          </li>
        </ul>
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
  &__navigation {
    display: flex;
    justify-content: space-between;
    width: 550px;

    &-items {
      font-size: 20px;
      &:hover {
        cursor: pointer;
        &:not(:first-child) {
          transform: rotate(-5deg);
          margin-top: 5px;
        }
      }
    }

    &-icon {
      margin-right: 10px;
    }
  }
}
</style>
