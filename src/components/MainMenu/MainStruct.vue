<template>
  <main class="app-main">
    <div class="app-main__container _container">
      <section class="app-main__greetings">
        <h1 class="app-main__greetings-copyright">
          <span
            class="app-main__greetings-copyright-text"
            :class="{ 'app-main__greetings-copyright-text_visible': char !== ' ' }"
            v-for="(char, index) in text"
            :key="index"
          >
            {{ char }}
          </span>
        </h1>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// ---------------- Инициализация бегущей строки ---------------------
const message = 'Invest with us, get rich and make your dreams come true.'
const text = ref('')
let index = 0

const typeText = () => {
  if (index < message.length) {
    text.value += message.charAt(index)
    index++
    setTimeout(typeText, 50)
  }
}

onMounted(() => {
  typeText()
})
// ---------------- Конец инициализации бегущей строки ---------------------
</script>

<style scoped lang="scss">
.app-main {
  &__greetings {
    display: flex;
    justify-content: center;
    margin-top: 50px;

    &-copyright {
      font-size: 3em;
      text-transform: uppercase;
      width: 950px;
      text-align: center;
      letter-spacing: 0.4rem;
      line-height: 4.5rem;

      &-text {
        opacity: 0;
        &_visible {
          opacity: 1;
          transition: opacity 0.5s;
        }
      }
    }
  }
}
</style>
