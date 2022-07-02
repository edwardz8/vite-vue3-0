<script lang="ts" setup>
import Demo from "./Demo.vue";
import 'uno.css'
</script>

<template>
  <Story title="Demo">
    <Variant>
      <Demo message="Hello world!" />
    </Variant>

    <Variant title="Variant 2" icon="carbon:accessibility-alt" icon-color="#00bebe">
      <Demo message="Meow!" />
    </Variant>
  </Story>
</template>

<docs lang="md">
# Title 1

## Title 2

[Link](https://example.com)
</docs>
