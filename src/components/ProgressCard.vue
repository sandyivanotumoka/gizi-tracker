<script setup lang="ts">
const props = defineProps<{
  day: number;
}>();

// Total hari Program
const totalDays: number = 30;

// menghitung presentase program
const progress = (props.day / totalDays) * 100;
</script>

<template>
  <!-- container utama  card Progress -->
  <div class="bg-white p-6 rounded-lg shadow">
    <!-- Judul card Progress program -->
    <h2 class="text-xl font-semibold">Progress Program</h2>

    <!-- Menampilkan Hari Program -->
    <p class="mt-2 text-gray-600">{{ props.day }} / 30</p>

    <!-- container progress bar -->
    <div class="mt-4 w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <!-- bar yang terisi -->
      <div
        class="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-700"
        :style="{ width: progress + '%' }"
      ></div>
    </div>

    <!-- teks persentase -->
    <p class="mt-2 text-sm text-gray-600">{{ Math.round(progress) }}%</p>

    <!-- Pesan motivasi -->
    <p class="mt-3 text-sm text-green-600 font-medium">
      🔥 Kamu sudah menyelesaikan {{ Math.round(progress) }}% program!
    </p>
  </div>
</template>
