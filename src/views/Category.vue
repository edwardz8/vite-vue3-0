<script setup lang="ts">
import { useStore } from "@/store/index";
import sourceData from "@/data.json";
import ForumList from "@/components/ForumList.vue";

const store = useStore();

const props = defineProps(["id"]);

const category = computed(() => {
  return store.data.categories.find((category) => category.id === props.id);
});

function getForumsForCategory(category) {
  return store.data.forums.filter((forum) => forum.categoryId === category.id);
}
</script>

<template>
  <h1>{{ category.name }}</h1>
  <ForumList :title="category.name" :forums="getForumsForCategory(category)" />
</template>
