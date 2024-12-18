<script lang="ts">
import partnersJson from '../assets/partners.json'

export default {
  setup() {
    const partners = partnersJson

    const getImgUrl = (id: string) => {
      const url = new URL(`../assets/cards/${id}.png`, import.meta.url)
      return url.href
    }

    const openLink = (url: string) => {
      open(url)
    }

    return {
      partners,
      getImgUrl,
      openLink,
    }
  },
}
</script>

<template>
  <div class="flex flex-col w-full px-20 my-10">
    <h2>powered by</h2>
    <div class="flex flex-row justify-center items-center mt-10">
      <a
        v-for="partner in partners"
        :key="partner.name"
        :href="partner.redirectUrl"
        target="_blank"
        rel="noopener"
        class="mx-8 transition ease-in-out hover:scale-110 duration-300"
      >
        <img
          :src="getImgUrl(partner.name)"
          :alt="`${partner.name} logo`"
          height="200"
          width="200"
        />
      </a>
    </div>
  </div>
</template>
