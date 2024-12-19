<script setup lang="ts">
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import gamesJson from '../assets/games.json'
import TransitionGeneric from '@/components/TransitionGeneric.vue'
import GameInfo from '@/components/GameInfo.vue'
import GameGallery from '@/components/GameGallery.vue'
import NotFound from '@/components/NotFound.vue'
import Socials from '../components/Socials.vue'

const route = useRoute()
const id = ref(route.params.id)

const setGame = () => gamesJson.find((game) => game.id === id.value)
const game = ref()

onBeforeRouteUpdate((to) => {
  id.value = to.params.id
  game.value = setGame()
})

onMounted(() => {
  game.value = setGame()
  window.scrollTo(0, 0)
})
</script>

<template>
  <main>
    <TransitionGeneric type="opacityFromMin" duration="500">
      <div v-if="game ?? false" :key="game?.id" class="mt-32">
        <GameInfo
          :id="game?.id"
          :name="game?.name"
          :description="game?.description"
          :subtitle="game?.subtitle"
          :socials="game?.socials"
          :platforms="game?.platforms"
          :status="game?.status"
        />
        <GameGallery :id="game?.id" :assets="game?.assets" />
      </div>
    </TransitionGeneric>
    <NotFound v-if="!game" />
    <Socials />
  </main>
</template>
