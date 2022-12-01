<template>
  <!-- bg -->
  <div class="custom-bg h-full w-full"></div>

  <!-- bar -->
  <div
    class="absolute inset-x-0 bottom-0 z-50 h-60 border-t-8 border-t-neutral-300 bg-black bg-opacity-60"
  ></div>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";
</script>

<style>
.custom-bg {
  @apply bg-cover bg-center bg-no-repeat;
  background-image: url("~/assets/bg.jpeg");
}
</style>
