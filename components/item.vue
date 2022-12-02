<template>
  <div class="relative grid aspect-square rounded-lg bg-neutral-900 p-4">
    <img :src="`/img/items/${type}.png`" class="aspect-square w-full" />
    <!-- Count -->
    <div
      class="absolute bottom-0 right-0 grid h-6 w-6 translate-x-1/2 translate-y-1/2 place-items-center rounded-lg bg-primary text-xs"
    >
      {{ count }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: ItemType;
  count: number;
}>();
</script>

<style scoped></style>
