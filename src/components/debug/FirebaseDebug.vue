<template>
  <div v-if="showDebug" class="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50 max-w-md">
    <div class="font-bold mb-2">Firebase Debug Info</div>
    <div class="text-sm space-y-1">
      <div>API Key: {{ apiKey ? '✅ Set' : '❌ Missing' }}</div>
      <div>Project ID: {{ projectId ? '✅ Set' : '❌ Missing' }}</div>
      <div>Auth Domain: {{ authDomain ? '✅ Set' : '❌ Missing' }}</div>
      <div>App ID: {{ appId ? '✅ Set' : '❌ Missing' }}</div>
      <div v-if="error" class="text-red-600 mt-2">
        <strong>Error:</strong> {{ error }}
      </div>
    </div>
    <button @click="hideDebug" class="mt-2 text-xs underline">Hide</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useEnvConfig } from '@/composables/useEnvConfig'

const showDebug = ref(false)
const error = ref(null)

const envConfig = useEnvConfig()

const apiKey = envConfig.firebase.apiKey
const projectId = envConfig.firebase.projectId
const authDomain = envConfig.firebase.authDomain
const appId = envConfig.firebase.appId

const hideDebug = () => {
  showDebug.value = false
}

onMounted(() => {
  // Only show debug in development or if there are missing env vars
  const isDev = import.meta.env.DEV
  const hasMissingVars = !apiKey || !projectId || !authDomain || !appId
  
  if (isDev || hasMissingVars) {
    showDebug.value = true
  }

  // Listen for Firebase errors
  window.addEventListener('unhandledrejection', (event) => {
    if (event.reason?.code?.includes('firebase') || event.reason?.message?.includes('Firebase')) {
      error.value = event.reason.message
      showDebug.value = true
    }
  })
})
</script>