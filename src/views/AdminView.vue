<template>
  <!-- Admin Panel Main View -->
  <div class="min-h-screen bg-gray-100">
    <!-- Admin Navigation -->
    <nav class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-4">
            <h1 class="text-2xl font-bold text-gray-900">Admin Panel</h1>
            <div class="hidden sm:block">
              <nav class="flex space-x-8">
                <button
                  v-for="tab in tabs"
                  :key="tab.id"
                  @click="activeTab = tab.id"
                  :class="[
                    'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                    activeTab === tab.id
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  ]"
                >
                  {{ tab.name }}
                </button>
              </nav>
            </div>
          </div>
          
          <!-- User Menu -->
          <div class="flex items-center space-x-4">
            <span class="text-sm text-gray-600">Welcome, {{ user?.email }}</span>
            <button
              @click="handleSignOut"
              class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Tab Navigation -->
    <div class="sm:hidden bg-white border-b">
      <select
        v-model="activeTab"
        class="block w-full px-3 py-2 border-0 bg-transparent text-gray-900 focus:ring-2 focus:ring-primary-500"
      >
        <option v-for="tab in tabs" :key="tab.id" :value="tab.id">
          {{ tab.name }}
        </option>
      </select>
    </div>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <!-- About Me Management -->
      <div v-if="activeTab === 'about'" class="space-y-6">
        <AboutManagement />
      </div>

      <!-- Services Management -->
      <div v-if="activeTab === 'services'" class="space-y-6">
        <ServicesManagement />
      </div>

      <!-- Skills Management -->
      <div v-if="activeTab === 'skills'" class="space-y-6">
        <SkillsManagement />
      </div>

      <!-- Work/Projects Management -->
      <div v-if="activeTab === 'work'" class="space-y-6">
        <WorkManagement />
      </div>

      <!-- Blogs Management -->
      <div v-if="activeTab === 'blogs'" class="space-y-6">
        <BlogsManagement />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import AboutManagement from '@/components/admin/AboutManagement.vue'
import ServicesManagement from '@/components/admin/ServicesManagement.vue'
import SkillsManagement from '@/components/admin/SkillsManagement.vue'
import WorkManagement from '@/components/admin/WorkManagement.vue'
import BlogsManagement from '@/components/admin/BlogsManagement.vue'

const router = useRouter()
const { user, logout } = useAuth()

// Active tab state
const activeTab = ref('about')

// Available admin tabs
const tabs = [
  { id: 'about', name: 'About Me' },
  { id: 'services', name: 'Services' },
  { id: 'skills', name: 'Skills' },
  { id: 'work', name: 'Projects' },
  { id: 'blogs', name: 'Blogs' }
]

/**
 * Handle user sign out
 */
const handleSignOut = async () => {
  try {
    await logout()
    router.push('/admin/login')
  } catch (error) {
    console.error('Sign out error:', error)
  }
}

/**
 * Check authentication on component mount
 */
onMounted(() => {
  if (!user.value) {
    router.push('/admin/login')
  }
})
</script>