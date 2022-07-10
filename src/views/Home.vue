<template>
  <h1 class="push-top">Welcome to the Forum</h1>
  <CategoryList :categories="categories" />
</template>

<script setup lang="ts">
import { useStore } from "@/store/index";
import CategoryList from "@/components/CategoryList.vue";

const store = useStore();

const categories = computed(() => store.data.categories);
</script>
