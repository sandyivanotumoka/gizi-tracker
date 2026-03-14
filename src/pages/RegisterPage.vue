<script setup lang="ts">
/* =========================
   IMPORTS
========================= */

import { ref } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

/* =========================
   ROUTER
========================= */

const router = useRouter();

/* =========================
   FORM STATE
========================= */

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

/* show hide password */

const showPassword = ref(false);

/* =========================
   REGISTER FUNCTION
========================= */

function handleRegister() {
  /* validasi kosong */

  if (!name.value || !email.value || !password.value) {
    Swal.fire({
      icon: "error",
      title: "Form belum lengkap",
      text: "Semua field harus diisi",
    });

    return;
  }

  /* validasi password */

  if (password.value !== confirmPassword.value) {
    Swal.fire({
      icon: "error",
      title: "Password tidak sama",
      text: "Silakan periksa kembali password",
    });

    return;
  }

  /* simulasi register */

  console.log("Register user:", {
    name: name.value,
    email: email.value,
  });

  Swal.fire({
    icon: "success",
    title: "Akun berhasil dibuat",
    text: "Silakan login untuk melanjutkan",
  });

  router.push("/login");
}
</script>

<template>
  <!-- Container -->
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <!-- Card -->
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <!-- Title -->
      <h1 class="text-2xl font-bold text-center mb-6">Daftar Akun</h1>

      <!-- Form -->
      <form @submit.prevent="handleRegister">
        <!-- Nama -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1"> Nama </label>

          <input
            v-model="name"
            type="text"
            placeholder="Masukkan nama"
            class="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-200"
          />
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1"> Email </label>

          <input
            v-model="email"
            type="email"
            placeholder="Masukkan email"
            class="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-200"
          />
        </div>

        <!-- Password -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1"> Password </label>

          <div class="relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Masukkan password"
              class="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-200"
            />

            <!-- toggle -->
            <button
              type="button"
              class="absolute right-3 top-2 text-sm text-gray-500"
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? "Hide" : "Show" }}
            </button>
          </div>
        </div>

        <!-- Confirm Password -->
        <div class="mb-6">
          <label class="block text-sm font-medium mb-1">
            Konfirmasi Password
          </label>

          <input
            v-model="confirmPassword"
            type="password"
            placeholder="Ulangi password"
            class="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-200"
          />
        </div>

        <!-- Button -->
        <button
          type="submit"
          class="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Daftar
        </button>
      </form>

      <!-- Link Login -->
      <p class="text-sm text-center mt-6">
        Sudah punya akun?

        <router-link
          to="/login"
          class="text-green-600 font-semibold hover:underline"
        >
          Login
        </router-link>
      </p>
    </div>
  </div>
</template>
