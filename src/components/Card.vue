<script setup lang="ts">
interface Props {
  title: string
  subtitle: string
  gameId: string
  imgHeight?: string
  imgWidth?: string
}
const { title, subtitle, gameId, imgHeight = '200', imgWidth = '200' } = defineProps<Props>()

const transitionClass = 'transition ease-in-out hover:scale-110 hover:shadow-xl duration-300'

const getImgUrl = () => {
  const url = new URL(`../assets/cards/${gameId}.png`, import.meta.url)
  return url.href
}
</script>

<template>
  <RouterLink
    :to="`/game/${gameId}`"
    :class="`flex flex-col mx-8 p-4 w-full md:w-1/3 lg:w-1/4 xl:w-1/5 cursor-pointer ${transitionClass}`"
  >
    <img :src="getImgUrl()" class="w-full h-full" />
    <h3 class="text-xl mt-2 md:text-base">{{ title }}</h3>
    <p class="text-base md:text-xs tracking-tighter opacity-60">{{ subtitle }}</p>
  </RouterLink>
</template>
