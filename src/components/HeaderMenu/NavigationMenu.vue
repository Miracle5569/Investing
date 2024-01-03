<template>
  <ul class="app-header__navigation">
    <InvestingDropList />
    <li class="app-header__navigation-items">
      <font-awesome-icon class="app-header__navigation-icon" icon="fa-solid fa-book-open" />Curse
    </li>
    <li class="app-header__navigation-items">
      <font-awesome-icon class="app-header__navigation-icon" icon="fa-solid fa-question" />Who are
      we
    </li>
    <li class="app-header__navigation-items">
      <font-awesome-icon class="app-header__navigation-icon" icon="fa-solid fa-user-tie" />Profile
    </li>
  </ul>
</template>

<script setup>
import InvestingDropList from '../DropDownList/InvestingDropList.vue'
</script>

<style scoped lang="scss">
.app-header__navigation {
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
</style>
