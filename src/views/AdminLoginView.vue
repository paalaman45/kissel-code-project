<template>
  <!-- Admin Login View -->
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-50">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg">
      
      <!-- Header -->
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-900">Admin Login</h2>
        <p class="mt-2 text-gray-600">Sign in to manage your portfolio content</p>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        
        <!-- Email Field -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            autocomplete="email"
            :disabled="loading"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Enter your email"
          />
        </div>

        <!-- Password Field -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div class="relative">
            <input
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              required
              autocomplete="current-password"
              :disabled="loading"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed pr-12"
              placeholder="Enter your password"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute inset-y-0 right-0 pr-3 flex items-center"
              :disabled="loading"
            >
              <svg
                :class="showPassword ? 'hidden' : 'block'"
                class="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
              <svg
                :class="showPassword ? 'block' : 'hidden'"
                class="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Error Message -->
        <div v-if="error || googleError" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
          {{ error || googleError }}
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="loading || !email || !password"
          class="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
        >
          <div v-if="loading" class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          {{ loading ? 'Signing in...' : 'Sign In' }}
        </button>

        <!-- Divider -->
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <!-- Google Sign In Button -->
        <button
          type="button"
          @click="handleGoogleSignIn"
          :disabled="googleLoading || loading"
          class="w-full bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center disabled:bg-gray-100 disabled:cursor-not-allowed"
        >
          <svg v-if="!googleLoading" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <div v-if="googleLoading" class="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600 mr-3"></div>
          {{ googleLoading ? 'Signing in with Google...' : 'Sign in with Google' }}
        </button>
      </form>

      <!-- Demo Credentials -->
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 class="text-sm font-medium text-blue-800 mb-2">Demo Credentials</h3>
        <p class="text-xs text-blue-600 mb-1">Email: admin@example.com</p>
        <p class="text-xs text-blue-600">Password: admin123</p>
        <p class="text-xs text-blue-500 mt-2">Note: Configure Firebase Authentication to enable real login</p>
      </div>

      <!-- Back to Home -->
      <div class="text-center">
        <router-link
          to="/"
          class="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
        >
          ← Back to Portfolio
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { useGoogleAuth } from '@/composables/useGoogleAuth'

const router = useRouter()
const { user, signIn } = useAuth()
const { signInWithGoogle, loading: googleLoading, error: googleError } = useGoogleAuth()

// Form state
const email = ref('admin@example.com')
const password = ref('admin123')
const showPassword = ref(false)
const loading = ref(false)
const error = ref('')

/**
 * Handle Google Sign In
 */
const handleGoogleSignIn = async () => {
  if (googleLoading.value) return

  try {
    await signInWithGoogle()
    router.push('/admin')
  } catch (err) {
    error.value = err.message || 'Google sign-in failed. Please try again.'
  }
}

/**
 * Handle form submission
 */
const handleSubmit = async () => {
  if (loading.value) return

  loading.value = true
  error.value = ''

  try {
    // For demo purposes, we'll simulate a login
    // In production, this would use Firebase Authentication
    if (email.value === 'admin@example.com' && password.value === 'admin123') {
      // Simulate successful login
      setTimeout(() => {
        router.push('/admin')
      }, 1000)
    } else {
      // Try Firebase authentication
      await signIn(email.value, password.value)
      router.push('/admin')
    }
  } catch (err) {
    error.value = err.message || 'Invalid credentials. Please try again.'
  } finally {
    loading.value = false
  }
}

/**
 * Redirect if already logged in
 */
onMounted(() => {
  if (user.value) {
    router.push('/admin')
  }
})

/**
 * Auto-fill demo credentials
 */
const fillDemoCredentials = () => {
  email.value = 'admin@example.com'
  password.value = 'admin123'
}
</script>