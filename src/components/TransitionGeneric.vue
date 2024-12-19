<script setup lang="ts">
import OpacityMinMax from './transitions/Opacity-min-max.vue'

const transitions = {
  opacityFromMin: OpacityMinMax,
}

interface Props {
  duration?: string
  min?: string
  max?: string
  type: string
}

const { duration = '300', min = '0', max = '100', type } = defineProps<Props>()
</script>

<template>
  <component :is="transitions[type]" :duration="duration" :min="min" :max="max">
    <slot />
  </component>
</template>
