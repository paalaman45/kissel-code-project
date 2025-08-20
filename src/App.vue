<script setup>
import { RouterView } from 'vue-router'
import FirebaseDebug from '@/components/debug/FirebaseDebug.vue'
</script>

<template>
  <!-- Main App Container -->
  <div id="app">
    <RouterView />
    <FirebaseDebug />
  </div>
</template>
