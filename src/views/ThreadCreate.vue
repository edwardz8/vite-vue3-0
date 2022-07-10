<script setup lang="ts">
import { useStore } from "@/store/index";
import { useRouter } from "vue-router";
import ThreadEditor from "@/components/ThreadEditor.vue";

const store = useStore();

const router = useRouter();

const props = defineProps(["forumId"]);

const forum = computed(() => {
  return store.data.forums.find((forum) => forum.id === props.forumId);
});

const save = async ({ title, content }) => {
  const post = {
    text: content,
  };
  const thread = await store.createThread(title, props.forumId, post);
  router.push({ name: "ThreadShow", params: { id: thread.id } });
};

const cancel = () => {
  router.push({ name: "Forum", params: { id: props.forumId } });
};
</script>

<template>
  <div class="col-full push-top">
    <h1>
      Create new thread in <i>{{ forum.name }}</i>
    </h1>
    <ThreadEditor @save="save" @cancel="cancel" />
  </div>
</template>
