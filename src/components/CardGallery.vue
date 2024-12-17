<script lang="ts">
import { defineComponent } from 'vue'
import Card from './Card.vue'
import gamesJson from '../assets/games.json'

export default defineComponent({
  props: {
    title: String,
    status: String,
  },
  components: {
    Card,
  },
  setup(props) {
    const games = gamesJson.filter((game) => game.status === props.status)

    return {
      games,
      props,
    }
  },
})
</script>

<template>
  <div class="flex flex-col w-full px-20 my-10">
    <h2>{{ title }}</h2>
    <div class="flex flex-row justify-center items-center mt-10">
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
