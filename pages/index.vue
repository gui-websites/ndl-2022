<template>
  <div
    class="h-full w-full bg-gradient-to-b from-dark_cyan via-middle to-bot p-4"
  >
    <div class="grid h-full w-full place-items-center">
      <div
        id="card"
        class="m-14 flex place-items-center justify-between rounded-2xl border border-gray-800 bg-white/10 shadow-xl backdrop-blur-sm hover:shadow-2xl"
      >
        <div class="p-10">
          <img src="@/assets/img/home/logo.png" width="512" />
        </div>
        <div class="px-6 text-center text-2xl text-white/60">
          L'équipe d'<span class="text-orange-400/60">UPSSISOMNIAQUES</span>
          est de retour pour sa deuxième édition de la nuit de l'info. Notre
          équipe
          <span class="text-orange-400/60">100% UPSSITECH</span>
          vous propose un jeu de
          <span class="italic">type model</span>
          vue pour sensibiliser la jeunesse sur les comportements à adopter face
          à la sexualité et leurs conséquences
        </div>
      </div>
      <div
        id="card"
        class="m-14 flex place-items-center justify-between rounded-2xl border border-gray-800 bg-white/10 shadow-xl backdrop-blur-sm hover:shadow-2xl"
      >
        <div class="block justify-center">
          <div class="px-6 text-center text-2xl text-gray-800">
            Vous incarnerez un jeune adolescant face à une situation de la vie
            courante dont vous devez dicter les choix pour créer son aventure. À
            vous de jouer !
          </div>

          <!-- <div class="ite">
            <a href="/game">
              <button
                class="mt-4 mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800"
              >
                Play
              </button>
            </a>
          </div> -->

          <div class="flex justify-center">
            <a href="/game">
              <button
                class="my-2 rounded bg-purple-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
              >
                Play
              </button>
            </a>
          </div>
        </div>
        <div class="p-10">
          <img src="@/assets/img/home/play.png" width="512" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue";
</script>

<style scoped>
#card {
  animation: 1s fadeFromBot ease-in-out backwards;
  animation-delay: 0.5s;
}

#button {
  animation: 1s fadeFromBot ease-in-out backwards;
  animation-delay: 1s;
}
</style>
