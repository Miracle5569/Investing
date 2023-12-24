<template>
  <li class="app-header__navigation-items app-header__navigation-items_dropdown_animate">
    <font-awesome-icon
      class="app-header__navigation-icon"
      icon="fa-solid fa-hand-holding-dollar"
    />Investing
    <dropDownList
      class="app-navigation__investing-dropwdown app-navigation__investing-dropwdown_animated app-header__navigation-items_dropdown_animate"
    >
      <template #investment-accounting>Investing account</template>
      <template #сharts-and-analytics>Charts and analytics</template>
    </dropDownList>
  </li>
</template>

<script setup>
import dropDownList from './dropDownList.vue'
</script>

<style scoped lang="scss">
.app-header__navigation-items {
  position: relative;
  &:hover .app-navigation__investing-dropwdown_animated {
    padding-top: 10px;
    text-align: center;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &_dropdown_animate {
    animation: growDown 300ms ease-in-out forwards;
    transform-origin: top center;
  }
}
.app-header__navigation-icon {
  margin-right: 10px;
}
.app-navigation__investing-dropwdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  perspective: 1000px;
  display: none;
  &_test {
    padding: 3px;
    &:hover {
      background-color: white;
      color: black;
      border-radius: 5px;
    }
  }
}

@keyframes growDown {
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
