<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const links = [
  {
    label: 'Dashboard',
    icon: 'i-material-symbols-dashboard-outline',
    url: '/'
  },
  {
    label: 'Organization',
    icon: 'i-heroicons-cog-8-tooth',
    permissions: ['show-organization-menu'],
    badge: {
      title: 3,
      color: 'blue'
    },
    children: [{
      label: 'Organization',
      url: '/organization'
    }, {
      label: 'Teams',
      url: '/teams'
    }, {
      label: 'Profiles',
      url: '/profiles'
    }]
  },
  {
    label: 'Analytics',
    icon: 'i-heroicons-user-group-solid',
    url: '/analytics',
    permissions: ['show-analytics-menu'],
  },
  {
    label: 'Agile Space',
    icon: 'i-heroicons-user-group-solid',
    url: '/agile-space',
    permissions: ['show-agile-space-menu'],
  },

  {
    label: 'Gamification',
    icon: 'i-heroicons-user-group-solid',
    url: '/me',
    permissions: ['show-me-menu'],
  },


]
</script>

<template>

  <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button"
          class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    </svg>
  </button>

  <aside id="logo-sidebar"
         class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
         aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-white ">
      <NuxtLink to="/" class="flex items-center ps-2.5 mb-5">
        <img src="~/assets/image/logo.png" class="h-6 me-3 sm:h-7" alt="Oobeya"/>
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Oobeya</span>
      </NuxtLink>
      <SidebarLinks :links="links"/>
    </div>
  </aside>

  <div class="p-4 sm:ml-64">
    <div class="p-4">
      <slot/>
    </div>
  </div>
</template>

<style scoped>

</style>
