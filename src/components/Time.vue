<script setup lang="ts">
import Fuse from "fuse.js";
import { timezones } from "./composables/data.ts";
import type { Timezone } from "./types.ts";

const fuse = new Fuse(timezones, {
  keys: ["name"],
  threshold: 0.3,
});

const zones = ref<Timezone[]>([]);

const input = ref("");

const searchResult = computed(() => {
  return fuse.search(input.value);
  // return timezone.filter((i) => i.utc.find((u) => u.includes(input.value)));
});

function addToTimezone(timezone: Timezone) {
  zones.push.value(timezone);
}
</script>

<template>
  <Hello name="Zach" />

  <input v-model="input" type="text" />

  <div>
    <button v-for="i of searchResult" :key="i.refIndex" @click="addToTimezone(i.item)">
      {{ i.item.name }} {{ i.item.offset }}
    </button>
  </div>
</template>

<style>
@import "assets/style.css"; 

html {
  background: #222;
  color: white;
  color-scheme: dark;
}
</style>