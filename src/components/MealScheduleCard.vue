<script setup lang="ts">
const props = defineProps<{
  day: number;
  mealTime: string;
}>();

// daftar menu program gizi
const mealPlan: string[] = [
  "Detox Fruit Bowl",
  "Oatmeal & Banana",
  "Grilled Chicken Salad",
  "Salmon with Vegetables",
  "Avocado Toast",
  "Protein Smoothie",
  "Low Carb Chicken Bowl",
];

// menentukan menu  berdasarkan hari
const mealToday = mealPlan[(props.day - 1) % mealPlan.length];
</script>

<template>
  <!-- Container Utama Schedule Card -->
  <div class="bg-white p-6 rounded-lg shadow">
    <!-- Judul Card -->
    <h2 class="text-xl font-semibold">Jadwal Makan</h2>

    <!-- nama makanan hari ini -->
    <p class="mt-2 text-gray-700">
      {{ mealToday }}
    </p>

    <!-- waktu makan -->
    <p class="text-gray-500">
      {{ props.mealTime }}
    </p>
  </div>
</template>
