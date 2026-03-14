<!--
Komponen ini menampilkan grafik perubahan berat badan user.
Grafik dibuat menggunakan Chart.js.
-->

<script setup lang="ts">
import { onMounted } from "vue";
import Chart from "chart.js/auto";

// props yang diterima component
const props = defineProps<{
  weights: number[];
}>();

onMounted(() => {
  const ctx = document.getElementById("weightChart") as HTMLCanvasElement;

  new Chart(ctx, {
    type: "line",

    data: {
      labels: props.weights.map((_, i) => `Hari ${i + 1}`),

      datasets: [
        {
          label: "Berat Badan (kg)",
          data: props.weights,

          borderColor: "#22c55e",
          backgroundColor: "rgba(34,197,94,0.2)",

          tension: 0.4,
          fill: true,
        },
      ],
    },

    options: {
      responsive: true,
    },
  });
});
</script>

<template>
  <!-- card grafik -->
  <div class="bg-white p-6 rounded-lg shadow">
    <h2 class="text-xl font-semibold mb-4">Grafik Berat Badan</h2>

    <canvas id="weightChart"></canvas>
  </div>
</template>
