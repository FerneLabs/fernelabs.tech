<script setup lang="ts">
import IconGeneric from '@/components/IconGeneric.vue'
import gamesJson from '../assets/games.json'
import { ref } from 'vue'
interface Props {
  id?: string
  name?: string
  description?: string
  subtitle?: string
  platforms?: { name: string; url: string }[]
  socials?: { name: string; url: string }[]
  assets?: string[]
  status?: string
}

const props = defineProps<Props>()

const bgColor = `rgba(${window.getComputedStyle(document.documentElement).getPropertyValue('--color-bg')}, 1)`
const getImgUrl = () => {
  const url = new URL(`../assets/cards/${props.id}.png`, import.meta.url)
  return url.href
}
</script>

<template>
  <div class="flex flex-col md:flex-row items-center w-full bg-black px-0 py-8 md:p-8">
    <img
      :src="getImgUrl()"
      :alt="`${props.name} cover picture`"
      class="w-[25vw] h-[25vw] aspect-square"
    />
    <div class="flex flex-col px-8">
      <div class="flex flex-row items-center">
        <h1 class="text-background my-0 mr-4">{{ props.name }}</h1>
        <a
          v-for="social in props.socials"
          :key="social.name"
          :href="social.url"
          rel="noopener"
          target="_blank"
          class="mx-2 w-fit transition ease-in-out hover:scale-110 duration-300"
        >
          <IconGeneric :type="social.name" :color="bgColor" height="24" width="24" />
        </a>
      </div>
      <p class="text-background mb-4">{{ props.description }}</p>
      <p class="text-background mb-4">ecosystem: {{ props.subtitle }}</p>
      <div v-show="props.platforms && props.platforms.length > 0">
        <p class="text-background">available on</p>
        <a
          v-for="platform in props.platforms"
          :key="platform.name"
          :href="platform.url"
          rel="noopener"
          target="_blank"
          class="mt-4 w-fit transition ease-in-out hover:scale-110 duration-300"
        >
          <IconGeneric :type="platform.name" :color="bgColor" />
        </a>
      </div>
    </div>
  </div>
</template>
