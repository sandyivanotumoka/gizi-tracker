<!--
Component ini menampilkan informasi user.
Component ini akan menerima data dari parent (App.vue).
-->

<script setup lang="ts">
// mendefinisikan props yang diterima dari parent
const props = defineProps<{
  name: string;
}>();
</script>

<template>
  <!-- card container -->
  <div class="bg-white p-6 rounded-lg shadow">
    <!-- judul card -->
    <h2 class="text-xl font-semibold">User</h2>

    <!-- menampilkan nama user -->
    <p class="mt-2">Halo {{ props.name }}</p>
  </div>
</template>

<style>
/* component ini tidak membutuhkan style tambahan */
</style>
