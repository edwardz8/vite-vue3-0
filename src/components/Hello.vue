<script setup lang="ts">

const props = defineProps({ name: String })

const uppercase = computed(() => props.name.toLocaleUpperCase())
</script>

<template>
  <div class="text-red">Hello, {{ name }}</div>
</template>
