<script setup lang="ts">
import TelegramIcon from './icons/Telegram-icon.vue'
import GitHubIcon from './icons/GitHub-icon.vue'
import XIcon from './icons/X-icon.vue'
import LinkedInIcon from './icons/LinkedIn-icon.vue'

// const icons = {
//   telegram: TelegramIcon,
//   github: GitHubIcon,
//   x: XIcon,
//   linkedin: LinkedInIcon,
// }

interface Props {
  width?: string
  height?: string
  color?: string
  type: string
}

const { width = '32', height = '32', color = '#000', type } = defineProps<Props>()
</script>

<template>
  <!-- This causes type error when checking for icons[type], try to implement later -->
  <!-- <component :is="icons[type]" :width="width" :height="height" :color="color" /> -->

  <TelegramIcon v-if="type === 'telegram'" :width="width" :height="height" :color="color" />
  <GitHubIcon v-if="type === 'github'" :width="width" :height="height" :color="color" />
  <XIcon v-if="type === 'x'" :width="width" :height="height" :color="color" />
  <LinkedInIcon v-if="type === 'linkedin'" :width="width" :height="height" :color="color" />
</template>
