<template>
  <h1>Welcome to the Forum</h1>
  <ThreadList :threads="threads" />
</template>

<script setup lang="ts">
import sourceData from "../data.json";

const threads = reactive(sourceData.threads)
</script>
