<template>
  <!-- bg -->
  <div class="custom-bg h-full w-full">
    <img src="~/assets/img/dude.png" class="person left-2 md:left-1/4" />
    <img src="~/assets/img/gal.png" class="person right-2 md:right-1/4" />
  </div>

  <!-- inventory -->
  <Inventory class="absolute top-8 right-8" />

  <!-- bar -->
  <Bar class="absolute inset-x-0 bottom-0" />
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";
</script>

<style>
.custom-bg {
  @apply bg-cover bg-center bg-no-repeat;
  background-image: url("~/assets/img/pharmacie.jpeg");
}

.person {
  @apply absolute bottom-0 h-4/6 md:h-3/4;
}
</style>
