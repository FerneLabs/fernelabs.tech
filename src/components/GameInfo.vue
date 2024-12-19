<script setup lang="ts">
import IconGeneric from '@/components/IconGeneric.vue'

interface Props {
  id?: string
  name?: string
  description?: string[]
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
      class="w-[90vw] h-[90vw] md:w-[25vw] md:h-[25vw] aspect-square"
    />
    <div class="flex flex-col px-8 w-full">
      <div class="flex flex-col md:flex-row md:items-center">
        <h1 class="text-background my-2 md:my-0 mr-4">{{ props.name }}</h1>
        <div class="flex flex-row">
          <a
            v-for="social in props.socials"
            :key="social.name"
            :href="social.url"
            rel="noopener"
            target="_blank"
            class="mr-4 md:mx-2 w-fit transition ease-in-out hover:scale-110 duration-300"
          >
            <IconGeneric :type="social.name" :color="bgColor" class="w-8 h-8 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
      <div class="flex flex-col my-6 md:mb-4">
        <p v-for="paragraph in props.description" class="text-background my-1">{{ paragraph }}</p>
      </div>
      <p class="text-background">
        <span class="text-background underline">ecosystem:</span>
        {{ props.subtitle }}
      </p>
      <div v-show="props.platforms && props.platforms.length > 0" class="flex flex-col">
        <p class="text-background underline">available on:</p>
        <a
          v-for="platform in props.platforms"
          :key="platform.name"
          :href="platform.url"
          rel="noopener"
          target="_blank"
          class="mt-4 w-fit transition ease-in-out hover:scale-110 duration-300"
        >
          <IconGeneric :type="platform.name" :color="bgColor" class="w-10 h-10 md:w-8 md:h-8" />
        </a>
      </div>
      <div v-show="props.platforms && props.platforms.length == 0" class="flex flex-col">
        <p class="text-background">
          <span class="text-background underline">stage:</span>
          {{ props.status }}
        </p>
      </div>
    </div>
  </div>
</template>
