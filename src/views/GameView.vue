<script setup lang="ts">
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { ref } from 'vue'
import gamesJson from '../assets/games.json'
import IconGeneric from '@/components/IconGeneric.vue'

const route = useRoute()
const id = ref(route.params.id)

const setGame = () => gamesJson.find((game) => game.id === id.value)
const game = ref(setGame())

const getImgUrl = () => {
  console.log(id.value)
  const url = new URL(`../assets/cards/${id.value}.png`, import.meta.url)
  return url.href
}

onBeforeRouteUpdate((to) => {
  id.value = to.params.id
  game.value = setGame()
})
</script>

<template>
  <main>
    <div v-show="game ?? false" class="mt-32">
      <div class="flex flex-row w-full bg-black p-8">
        <img :src="getImgUrl()" :alt="`${game?.name} cover picture`" class="w-1/4" />
        <div class="flex flex-col px-8">
          <h1 class="text-background">{{ game?.name }}</h1>
          <p class="text-background">{{ game?.description }}</p>
          <p class="text-background">
            available on
            <a :href="game?.demoLink" rel="noopener" target="_blank">
              <IconGeneric
                v-for="platform in game?.platforms"
                :key="platform"
                :type="platform"
                color="#fff"
              />
            </a>
          </p>
        </div>
      </div>
      <div class="flex flex-col p-8">
        <h1>gallery</h1>
        <div class="flex flex-row justify-center items-center w-full">
          <img src="@/assets/logo.png" alt="" class="w-1/4" />
          <img src="@/assets/logo.png" alt="" class="w-1/4" />
          <img src="@/assets/logo.png" alt="" class="w-1/4" />
        </div>
      </div>
    </div>
    <div v-show="!game" class="flex flex-col w-full h-screen justify-center items-center">
      <h1>404</h1>
      <h2>page not found</h2>
      <RouterLink to="/" class="link-highlight">back to main page</RouterLink>
    </div>
  </main>
</template>
