<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useJwtStore } from './stores/jwt'
import NavigationBar from '@/components/layout/NavigationBar.vue'
import FooterView from '@/components/layout/FooterView.vue';
const jwtStore = useJwtStore()
onBeforeMount(async () => {
  await jwtStore.refreshAccessToken()
})
</script>

<template>
  <div class="main-wrapper">
    <NavigationBar />

    <RouterView />
  
  <FooterView /> 
</div>
</template>



<style scoped></style>
