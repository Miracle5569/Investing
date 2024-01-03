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
      <section class="app-main__success" :class="{ 'app-main__success_visible': visibleVideo }">
        <video
          class="app-main__success-video"
          ref="myVideo"
          width="640"
          height="360"
          autoplay
          muted
          @ended="restartVideo"
        >
          <source
            src="/src/assets/movies/pexels-tima-miroshnichenko-6266432 (2160p).mp4"
            type="video/mp4"
          />
          Ваш браузер не поддерживает тег video.
        </video>
        <p class="app-main__success-money">
          Do you want to have as much money as this brother? Then follow us...
        </p>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// ---------------- Инициализация бегущей строки ---------------------
const message = 'Invest with us, get rich and make your dreams come true.'
const text = ref('')
const visibleVideo = ref(false)
let index = 0

const typeText = () => {
  if (index < message.length) {
    text.value += message.charAt(index)
    index++
    setTimeout(typeText, 50)
  }
  if (index === message.length) {
    visibleVideo.value = true
  }
}

const myVideo = ref(null)

const restartVideo = () => {
  if (myVideo.value) {
    myVideo.value.play()
  }
}

onMounted(() => {
  typeText()
})
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

  &__success {
    display: none;
    align-items: center;

    &-video {
      border-radius: 10px;
      animation: buttomTop 1s ease-in-out;
    }

    &_visible {
      display: block;
    }
  }
}

@keyframes buttomTop {
  0% {
    opacity: 0;
    transform: translate(-100px);
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
</style>
