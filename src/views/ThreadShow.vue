<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <post-list :posts="posts" />

    <post-editor @save="addPost" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store/index";
import PostList from "@/components/PostList.vue";

const store = useStore();

const props = defineProps(["id"]);

// const threads = reactive(sourceData.threads);
// const posts = reactive(sourceData.posts);

const threads = computed(() => store.data.threads);

const posts = computed(() => store.data.posts);

const thread = computed(() => {
  return threads.value.find((thread) => thread.id === props.id);
});

const threadPosts = computed(() => {
  return posts.value.filter((post) => post.threadId === props.id);
});

const addPost = (eventData) => {
  const post = {
    ...eventData.post,
    threadId: props.id,
  };
  store.createPost(post);
};
</script>
