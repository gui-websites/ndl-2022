<template>
  <div
    class="absolute inset-x-0 bottom-0 h-60 border-t-8 border-t-neutral-900 bg-black bg-opacity-80 text-[rgb(255,255,255)]"
  >
    <div
      class="border-t-10 m-4 rounded border-primary bg-transparent p-4 text-white"
    >
      <!-- {{ scene.narrativeText }} -->
      Cette soirée s'est jusqu'ici passée à merveille. Tu t'es bien amusé avec
      tes amis, et il n'est pas encore trop tard. Tu a rencontré une fille
      irresistible et très sympa en début de soirée, Sandra, avec laquelle tu as
      partagé quelques verres. Ca tombe bien, tu semble l'interrésser aussi...
      Alors que tu t'appretais à recommander pour vous deux, elle te propose de
      plutot prendre ce dernier verre chez elle.
    </div>

    <div class="m-4 grid grid-flow-col content-center gap-5">
      <Button>La suivre dehors</Button>
      <Button>Ne sois pas bête, bien sûr que tu la suis !</Button>
      <Button
        >Ca parait être une bonne idée d'accepter sa proposition...</Button
      >
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
