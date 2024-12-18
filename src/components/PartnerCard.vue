<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  name: string
  redirectUrl: string
  height?: string
  width?: string
}

const hover = ref(false)
const setHover = (state: boolean) => {
  hover.value = state
}

const getImgUrl = (id: string) => {
  const url = new URL(`../assets/cards/${id}.png`, import.meta.url)
  return url.href
}

const { name, redirectUrl, height = '200', width = '200' } = defineProps<Props>()
</script>

<template>
  <div @mouseenter="setHover(true)" @mouseleave="setHover(false)" class="relative">
    <img :src="getImgUrl(name)" :alt="`${name} logo`" :height="height" :width="width" />
    <transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="hover"
        class="absolute top-0 flex flex-col justify-center items-center w-full bg-backdrop90 h-full"
      >
        <p class="text-xl text-bg cursor-default">{{ name.replace('-', ' ') }}</p>
        <a
          class="link-highlight text-bg hover:text-text"
          :href="redirectUrl"
          target="_blank"
          rel="noopener"
          >see more</a
        >
      </div>
    </transition>
  </div>
</template>
