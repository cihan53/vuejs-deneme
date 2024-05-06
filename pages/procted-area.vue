<script setup lang="ts">
const isOpen = ref(false)
definePageMeta({
  middleware: [
    'auth', // your auth middleware
    'nuxt-permissions'
  ],
  roles: ['admin'],
  permissions: ['access dashboard']
})

</script>

<template>
  <h1>Index page</h1>

  <UAlert title="Heads up!"/>
  <UButton>Button</UButton>
  <UButton label="Open" @click="isOpen = true"/>
  <UModal v-model="isOpen">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <Placeholder class="h-8"/>
      </template>

      <Placeholder class="h-32"/>

      <template #footer>
        <Placeholder class="h-8"/>
      </template>
    </UCard>
  </UModal>
</template>

<style scoped>

</style>
