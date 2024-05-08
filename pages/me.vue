<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <h1>Index page</h1>

    <UAlert title="Heads up!" />
    <UButton>Button</UButton>
  <UButton label="Open" @click="isOpen = true" v-can="['edit posts', 'view posts']" />
  <UModal v-model="isOpen">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <Placeholder class="h-8" />
      </template>

      <Placeholder class="h-32" />

      <template #footer>
        <Placeholder class="h-8" />
      </template>
    </UCard>
  </UModal>
</template>

<style scoped>

</style>
