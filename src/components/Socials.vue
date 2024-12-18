<script setup lang="ts">
import GitHubIcon from './icons/GitHub-icon.vue'
import LinkedInIcon from './icons/LinkedIn-icon.vue'
import XIcon from './icons/X-icon.vue'

const colorValue = `rgba(${window.getComputedStyle(document.documentElement).getPropertyValue('--color-text')}, 1)`
</script>

<template>
  <div class="flex flex-row justify-center items-center w-full py-10 px-40 mt-20 mb-10 md:mt-40">
    <a
      href="https://github.com/fernelabs"
      target="_blank"
      rel="noopener"
      class="mx-8 transition ease-in-out hover:scale-125 duration-300"
    >
      <GitHubIcon :color="colorValue" />
    </a>
    <a
      href="https://linkedin.com/company/fernelabs"
      target="_blank"
      rel="noopener"
      class="mx-8 transition ease-in-out hover:scale-125 duration-300"
    >
      <LinkedInIcon :color="colorValue" />
    </a>
    <a
      href="https://x.com/fernelabs"
      target="_blank"
      rel="noopener"
      class="mx-8 transition ease-in-out hover:scale-125 duration-300"
    >
      <XIcon :color="colorValue" />
    </a>
  </div>
</template>
