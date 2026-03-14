<!--
Component ini menampilkan jadwal minum berikutnya
Sekarang kita tambahkan juga informasi progress minum air
-->

<script setup lang="ts">
/* =========================
   IMPORTS
========================= */

import { ref, computed, onMounted } from "vue";
import Swal from "sweetalert2";

/* =========================
   PROPS
========================= */

const props = defineProps<{
  nextDrinkTime: string;
}>();

/* =========================
   WATER STATE
========================= */

const targetWater = 2000;
const currentWater = ref(500);

/* =========================
   DAILY TRACKING STATE
========================= */

const lastDrinkDate = ref("");
const lastTargetDate = ref("");

/* =========================
   PROGRESS COMPUTED
========================= */

const progress = computed(() => {
  return (currentWater.value / targetWater) * 100;
});

/* Progress bar color */
const progressColor = computed(() => {
  if (progress.value < 50) return "bg-blue-500";
  if (progress.value < 80) return "bg-green-500";

  return "bg-emerald-500";
});

/* =========================
   FUNCTIONS
========================= */

/* Reset water jika hari berubah */
function checkDailyReset() {
  const today = new Date().toDateString();

  if (lastDrinkDate.value && lastDrinkDate.value !== today) {
    currentWater.value = 0;
  }
}

/* Tambah air */
function addWater(amount: number) {
  const today = new Date().toDateString();

  lastDrinkDate.value = today;

  currentWater.value += amount;

  if (currentWater.value >= targetWater && lastTargetDate.value !== today) {
    lastTargetDate.value = today;

    Swal.fire({
      title: "Target Air Tercapai! 💧",
      text: "Kamu sudah minum 2000 ml hari ini. Bagus!",
      icon: "success",
      confirmButtonText: "OK",
    });
  }
}

/* Undo air */
function undoWater() {
  if (currentWater.value >= 250) {
    currentWater.value -= 250;
  } else {
    currentWater.value = 0;
  }
}

/* =========================
   LIFECYCLE
========================= */

onMounted(() => {
  checkDailyReset();
});
</script>

<template>
  <!-- container card -->
  <div class="bg-white p-5 sm:p-6 rounded-xl shadow">
    <!-- Judul -->
    <h2 class="text-lg sm:text-xl font-semibold">Jadwal Minum</h2>

    <!-- Label -->
    <p class="mt-2 text-gray-700 text-sm sm:text-base">Minum air</p>

    <!-- waktu minum berikutnya -->
    <p class="text-gray-500 text-sm">
      {{ props.nextDrinkTime }}
    </p>

    <!-- Progress text -->
    <p class="mt-4 text-sm text-gray-700">
      {{ currentWater }} / {{ targetWater }} ml
    </p>

    <!-- Progress bar -->
    <div class="w-full bg-gray-200 h-3 rounded mt-2 overflow-hidden">
      <div
        :class="progressColor"
        class="h-3 rounded transition-all duration-300"
        :style="{ width: progress + '%' }"
      ></div>
    </div>

    <!-- Buttons -->
    <div class="flex flex-col sm:flex-row gap-2 mt-4">
      <!-- +250 -->
      <button
        class="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        @click="addWater(250)"
      >
        +250 ml
      </button>

      <!-- +500 -->
      <button
        class="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        @click="addWater(500)"
      >
        +500 ml
      </button>

      <!-- Undo button -->
      <button
        v-if="currentWater > 0"
        class="mt-3 text-sm text-blue-600 hover:underline"
        @click="undoWater"
      >
        Undo Water -250 ml
      </button>
    </div>
  </div>
</template>
