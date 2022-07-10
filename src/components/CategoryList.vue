<script setup lang="ts">
import { useStore } from "@/store/index";
import ForumList from "@/components/ForumList.vue";

const store = useStore();

defineProps({
  categories: Array,
});

function getForumsForCategory(category) {
  return store.data.forums.filter((forum) => forum.category === category.id);
}
</script>

<template>
  <ForumList
    v-for="category in categories"
    :key="category.id"
    :forums="getForumsForCategory(category)"
    :title="category.name"
    :category-id="category.id"
  />
</template>
