<script setup lang="ts">
// Mendefinisikan props yang diterima component
const props = defineProps<{
  weight: number;
}>();
</script>

<template>
  <!-- container utama card berat badan -->
  <div class="bg-white p-6 rounded-lg shadow">
    <!-- Judul Card -->
    <h2 class="text-xl font-semibold">Berat Badan</h2>

    <!-- menampilkan berat badan -->
    <p class="mt-2 text-gray-600"></p>
    {{ props.weight }} kg
  </div>
</template>
