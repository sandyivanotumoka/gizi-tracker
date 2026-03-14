<!--
Halaman Login Aplikasi Gizi
UI dibuat lebih modern menggunakan Tailwind
layout dibagi menjadi dua kolom:
kiri → branding aplikasi
kanan → form login
-->

<script setup lang="ts">
// Import reactive dari vue untuk menyimpan data form
import { ref } from "vue";

// Import router untuk navigasi halaman
import { useRouter } from "vue-router";

// membuat instance router
const router = useRouter();

// state untuk mengambil email
const email = ref("");

// state ambil password
const password = ref("");

// Fungsi tombol login
const handleLogin = () => {
  // contoh validasi
  if (email.value && password.value) {
    // tampilkan ke dashboard
    router.push("/");
  } else {
    // jika kosong
    alert("Email dan Password harus diisi");
  }
};
</script>

<template>
  <!--
container utama halaman
-->
  <div class="min-h-screen grid md:grid-cols-2">
    <!--
  sisi kiri halaman login
  -->
    <div
      class="hidden md:flex items-center justify-center bg-green-500 text-white p-10"
    >
      <div class="max-w-md text-center">
        <!-- judul aplikasi -->
        <h1 class="text-4xl font-bold mb-4">GiziTracker</h1>

        <!-- deskripsi aplikasi -->
        <p class="text-lg opacity-90">
          Pantau gizi harian, jadwal makan, dan progress berat badanmu dalam
          satu dashboard sederhana.
        </p>
      </div>
    </div>

    <!--
  sisi kanan halaman login
  tempat form login berada
  -->
    <div class="flex items-center justify-center bg-gray-100 p-6">
      <!--
    card login
    -->
      <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <!-- judul form login -->
        <h2 class="text-2xl font-bold mb-6 text-center">Login Akun</h2>

        <!-- form login -->
        <form @submit.prevent="handleLogin" class="space-y-4">
          <!-- input email -->
          <div>
            <label class="block text-sm mb-1"> Email </label>

            <input
              v-model="email"
              type="email"
              placeholder="email@example.com"
              class="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <!-- input password -->
          <div>
            <label class="block text-sm mb-1"> Password </label>

            <input
              v-model="password"
              type="password"
              placeholder="********"
              class="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <!-- tombol login -->
          <button
            class="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition"
          >
            Login
          </button>
        </form>

        <!-- link ke register -->
        <p class="text-center text-sm mt-6">
          Belum punya akun?

          <router-link
            to="/register"
            class="text-green-600 font-semibold hover:underline"
          >
            Daftar
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>
