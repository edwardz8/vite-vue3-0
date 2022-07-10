<script setup lang="ts">
import { useStore } from "@/store/index";
import ThreadList from "@/components/ThreadList.vue";

const store = useStore();

const props = defineProps(["id"]);

const forum = computed(() => {
  return store.data.forums.find((forum) => forum.id === props.id);
});

const filterThreads = computed(() => {
  return store.data.threads.filter((thread) => thread.forumId === props.id);
});
</script>

<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <router-link
        :to="{ name: 'ThreadCreate', params: { forumId: forum.id } }"
        class="btn-green btn-small"
        >Start a thread</router-link
      >
    </div>
  </div>

  <div class="col-full push-top">
    <ThreadList :threads="filterThreads" />
  </div>
</template>
