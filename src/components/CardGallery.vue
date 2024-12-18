<script setup lang="ts">
import Card from './Card.vue'
import gamesJson from '../assets/games.json'

interface Props {
  title: string
  status: string
}

const props = defineProps<Props>()

const games = gamesJson.filter((game) => game.status === props.status)
</script>

<template>
  <div class="flex flex-col w-full px-4 md:px-20 my-20">
    <h2>{{ title }}</h2>
    <div class="flex flex-col md:flex-row justify-center items-center mt-5">
      <Card
        v-for="game in games"
        :key="game.id"
        :gameId="game.id"
        :title="game.name"
        :subtitle="game.subtitle"
        imgHeight="200"
        imgWidth="200"
      />
    </div>
  </div>
</template>
