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
  <div :class="`flex flex-col mx-8 max-w-[${imgWidth}px]`">
    <img :src="getImgUrl()" :height="imgHeight" :width="imgWidth" />
    <h3>{{ title }}</h3>
    <p class="text-xs tracking-tighter opacity-60">{{ subtitle }}</p>
  </div>
</template>
