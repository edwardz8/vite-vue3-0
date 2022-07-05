<script setup lang="ts">
const text = ref("");

const emit = defineEmits(["save"]);
// if more than one emit event in single component
// (e: "save", value: string): void;

function save() {
  const postId = "ggqq" + Math.random();
  const post = {
    id: postId,
    text: text,
    publishedAt: Math.floor(Date.now() / 1000),
    userId: "rpbB8C6ifrYmNDufMERWfQUoa202",
  };
  emit("save", { post });
  text = "";
}
</script>

<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea v-model="text" name="" id="" cols="30" rows="10" class="form-input" />
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>
