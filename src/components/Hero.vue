<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import heroGlosary from '../assets/hero-words.json'

const currentWord = ref('')
const displayedWord = ref('')
const animationDuration = 6000
const blankDuration = 1500
const charActionDuration = 125

const isInView = ref(false)
let animationInterval: number | null = null

function startAnimation() {
  if (!animationInterval) {
    // always start with first word
    currentWord.value = heroGlosary.words[0]
    startTypingEffect(currentWord.value)

    animationInterval = window.setInterval(() => {
      let newWord = heroGlosary.words[Math.floor(Math.random() * heroGlosary.words.length)]

      while (newWord === currentWord.value) {
        // avoid same word to be picked twice in a row
        newWord = heroGlosary.words[Math.floor(Math.random() * heroGlosary.words.length)]
      }

      currentWord.value = newWord
      startTypingEffect(newWord)
    }, animationDuration)
  }
}

function stopAnimation() {
  if (animationInterval) {
    clearInterval(animationInterval)
    animationInterval = null
  }
}

function startTypingEffect(word: string) {
  displayedWord.value = ''
  let index = 0

  const typingInterval = setInterval(() => {
    if (index < word.length) {
      displayedWord.value += word[index]
      index++
    } else {
      clearInterval(typingInterval)
      // wait for remaining seconds before starting the deleting effect
      // ((total interval - empty time) - (type + delete))
      setTimeout(
        () => startDeletingEffect(),
        animationDuration - blankDuration - charActionDuration * word.length * 2,
      )
    }
  }, charActionDuration)
}

function startDeletingEffect() {
  const deletingInterval = setInterval(() => {
    if (displayedWord.value.length > 0) {
      displayedWord.value = displayedWord.value.slice(0, -1)
    } else {
      clearInterval(deletingInterval)
    }
  }, charActionDuration)
}

onMounted(() => {
  // use observer to start/stop animation when not in viewport
  const observer = new IntersectionObserver(
    ([entry]) => {
      isInView.value = entry.isIntersecting
      if (isInView.value) {
        startAnimation()
      } else {
        stopAnimation()
      }
    },
    { threshold: 0.5 },
  )

  const targetElement = document.querySelector('.animated-section')
  if (targetElement) {
    observer.observe(targetElement)
  }
})

onUnmounted(() => {
  stopAnimation()
})
</script>

<template>
  <div class="flex w-full h-screen items-center justify-center animated-section">
    <h1>we make</h1>
    <h1 class="text-primary font-bold mt-12 ml-4">{{ displayedWord.slice(0, -1) }}</h1>
    <h1 class="text-primary font-bold mt-12 ml-0 min-h-11 min-w-4 animate-blockCaret">
      {{ displayedWord.slice(-1) }}
    </h1>
  </div>
</template>
