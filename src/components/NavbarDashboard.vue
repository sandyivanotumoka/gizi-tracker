<!--
Komponen Navbar Dashboard
Navbar ini berada di bagian atas dashboard
berisi nama aplikasi dan tombol logout
-->

<script setup lang="ts">
// import router untuk navigasi antar halaman
import { useRouter } from "vue-router";

// instance route
const router = useRouter();

// fungsi Loguot
const handleLogout = () => {
  // hapus status login
  localStorage.removeItem("isLoggedIn");
  // kembalikan kehalaman login
  router.push("/login");
};
</script>

<template>
  <!-- container Navbar -->
  <nav class="bg-white shadow p-4 flex justify-between items-center">
    <!-- Judul -->
    <h1 class="font-bold text-green-600 text-xl">GiziTracker</h1>

    <!-- tombol Logout -->
    <button
      @click="handleLogout"
      class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  </nav>
</template>
