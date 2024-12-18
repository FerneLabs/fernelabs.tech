<script setup lang="ts">
import { ref } from 'vue'
import gamesJson from '../assets/games.json'

const gamesOpen = ref(false)
const games = ref(gamesJson)

const gotoTop = () => window.location.pathname === '/' && window.scrollTo(0, 0)

const setOpen = (state: boolean) => {
  gamesOpen.value = state
}
</script>

<template>
  <nav class="flex flex-row justify-between items-center w-full h-32 px-10 sticky top-0 bg-bg z-10">
    <RouterLink to="/" @click="gotoTop()">
      <img alt="fernelabs logo" src="@/assets/logo.png" class="w-24" />
    </RouterLink>

    <div
      class="flex w-full h-full flex-row justify-end items-center relative gap-12 text-2xl md:text-xl"
    >
      <p
        @mouseenter="setOpen(true)"
        @mouseleave="setOpen(false)"
        class="relative cursor-pointer py-2"
      >
        games
      </p>

      <transition
        enter-active-class="transition-opacity duration-300"
        leave-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-show="gamesOpen"
          class="absolute top-20 right-20 bg-white shadow-lg rounded p-4 flex flex-col bg-bg w-[50vw] md:w-fit"
          @mouseenter="setOpen(true)"
          @mouseleave="setOpen(false)"
        >
          <RouterLink
            v-for="game in games"
            :to="`/game/${game.id}`"
            :key="game.id"
            class="cursor-pointermb-2 last:mb-0 text-xl my-2 md:my-0 md:text-base hover:underline"
            @click="setOpen(false)"
          >
            {{ game.name }}
          </RouterLink>
        </div>
      </transition>

      <!-- <RouterLink to="/#about"> about </RouterLink> -->
      <a href="#about">about</a>
    </div>
  </nav>
</template>
