<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <router-link :to="{ name: 'ThreadShow', params: { id: thread.id } }">{{
              thread.title
            }}</router-link>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a
            >, <AppDate :timestamp="thread.publishedAt" />.
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }} replies</p>

          <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="" />

          <div>
            <p class="text-xsmall">
              <a href="#">{{ userById(thread.userId).name }}</a>
            </p>
            <p class="text-xsmall text-faded">
              <AppDate :timestamp="thread.publishedAt" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store/index";
import AppDate from "@/components/AppDate.vue";

const store = useStore();

defineProps({
  threads: {
    type: Array,
    required: true,
  },
});

const posts = computed(() => store.data.posts);
const users = computed(() => store.data.users);

function postById(postId) {
  return posts.value.find((p) => p.id === postId);
}

function userById(userId) {
  return users.value.find((p) => p.id === userId);
}
</script>

<style scoped></style>
