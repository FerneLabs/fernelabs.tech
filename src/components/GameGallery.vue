<script setup lang="ts">
import { ref } from 'vue'
import TransitionGeneric from '@/components/TransitionGeneric.vue'

interface Props {
  id?: string
  assets?: string[]
}

const { id, assets } = defineProps<Props>()
const previewImg = ref('')

const getGalleryImgUrl = (asset: string) => {
  const url = new URL(`../assets/galleries/${id}/${asset}`, import.meta.url)
  return url.href
}

const maximizeImg = (asset: string) => {
  const url = new URL(`../assets/galleries/${id}/${asset}`, import.meta.url)
  previewImg.value = url.href
}
</script>

<template>
  <div v-show="assets && assets.length > 0" class="flex flex-col p-4 md:p-8">
    <h1>gallery</h1>
    <div class="flex flex-col md:flex-row justify-center items-center w-full">
      <img
        v-for="asset in assets"
        :key="asset"
        :src="getGalleryImgUrl(asset)"
        :alt="`${asset} image`"
        class="w-3/4 md:w-1/4 lg:w-1/5 xl:w-1/6 my-2 mx-2 cursor-pointer transition ease-in-out hover:scale-110 duration-300"
        @click="maximizeImg(asset)"
      />
    </div>
  </div>
  <TransitionGeneric type="opacityFromMin" duration="500">
    <div
      v-show="previewImg !== ''"
      class="fixed top-0 left-0 w-screen h-screen bg-black/75 z-50 flex flex-row justify-center items-center"
      @click="previewImg = ''"
    >
      <img
        alt="preview image"
        :src="previewImg"
        class="p-10 md:p-0 md:ml-12 md:h-[90vh] aspect-[9/16]"
      />
    </div>
  </TransitionGeneric>
</template>
