<template>
  <div
    class="m-auto w-full content-center rounded border-primary bg-neutral-800 py-3 text-center text-4xl text-white transition delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-primary"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";
</script>

<style scoped></style>
