<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String,
    subtitle: String,
    gameId: String,
    imgHeight: String,
    imgWidth: String,
  },

  setup(props) {
    const getImgUrl = () => {
      const url = new URL(`../assets/cards/${props.gameId}.png`, import.meta.url)
      return url.href
    }

    return {
      getImgUrl,
    }
  },
})
</script>

<template>
  <RouterLink
    :to="`/game/${gameId}`"
    :class="`flex flex-col mx-8 max-w-[${imgWidth}px] p-4 cursor-pointer transition ease-in-out hover:scale-110 hover:shadow-xl duration-300`"
  >
    <img :src="getImgUrl()" :height="imgHeight" :width="imgWidth" />
    <h3>{{ title }}</h3>
    <p class="text-xs tracking-tighter opacity-60">{{ subtitle }}</p>
  </RouterLink>
</template>
