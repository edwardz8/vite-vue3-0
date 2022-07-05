<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <post-list :posts="posts" />

    <post-editor @save="addPost" />
  </div>
</template>

<script setup lang="ts">
import sourceData from "@/data.json";
import PostList from "@/components/PostList.vue";

const props = defineProps({
  id: String,
});

const threads = reactive(sourceData.threads);
const posts = reactive(sourceData.posts);

const thread = computed(() => {
  return threads.find((thread) => thread.id === props.id);
});

const threadPosts = computed(() => {
  return posts.filter((post) => post.threadId === props.id);
});

function addPost(eventData) {
  const post = {
    ...eventData.post,
    threadId: props.id 
  };

  posts.push(post);
  thread.posts.push(post.id);
}
</script>
