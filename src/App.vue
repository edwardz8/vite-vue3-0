<script setup lang="ts">
import navbar from "@/components/Navbar.vue";
</script>

<template>
  <navbar />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style>
@import "assets/style.css";
</style>
