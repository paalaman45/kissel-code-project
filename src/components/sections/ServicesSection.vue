<template>
  <!-- Services section displaying offered services -->
  <section id="services" class="py-20 bg-gradient-to-br from-secondary-50 via-primary-50 to-accent-50 relative overflow-hidden">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;80&quot; height=&quot;80&quot; viewBox=&quot;0 0 80 80&quot;><g fill-rule=&quot;evenodd&quot;><g fill=&quot;%239333ea&quot; fill-opacity=&quot;0.4&quot;><circle cx=&quot;8&quot; cy=&quot;8&quot; r=&quot;1.5&quot;/><circle cx=&quot;72&quot; cy=&quot;72&quot; r=&quot;1.5&quot;/><circle cx=&quot;8&quot; cy=&quot;72&quot; r=&quot;1.5&quot;/><circle cx=&quot;72&quot; cy=&quot;8&quot; r=&quot;1.5&quot;/></g></g></svg>')"></div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 right-10 w-24 h-24 bg-purple-400/10 rounded-full animate-pulse-glow"></div>
      <div class="absolute bottom-20 left-10 w-20 h-20 bg-indigo-400/10 rounded-full animate-pulse-glow animation-delay-1000"></div>
      <div class="absolute top-40 left-20 w-16 h-16 bg-pink-400/10 rounded-full animate-pulse-glow animation-delay-2000"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <div class="inline-block mb-4">
          <span class="text-purple-600 font-mono text-lg">></span>
          <span class="text-gray-600 font-mono text-lg ml-2">services.json</span>
        </div>
        <h2 class="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent mb-6 font-poppins">
          My Services
        </h2>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
          I offer a full suite of web services designed to build and grow your online presence. I specialize in crafting modern, user-friendly websites that are both beautiful and highly functional.
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto rounded-full mt-6"></div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        <span class="ml-2 text-gray-600">Loading services...</span>
      </div>

      <!-- Error State -->
      <div v-if="error" class="text-center py-8">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {{ error }}
        </div>
      </div>

      <!-- Services Grid -->
      <div v-if="!loading && !error" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animation-delay-300">
        
        <div 
          v-for="(service, index) in services" 
          :key="service.id"
          class="group bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-white/30 relative overflow-hidden"
          :class="`animation-delay-${(index + 1) * 200}`"
        >
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <!-- Service Card -->
          <div class="p-8 relative z-10">
            
            <!-- Service Icon -->
            <div class="mb-6">
              <div class="w-20 h-20 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg border border-white/50">
                <component 
                  :is="getServiceIcon(service.icon, service.category)" 
                  class="w-10 h-10 text-indigo-600 group-hover:text-purple-600 transition-colors duration-300"
                />
              </div>
            </div>

            <!-- Service Content -->
            <div class="space-y-6">
              <h3 class="text-2xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {{ service.title }}
              </h3>
              
              <p class="text-gray-600 leading-relaxed font-light text-base">
                {{ service.description }}
              </p>

              <!-- Service Features -->
              <ul v-if="service.features && service.features.length" class="space-y-3">
                <li 
                  v-for="feature in service.features" 
                  :key="feature"
                  class="flex items-center text-sm text-gray-700 group/item hover:text-indigo-600 transition-colors"
                >
                  <div class="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  {{ feature }}
                </li>
              </ul>

              <!-- Pricing -->
              <div v-if="service.price" class="pt-6 border-t border-gray-200/50">
                <div class="flex items-center justify-between bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-200/30">
                  <span class="text-sm text-gray-600 font-medium">Starting at</span>
                  <span class="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">${{ service.price }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Service Footer -->
          <div class="px-8 pb-8 relative z-10">
            <button class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="!loading && !error && (!services || services.length === 0)" class="text-center py-12">
        <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No Services Available</h3>
        <p class="text-gray-600">Services will be displayed here once they are added.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, h } from 'vue'
import { useFirestore } from '@/composables/useFirestore'
import { 
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  LightBulbIcon,
  ServerIcon,
  GlobeAltIcon,
  ShoppingCartIcon
} from '@heroicons/vue/24/outline'

// Firebase integration for services
const { documents: services, loading, error, fetchDocuments } = useFirestore('services')

/**
 * Get the appropriate icon component for a service
 * Returns a render function for the icon
 * @param {string} iconName - Name of the icon
 * @param {string} category - Category of the service (fallback)
 */
const getServiceIcon = (iconName, category) => {
  // Category to icon mapping for fallback
  const categoryIconMap = {
    'Development': 'web-development',
    'Design': 'ui-design', 
    'Consulting': 'consulting',
    'Web Hosting': 'web-hosting',
    'Web Services': 'web-services',
    'E-Commerce': 'ecommerce'
  }
  const icons = {
    'web-development': CodeBracketIcon,
    'mobile-development': DevicePhoneMobileIcon,
    'ui-design': PaintBrushIcon,
    'consulting': LightBulbIcon,
    'web-hosting': ServerIcon,
    'web-services': GlobeAltIcon,
    'ecommerce': ShoppingCartIcon,
    'default': CodeBracketIcon
  }

  // Use iconName if available, otherwise use category mapping, otherwise default
  const effectiveIconName = iconName || categoryIconMap[category]
  return icons[effectiveIconName] || icons.default
}

// Default services data for fallback
const defaultServices = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Full-stack web applications using modern frameworks like Vue.js, React, and Node.js.',
    icon: 'web-development',
    price: '2,000',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Performance Optimization',
      'Cross-browser Compatibility'
    ]
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: 'mobile-development',
    price: '3,000',
    features: [
      'iOS & Android',
      'React Native',
      'App Store Deployment',
      'Push Notifications'
    ]
  },
  {
    id: 'ui-design',
    title: 'UI/UX Design',
    description: 'User-centered design solutions that are both beautiful and functional.',
    icon: 'ui-design',
    price: '1,500',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Design Systems'
    ]
  }
]

// Use Firebase services or fall back to default
const displayServices = computed(() => {
  if (loading.value) return []
  if (error.value || !services.value?.length) return defaultServices
  return services.value
})

/**
 * Initialize component by fetching services from Firebase
 */
onMounted(async () => {
  try {
    // Fetch services from Firebase, ordered by creation date
    await fetchDocuments({ 
      orderBy: 'createdAt', 
      orderDirection: 'asc' 
    })
  } catch (err) {
    // Silently fall back to default services data if Firebase is not available
  }
})
</script>

<style scoped>
/* Custom Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

/* Animation Classes */
.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Animation Delays */
.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-800 {
  animation-delay: 800ms;
}

.animation-delay-1000 {
  animation-delay: 1000ms;
}

.animation-delay-2000 {
  animation-delay: 2000ms;
}
</style>