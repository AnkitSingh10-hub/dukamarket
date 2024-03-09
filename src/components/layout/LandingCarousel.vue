<template>
  <section class="font-[Poppins] text-primary relative">
    <carousel
      :items-to-show="1"
      :touch-drag="true"
      :pause-autoplay-on-hover="true"
      :mouse-drag="true"
      :autoplay="6000"
      :wrap-around="true"
    >
      <slide v-for="slide in 4" :key="slide" class="w-[100vw]">
        <div
          :class="`'hotels-bg  h-[75vh] lg:h-[80vh] xl:h-[91vh] w-[100vw]  bg-no-repeat bg-cover bg-center' landing${slide} `"
        ></div>
      </slide>

      <template #addons>
        <navigation />
        <Pagination />
      </template>
    </carousel>
    <section class="absolute top-0 z-[2]">
      <div class="h-[80vh] lg:h-[91vh] w-[100vw] grid items-center">
        <article class="text-white z-[5] relative bottom-0">
          <p class="text-center font-semibold text-xl md:text-[24px] xl:text-[30px]">List your</p>
          <div class="w-fit mx-auto font-bold text-[30px] lg:text-[34px] xl:text-[40px]">
            [
            <TypingTextComponent />
            ]
          </div>
          <p class="font-semibold text-base md:text-lg xl:text-xl text-center">
            Manage your inventions like a pro & experience rapid business growth.
          </p>
          <aside
            class="text-xl lg:text-2xl xl:text-[26px] text-white font-bold py-3 cursor-pointer px-8 xl:px-[28px] xs:px-[50px] rounded-[50px] mt-6 mx-auto bg-primary-400 w-fit"
          >
            Enroll Now
          </aside>
        </article>
      </div>
    </section>
  </section>
</template>
<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import TypingTextComponent from './TypingTextComponent.vue'
</script>

<style scoped>
.text-primary {
  font-family: 'Poppins';
}
.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid black; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation:
    typing 10s steps(40, end) infinite,
    blink-caret 0.75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  45% {
    width: 100%;
  }

  50% {
    width: 100%;
  }
  95% {
    width: 0%;
  }
  100% {
    width: 0%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #ea2127;
  }
  100% {
    border-color: transparent;
  }
}
.landing1 {
  background-image: url(@/assets/landing/landing1.png);
}

.landing2 {
  background-image: url(@/assets/landing/landing2.png);
}
.landing3 {
  background-image: url(@/assets/landing/landing3.png);
}
.landing4 {
  background-image: url(@/assets/landing/landing4.png);
}
:deep(.carousel__prev) {
  z-index: 10;
  position: absolute;
  scale: 3;
  color: white;
  left: 5%;
}
:deep(.carousel__next) {
  z-index: 10;
  position: absolute;
  scale: 3;
  color: white;
  right: 5%;
}
:deep(.carousel__pagination-button--active::after) {
  background-color: #ea2127 !important;
}

:deep(.carousel__pagination-button:hover::after, .carousel__pagination-button--active::after) {
  background-color: #ea2127 !important;
}
:deep(.carousel__pagination-button::after) {
  background-color: #ffffff;
}
:deep(.carousel__pagination-button) {
  scale: 1.5;
}
:deep(.carousel__pagination) {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  gap: 16px;
}
@media screen and (max-width: 1280px) {
  :deep(.carousel__prev) {
    scale: 2.5;
    left: 4%;
  }
  :deep(.carousel__next) {
    scale: 2.5;
    right: 4%;
  }
}

@media screen and (max-width: 800px) {
  :deep(.carousel__prev) {
    scale: 2;
    left: 3%;
  }
  :deep(.carousel__next) {
    scale: 2;
    right: 3%;
  }
}
</style>
