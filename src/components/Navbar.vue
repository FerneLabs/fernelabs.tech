<script>
import { ref } from 'vue'
import { defineComponent } from 'vue'
import gamesJson from '../assets/games.json'

export default defineComponent({
  setup() {
    const gamesHover = ref(false)
    const games = ref(gamesJson)

    const toggleHover = (state) => {
      gamesHover.value = state
    }

    // expose the ref to the template
    return {
      games,
      gamesHover,
      toggleHover,
    }
  },
})
</script>

<template>
  <nav class="flex flex-row justify-between items-center w-full h-32 px-10 sticky top-0 bg-bg z-10">
    <RouterLink to="/">
      <img alt="fernelabs logo" src="@/assets/logo.png" width="75" height="75" />
    </RouterLink>

    <div class="flex w-full h-full flex-row justify-end items-center relative gap-12 text-xl">
      <p
        @mouseenter="toggleHover(true)"
        @mouseleave="toggleHover(false)"
        class="relative cursor-pointer py-2"
      >
        games
      </p>

      <div
        v-show="gamesHover"
        class="absolute top-20 right-20 bg-white shadow-lg rounded p-4 flex flex-col bg-bg"
        @mouseenter="toggleHover(true)"
        @mouseleave="toggleHover(false)"
      >
        <RouterLink
          v-for="game in games"
          :to="`/game/${game.id}`"
          :key="game.id"
          class="hover:underline mb-2 last:mb-0 text-base"
        >
          {{ game.name }}
        </RouterLink>
      </div>

      <!-- <RouterLink to="/#about"> about </RouterLink> -->
      <a href="#about">about</a>
    </div>
  </nav>
</template>
