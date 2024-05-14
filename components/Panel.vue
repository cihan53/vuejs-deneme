<script setup lang="ts">
const props = defineProps({
  loading: Boolean
})
</script>

<template>
  <div class="w-full h-full relative rounded-xl p-8  bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
    <slot/>
    <LoadMask :isLoading="props.loading"/>
  </div>
</template>

<style scoped>

</style>
