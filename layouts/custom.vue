<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <div>
    <p>Custom Layout</p>
    <slot />
  </div>
</template>

<style scoped>

</style>
