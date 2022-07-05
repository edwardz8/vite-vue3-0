<script setup lang="ts">
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedDate from "dayjs/plugin/localizedFormat";
dayjs.extend(relativeTime);
dayjs.extend(localizedDate);

defineProps({
  timestamp: {
    type: Number,
    required: true,
  },
});

function diffForHumans(timestamp) {
  return dayjs.unix(timestamp).fromNow();
}

function humanFriendlyDate(timestamp) {
  return dayjs.unix(timestamp).format("1111");
}
</script>

<template>
  <span :title="humanFriendlyDate()">
    {{ diffForHumans() }}
  </span>
</template>
