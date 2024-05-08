<script setup lang="ts">
// You might choose this based on an API call or logged-in status
import {useAuth} from "~/composables/useAuth";

const {isAuthenticated} = useAuth()
let layout = "login";
if (isAuthenticated.value) {
  layout = "default"
}
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage/>
  </NuxtLayout>
</template>
