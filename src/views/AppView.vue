<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

const route = useRoute()
const id = ref(route.params.id)

onBeforeRouteUpdate((to) => {
  id.value = to.params.id
})
</script>

<template>
  <main>
    <iframe
      :src="`/embedded/${id}/index.html`"
      frameborder="0"
      class="h-screen w-screen bg-background absolute z-20"
    />
  </main>
</template>
