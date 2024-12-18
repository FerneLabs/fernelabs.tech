<script setup lang="ts">
import PartnerCard from './PartnerCard.vue'

import partnersJson from '../assets/partners.json'
const partners = partnersJson
</script>

<template>
  <div class="flex flex-col w-full px-4 md:px-20 my-10">
    <h2>powered by</h2>
    <div class="flex flex-col md:flex-row justify-center items-center mt-10">
      <PartnerCard
        v-for="partner in partners"
        :key="partner.name"
        :redirectUrl="partner.redirectUrl"
        :name="partner.name"
        class="mx-8 transition ease-in-out hover:scale-110 duration-300"
      />
    </div>
  </div>
</template>
