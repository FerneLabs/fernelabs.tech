<script lang="ts">
import { ref } from 'vue'
import phrasesJson from '../assets/hero-sentences.json'

export default {
  setup() {
    const current = phrasesJson[0].phrase
    return {
      current,
    }
  },
}
</script>

<template>
  <div class="flex w-full h-[50vh] items-center justify-center">
    <h1>{{ current }}</h1>
  </div>
</template>
