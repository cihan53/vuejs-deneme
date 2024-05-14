<script setup lang="ts">
// You might choose this based on an API call or logged-in status
import {useAuth} from "~/composables/useAuth";

const {isAuthenticated,loading} = useAuth()
let layout = "login";
if (isAuthenticated.value) {
  layout = "default"
}

const {progress, isLoading, start, finish, clear} = useLoadingIndicator({
  duration: 2000,
  throttle: 200,
})

</script>

<template>
  <NuxtLoadingIndicator/>
<!--  <LoadSpinner v-if="isLoading"/>-->
  <NuxtLayout :name="layout">
    <NuxtPage/>
  </NuxtLayout>
</template>
