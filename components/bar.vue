<template>
  <div
    class="absolute inset-x-0 bottom-0 h-60 border-t-8 border-t-neutral-900 bg-black bg-opacity-80 text-[rgb(255,255,255)]"
  >
    <div
      class="border-t-10 m-4 rounded border-primary bg-transparent p-4 text-white"
    >
      <!-- {{ scene.narrativeText }} -->
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi
      hic ullam dolores ratione, laudantium sed consequuntur doloremque sequi
      unde saepe deserunt maiores tempore aut culpa assumenda exercitationem.
      Animi, necessitatibus?
    </div>

    <div class="m-4 grid grid-flow-col content-center gap-5">
      <Button>Carotte</Button>
      <Button>Patate</Button>
      <Button>Aubergine</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue";

// const props = defineProps<{
//   scene: Scene;
// }>();
</script>

<style scoped></style>
