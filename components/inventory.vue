<template>
  <!-- Button -->
  <div
    class="absolute top-8 right-8 cursor-pointer rounded-lg border-4 border-neutral-900 bg-neutral-800 p-4"
    @click="show_modal = true"
  >
    <img src="~/assets/img/bag.png" class="aspect-square w-16" />
  </div>

  <!-- Modal -->
  <div
    class="absolute inset-0 z-50 grid place-items-center bg-black bg-opacity-60 p-4"
    v-show="show_modal"
  >
    <div
      class="flex h-2/3 w-full max-w-5xl items-center overflow-clip rounded-xl bg-neutral-800"
    >
      <div class="grid h-full w-7/12 grid-cols-6 gap-4 p-4">
        <Item v-for="i in new Array(9)" />
      </div>
      <div class="h-full w-5/12 bg-neutral-900"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const show_modal = ref(false);
</script>

<style scoped></style>
