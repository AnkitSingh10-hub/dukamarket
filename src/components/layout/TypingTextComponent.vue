<template>
  <span
    class="typing-text mx-auto inline text-white whitespace-nowrap overflow-hidden border-r-[0.15em] border-gray-800 animate-typing"
  >
    {{ typingText }}
  </span>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const texts = ref(['Hotels', 'Activities', 'Experiences', 'Packages'])
let index = ref(0)
let isDeleting = ref(false)
const typingText = ref('')

const type = () => {
  const currentText = texts.value[index.value]
  const typingTextElement = typingText.value

  if (isDeleting.value) {
    typingText.value = currentText.substring(0, typingTextElement.length - 1)
  } else {
    typingText.value = currentText.substring(0, typingTextElement.length + 1)
  }

  let typingSpeed = 100

  if (isDeleting.value) {
    typingSpeed /= 2
  }

  if (!isDeleting.value && typingTextElement === currentText) {
    isDeleting.value = true
    typingSpeed = 800 // Pause at the end of the word
  } else if (isDeleting.value && typingTextElement === '') {
    isDeleting.value = false
    index.value = (index.value + 1) % texts.value.length
    typingSpeed = 500 // Pause at the start of the next word
  }

  setTimeout(type, typingSpeed)
}

onMounted(() => {
  setTimeout(type, 1000) // Initial pause before starting the animation
})
</script>

<style>
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #ea2127;
  }
}

.animate-typing {
  animation:
    typing 2s cubic-bezier(0.5, 0, 0.5, 1),
    blink-caret 0.5s step-end infinite;
}
</style>
