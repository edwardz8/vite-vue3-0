<template>
  <h1>Welcome to the Forum</h1>
  <ForumList :forums="forums" />
</template>

<script setup lang="ts">
import sourceData from "@/data.json";
import ForumList from "@/components/ForumList.vue";

const forums = reactive(sourceData.forums);
</script>
