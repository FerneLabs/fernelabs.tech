<script setup lang="ts">
import Hero from '../components/Hero.vue'
import CardGallery from '../components/CardGallery.vue'
import About from '../components/About.vue'
import Partners from '../components/Partners.vue'
import Socials from '../components/Socials.vue'
</script>

<template>
  <main>
    <Hero />
    <CardGallery title="built by us" status="production" />
    <CardGallery title="work in progress" status="development" />
    <About />
    <Partners />
    <Socials />
  </main>
</template>
