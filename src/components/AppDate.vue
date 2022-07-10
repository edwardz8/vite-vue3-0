<script setup lang="ts">
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedDate from "dayjs/plugin/localizedFormat";
dayjs.extend(relativeTime);
dayjs.extend(localizedDate);

const props = defineProps(["timestamp"]);

const diffForHumans = () => {
  return dayjs.unix(props.timestamp).fromNow();
};

const humanFriendlyDate = () => {
  return dayjs.unix(props.timestamp).format("1111");
};
</script>

<template>
  <span :title="humanFriendlyDate()">
    {{ diffForHumans() }}
  </span>
</template>
