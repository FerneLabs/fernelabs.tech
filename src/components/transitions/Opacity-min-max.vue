<script setup lang="ts">
interface Props {
  duration: string
  min: string
  max: string
}

const { duration, min, max } = defineProps<Props>()
</script>

<template>
  <transition
    :enter-active-class="`transition-opacity duration-${duration}`"
    :leave-active-class="`transition-opacity duration-${duration}`"
    :enter-from-class="`opacity-${min}`"
    :enter-to-class="`opacity-${max}`"
    :leave-from-class="`opacity-${max}`"
    :leave-to-class="`opacity-${min}`"
  >
    <slot />
  </transition>
</template>
