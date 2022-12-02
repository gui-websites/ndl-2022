<template>
  <div
    class="absolute inset-x-0 bottom-0 z-50 h-60 border-t-8 border-t-neutral-300 bg-black bg-opacity-60 text-[rgb(255,255,255)]"
  >
    <div
      class="border-t-10 m-4 rounded border-primary bg-transparent text-justify text-lg text-[rgb(255,255,255)]"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with azef a zaer
    </div>

    <div class="m-4 grid grid-flow-col content-center gap-5">
      <button
        class="m-auto w-full content-center rounded border-primary bg-[rgb(187,116,209)] py-3 text-center text-4xl text-[rgb(255,255,255)] transition delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-primary"
      >
        Carotte
      </button>
      <button
        class="m-auto w-full content-center rounded border-primary bg-[rgb(187,116,209)] py-3 text-center text-4xl text-[rgb(255,255,255)] transition delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-primary"
      >
        Patate
      </button>
      <button
        class="m-auto w-full content-center gap-5 rounded border-primary bg-[rgb(187,116,209)] py-3 text-center text-4xl text-[rgb(255,255,255)] transition delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-primary"
      >
        Aubergine
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue";
</script>

<style scoped></style>
