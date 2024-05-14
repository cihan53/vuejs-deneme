<script setup lang="ts">
const props = defineProps(['links']);
const badge = {
  'blue': 'bg-blue-100 dark:bg-blue-900 dark:text-blue-300',
  'red': 'bg-red-100  dark:bg-red-900 dark:text-red-300',
  'orange': 'bg-orange-100 dark:bg-orange-900 dark:text-orange-300',
}
</script>

<template>
  <ul class="space-y-2 font-medium">
    <template v-for="link of props.links">
      <li v-if="link.permissions" v-can="[...link.permissions ]">
        <NuxtLink :to="link.url" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
        <span v-if="link.icon"
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
              :class="link.icon"></span>
          <span class="ms-3 hover:bg-gray-100">{{ link.label }}</span>
          <span v-if="link.badge"
                class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium rounded-full "
                :class="badge[link.badge.color] || ' text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 '">{{
              link.badge.title
            }}</span>
        </NuxtLink>
      </li>
      <li v-else>
        <NuxtLink :to="link.url" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
        <span v-if="link.icon"
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
              :class="link.icon"></span>
          <span class="ms-3 hover:bg-gray-100">{{ link.label }}</span>
          <span v-if="link.badge"
                class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium rounded-full "
                :class="badge[link.badge.color] || ' text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 '">{{
              link.badge.title
            }}</span>
        </NuxtLink>
      </li>
    </template>
  </ul>

</template>


<style scoped>

</style>
