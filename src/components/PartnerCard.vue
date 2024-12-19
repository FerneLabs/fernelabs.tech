<script setup lang="ts">
import { ref } from 'vue'
import TransitionGeneric from './TransitionGeneric.vue'

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
  <div @mouseenter="setHover(true)" @mouseleave="setHover(false)" class="relative my-2">
    <img :src="getImgUrl(name)" :alt="`${name} logo`" :height="height" :width="width" />
    <TransitionGeneric type="opacityFromMin" duration="300">
      <div
        v-show="hover"
        class="absolute top-0 flex flex-col justify-center items-center w-full bg-backdrop90 h-full"
      >
        <p class="text-xl text-background cursor-default">{{ name.replace('-', ' ') }}</p>
        <a
          class="link-highlight text-background hover:text-text"
          :href="redirectUrl"
          target="_blank"
          rel="noopener"
          >see more</a
        >
      </div>
    </TransitionGeneric>
  </div>
</template>
