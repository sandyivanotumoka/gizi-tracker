<!--
Halaman dashboard untuk user aplikasi gizi.
Halaman ini menggabungkan beberapa card komponen.
-->

<script setup lang="ts">
// mengimport semua komponen dashboard
import UserCard from "../components/UserCard.vue";
import ProgressCard from "../components/ProgressCard.vue";
import WeightCard from "../components/WeightCard.vue";
import MealScheduleCard from "../components/MealScheduleCard.vue";
import WaterScheduleCard from "../components/WaterScheduleCard.vue";
import WeightChart from "../components/WeightChart.vue";
import NavbarDashboard from "../components/NavbarDashboard.vue";

// Import ref dari vue untuk membuat state reaktif
import { ref } from "vue";

// tanggal mulai program user
const startDate = ref(new Date("2026-03-01"));

// tanggal Hari ini
const today = new Date();

// selisih waktu dalam milisecond
const diffTime = today.getTime() - startDate.value.getTime();

// mengubah kehari
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

// hari Program
const programDay = diffDays + 1;

// data user (sementara hardcoded)
const name: string = "Andi";

// data berat badan user
const weight: number = 78;

// data jadwal minum berikutnya
const nextDrinkTime: string = "12:30";

// Data
const weights = [80, 79.5, 79, 78.7, 78.3, 78];
</script>

<template>
  <!-- container utama halaman -->
  <div class="min-h-screen bg-gray-100 p-6">
    <NavbarDashboard />

    <!-- grid layout dashboard -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <!-- card user -->
      <UserCard :name="name" />

      <!-- card progress -->
      <ProgressCard :day="programDay" />

      <!-- card berat badan -->
      <WeightCard :weight="weight" />

      <!-- card jadwal makan -->
      <MealScheduleCard :day="programDay" mealTime="12:30" />

      <!-- Jadwal Minum berikutnya -->
      <WaterScheduleCard :nextDrinkTime="nextDrinkTime" />

      <!--  -->
      <WeightChart :weights="weights" />
    </div>
  </div>
</template>
