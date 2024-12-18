<script lang="ts">
import { ref } from 'vue'
import words from '../assets/hero-words.json'

export default {
  setup() {
    const current = words[0].word
    return {
      current,
    }
  },
}
</script>

<template>
  <div class="flex w-full h-screen items-center justify-center">
    <h1>we make</h1>
    <h1 class="text-primary font-bold mt-10 ml-4">{{ current }}</h1>
  </div>
</template>
