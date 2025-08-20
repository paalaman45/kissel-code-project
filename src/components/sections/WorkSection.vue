<template>
  <!-- Work/Portfolio section displaying projects -->
  <section id="work" class="py-20 bg-gradient-to-br from-accent-50 via-secondary-50 to-primary-50 relative overflow-hidden">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;90&quot; height=&quot;90&quot; viewBox=&quot;0 0 90 90&quot;><g fill-rule=&quot;evenodd&quot;><g fill=&quot;%2306b6d4&quot; fill-opacity=&quot;0.4&quot;><circle cx=&quot;9&quot; cy=&quot;9&quot; r=&quot;1.5&quot;/><circle cx=&quot;81&quot; cy=&quot;81&quot; r=&quot;1.5&quot;/><circle cx=&quot;9&quot; cy=&quot;81&quot; r=&quot;1.5&quot;/><circle cx=&quot;81&quot; cy=&quot;9&quot; r=&quot;1.5&quot;/></g></g></svg>')"></div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-32 h-32 bg-emerald-400/10 rounded-full animate-pulse-glow"></div>
      <div class="absolute bottom-20 right-10 w-24 h-24 bg-teal-400/10 rounded-full animate-pulse-glow animation-delay-1000"></div>
      <div class="absolute top-40 right-20 w-20 h-20 bg-cyan-400/10 rounded-full animate-pulse-glow animation-delay-2000"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <div class="inline-block mb-4">
          <span class="text-emerald-600 font-mono text-lg">></span>
          <span class="text-gray-600 font-mono text-lg ml-2">portfolio.ts</span>
        </div>
        <h2 class="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent mb-6 font-poppins">
          My Work
        </h2>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
          Here are some of the projects I've worked on, showcasing my skills and expertise in modern web development and innovative solutions.
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto rounded-full mt-6"></div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        <span class="ml-2 text-gray-600">Loading projects...</span>
      </div>

      <!-- Error State -->
      <div v-if="error" class="text-center py-8">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {{ error }}
        </div>
      </div>

      <!-- Projects Grid -->
      <div v-if="!loading && !error" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animation-delay-300">
        
        <div 
          v-for="(project, index) in displayProjects" 
          :key="project.id"
          class="group bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-white/30 overflow-hidden relative"
          :class="`animation-delay-${(index + 1) * 200}`"
        >
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <!-- Project Image -->
          <div class="aspect-w-16 aspect-h-10 bg-gradient-to-br from-emerald-100 to-cyan-100 relative">
            <div class="w-full h-56 overflow-hidden relative">
              <img
                v-if="project.image && !imageErrors[project.id]"
                :src="getProjectImageUrl(project.image)"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                @error="() => handleImageError(project.id)"
              />
              <!-- Fallback when no image or image failed to load -->
              <div v-if="!project.image || imageErrors[project.id]" class="w-full h-full bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 flex items-center justify-center">
                <div class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
              </div>
              
              <!-- Overlay with project info -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="flex items-center justify-between">
                    <span class="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
                      {{ project.category || 'Web Development' }}
                    </span>
                    <a
                      v-if="project.projectLink"
                      :href="project.projectLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors border border-white/30"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Project Content -->
          <div class="p-6 relative z-10">
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {{ project.title }}
            </h3>
            
            <p class="text-gray-600 leading-relaxed mb-4 line-clamp-3 font-light">
              {{ project.description }}
            </p>
            
            <!-- Project Link -->
            <div class="flex items-center justify-between pt-4">
              <a
                v-if="project.projectLink"
                :href="project.projectLink"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 space-x-2"
              >
                <span>View Project</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </a>
              <div v-else class="text-gray-400 text-sm font-medium bg-gray-100 px-4 py-2 rounded-xl">
                Preview Only
              </div>
              
              <!-- Category Badge (shown when not hovering) -->
              <div class="group-hover:opacity-0 transition-opacity">
                <span class="bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium border border-emerald-200/50">
                  {{ project.category || 'Web Development' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div v-if="displayProjects.length >= 6" class="text-center mt-12">
        <button class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
          View More Projects
        </button>
      </div>

      <!-- Empty State -->
      <div v-if="!loading && !error && (!displayProjects || displayProjects.length === 0)" class="text-center py-12">
        <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No Projects Available</h3>
        <p class="text-gray-600">Projects will be displayed here once they are added.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useFirestore } from '@/composables/useFirestore'
import { useImageUpload } from '@/composables/useImageUpload'

// Firebase integration for work projects
const { documents: projects, loading, error, fetchDocuments } = useFirestore('work')

// Image upload integration
const { getImageUrl } = useImageUpload()

// Track image loading errors
const imageErrors = ref({})

// Default projects data for fallback
const defaultProjects = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Vue.js, Node.js, and MySQL. Features include product catalog, shopping cart, payment integration, and admin dashboard.',
    category: 'Web Development',
    projectLink: 'https://example.com',
    image: null
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, built using Vue 3, Firebase, and Tailwind CSS. Supports team collaboration and project tracking.',
    category: 'Web App',
    projectLink: 'https://example.com',
    image: null
  },
  {
    id: 'project-3',
    title: 'WordPress Custom Theme',
    description: 'Custom WordPress theme development for a corporate website with responsive design, SEO optimization, and custom post types. Built with PHP and advanced CSS.',
    category: 'WordPress',
    projectLink: 'https://example.com',
    image: null
  },
  {
    id: 'project-4',
    title: 'Restaurant Booking System',
    description: 'Online reservation system for restaurants with table management, customer notifications, and admin panel. Built with Laravel and Vue.js.',
    category: 'Web Development',
    projectLink: 'https://example.com',
    image: null
  },
  {
    id: 'project-5',
    title: 'Portfolio Website',
    description: 'Responsive portfolio website showcasing creative work with smooth animations and modern design. Built with HTML5, CSS3, and JavaScript.',
    category: 'Frontend',
    projectLink: 'https://example.com',
    image: null
  },
  {
    id: 'project-6',
    title: 'API Integration Dashboard',
    description: 'Dashboard for monitoring and managing third-party API integrations with real-time data visualization and analytics.',
    category: 'Web App',
    projectLink: 'https://example.com',
    image: null
  }
]

// Use Firebase projects or fall back to default
const displayProjects = computed(() => {
  if (loading.value) return []
  if (error.value || !projects.value?.length) return defaultProjects
  return projects.value.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
})

/**
 * Get project image URL with fallback
 */
const getProjectImageUrl = (imageValue) => {
  if (!imageValue) return null
  return getImageUrl(imageValue)
}

/**
 * Handle image loading errors
 */
const handleImageError = (projectId) => {
  imageErrors.value[projectId] = true
}

/**
 * Initialize component by fetching projects from Firebase
 */
onMounted(async () => {
  try {
    // Fetch projects from Firebase, ordered by creation date (newest first)
    await fetchDocuments({ 
      orderBy: 'createdAt', 
      orderDirection: 'desc' 
    })
  } catch (err) {
    // Silently fall back to default projects data if Firebase is not available
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

/* Line clamp utility */
.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>