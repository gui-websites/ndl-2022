<template>
  <!-- Button -->
  <div
    class="absolute top-8 right-8 cursor-pointer rounded-lg border-4 border-neutral-900 bg-neutral-800 p-4"
    @click="show_modal = true"
  >
    <img src="/img/items/sac.png" class="aspect-square w-16" />
  </div>

  <!-- Modal -->
  <div
    class="absolute inset-0 z-50 grid place-items-center bg-black bg-opacity-60 p-4"
    v-show="show_modal"
  >
    <div
      class="relative flex h-2/3 w-full max-w-5xl items-start overflow-clip rounded-xl bg-neutral-800 text-white"
    >
      <div class="w-7/12 p-4">
        <h1 class="mb-4">Mon inventaire</h1>
        <div class="grid grid-cols-5 gap-6">
          <Item
            v-for="item in game_tracker.getInventory()"
            :type="item.type"
            :count="item.count"
          />
        </div>
      </div>
      <div class="grid h-full w-5/12 place-items-center bg-neutral-900">
        <Person type="guy" class="relative" />
      </div>
      <vue-feather
        type="x"
        size="24"
        class="absolute top-4 right-4 cursor-pointer text-white"
        @click="show_modal = false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";
import game_tracker from "~/composables/game-tracker";

game_tracker.addItem("capote", 3);
game_tracker.addItem("pq", 5);

const show_modal = ref(false);
</script>

<style scoped></style>
