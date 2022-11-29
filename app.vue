<template>
  <div class="flex flex-col items-center gap-5 text-center">
    <VueFeather type="box" size="128" />
    <h1 class="font-mono text-5xl font-bold uppercase">Vue Template</h1>
    <p>The start of a new project !</p>

    <hr class="border-1 border-gray-300 w-full" />

    <div class="flex flex-col gap-2">
      <p>Current configuration: <b>Nuxt</b> + <b>Pocketbase</b></p>
      <p>Additionnal plugins: <b>Tailwind-CSS</b> + <b>Feather-Icons</b></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";
</script>

<style>
#__nuxt {
  @apply grid place-items-center;
}

b {
  @apply font-mono text-blue-500;
}
</style>
