<template>
  <!-- bg -->
  <div class="custom-bg h-full w-full">
    <Person :type="scene.people.left" class="left-2 md:left-1/4" />
    <Person :type="scene.people.right" class="right-2 md:right-1/4" />
  </div>

  <!-- inventory -->
  <Inventory class="absolute top-8 right-8" />

  <!-- bar -->
  <Bar class="absolute inset-x-0 bottom-0" />
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";
import game_tracker from "~/composables/game-tracker";
// import HistoryTree from "~/scenario/HistoryTree";

// const tree = new HistoryTree();
// tree.createHistoryTree();

// const scene = tree.listOfScenes[0];

const scene = game_tracker.getSceneManager().getScene();
</script>

<style>
.custom-bg {
  @apply bg-cover bg-center bg-no-repeat;
  background-image: url("/img/pharmacie.jpeg");
}
</style>
