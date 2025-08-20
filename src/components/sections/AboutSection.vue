<template>
  <!-- About Me section with professional background -->
  <section id="about" class="py-20 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 relative overflow-hidden">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;100&quot; height=&quot;100&quot; viewBox=&quot;0 0 100 100&quot;><g fill-rule=&quot;evenodd&quot;><g fill=&quot;%236366f1&quot; fill-opacity=&quot;0.4&quot;><circle cx=&quot;10&quot; cy=&quot;10&quot; r=&quot;2&quot;/><circle cx=&quot;90&quot; cy=&quot;90&quot; r=&quot;2&quot;/><circle cx=&quot;10&quot; cy=&quot;90&quot; r=&quot;2&quot;/><circle cx=&quot;90&quot; cy=&quot;10&quot; r=&quot;2&quot;/></g></g></svg>')"></div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full animate-pulse-glow"></div>
      <div class="absolute bottom-20 right-10 w-16 h-16 bg-indigo-400/10 rounded-full animate-pulse-glow animation-delay-1000"></div>
      <div class="absolute top-40 right-20 w-12 h-12 bg-cyan-400/10 rounded-full animate-pulse-glow animation-delay-2000"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <div class="inline-block mb-4">
          <span class="text-primary-600 font-mono text-lg">></span>
          <span class="text-gray-600 font-mono text-lg ml-2">about_me.js</span>
        </div>
        <h2 class="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent mb-6 font-poppins">
          {{ aboutData.title }}
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <!-- Content Section -->
        <div class="space-y-8 animate-fade-in-up animation-delay-300">
          <!-- Description -->
          <div class="relative">
            <div class="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
            <div class="pl-8">
              <p class="text-lg text-gray-700 leading-relaxed font-light">
                {{ aboutData.content }}
              </p>
            </div>
          </div>

          <!-- Skills Preview -->
          <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              Core Technologies
            </h3>
            <div class="flex flex-wrap gap-3">
              <span 
                v-for="skill in aboutData.skills" 
                :key="skill"
                class="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200/50 hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <h4 class="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <div class="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              Get In Touch
            </h4>
            <div class="space-y-4">
              <div class="flex items-center space-x-4 group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span class="text-gray-700 font-medium">kisseljamespaalam@gmail.com</span>
              </div>
              <div class="flex items-center space-x-4 group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span class="text-gray-700 font-medium">+63 (977) 023-1063</span>
              </div>
              <div class="flex items-center space-x-4 group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <span class="text-gray-700 font-medium">Philippines, Visayas, Negros Oriental, Valencia</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Image/Visual Section -->
        <div class="flex justify-center animate-fade-in-up animation-delay-600">
          <div class="relative animate-float">
            <!-- Profile Image with Modern Design -->
            <div class="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-blue-100/50 to-indigo-200/50 backdrop-blur-sm border border-white/30 relative">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10"></div>
              <img
                v-if="aboutData.image"
                :src="getProfileImageUrl(aboutData.image)"
                :alt="aboutData.title || 'Profile'"
                class="w-full h-full object-cover relative z-10"
                @error="onImageError"
              />
              <!-- Fallback when no image -->
              <div v-else class="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative z-10">
                <div class="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Modern Stats Cards -->
            <div class="absolute -bottom-8 -right-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/30 transform hover:scale-105 transition-all duration-300">
              <div class="text-center">
                <div class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">3+</div>
                <div class="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>

            <div class="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/30 transform hover:scale-105 transition-all duration-300">
              <div class="text-center">
                <div class="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">500+</div>
                <div class="text-sm text-gray-600 font-medium">WordPress Sites</div>
              </div>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/20 rounded-full animate-pulse-glow"></div>
            <div class="absolute -bottom-4 -left-4 w-20 h-20 bg-indigo-400/20 rounded-full animate-pulse-glow animation-delay-1000"></div>
            <div class="absolute top-10 -left-8 w-16 h-16 bg-cyan-400/20 rounded-full animate-pulse-glow animation-delay-2000"></div>
            
            <!-- Orbiting Elements -->
            <div class="absolute inset-0 animate-spin-slow">
              <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
            </div>
            <div class="absolute inset-0 animate-spin-reverse">
              <div class="absolute bottom-0 right-0 transform translate-x-2 translate-y-2 w-3 h-3 bg-indigo-500 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        <span class="ml-2 text-gray-600">Loading...</span>
      </div>

      <!-- Error State -->
      <div v-if="error" class="text-center py-8">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {{ error }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useContentStore } from '@/stores/content'
import { useFirestore } from '@/composables/useFirestore'
import { useImageUpload } from '@/composables/useImageUpload'
import KisselImage from '@/assets/Kissel-nologo.png'

// Content store for local state
const contentStore = useContentStore()
const localAbout = computed(() => contentStore.aboutMe)

// Firebase integration for about content
const { document: aboutDoc, loading, error, fetchDocument, createDocument } = useFirestore('about')

// Image upload integration
const { getImageUrl } = useImageUpload()

// Computed property to use Firebase data if available, otherwise fall back to local
const aboutData = computed(() => {
  if (aboutDoc.value) {
    return {
      title: aboutDoc.value.title || localAbout.value.title,
      content: aboutDoc.value.content || localAbout.value.content,
      image: aboutDoc.value.image || localAbout.value.image,
      skills: aboutDoc.value.skills || localAbout.value.skills
    }
  }
  return localAbout.value
})

/**
 * Get profile image URL with fallback
 */
const getProfileImageUrl = (imageValue) => {
  // If no image specified, use default Kissel image
  if (!imageValue) {
    return KisselImage
  }
  
  // If it's a path to the assets folder, return the imported image
  if (imageValue.includes('Kissel-nologo.png') || imageValue.includes('/src/assets/')) {
    return KisselImage
  }
  
  // Otherwise use the image upload composable to get URL
  return getImageUrl(imageValue)
}

/**
 * Handle image error by showing default image
 */
const onImageError = (event) => {
  event.target.src = KisselImage
}

/**
 * Initialize the about document in Firebase with default data from local store
 */
const initializeAboutDocument = async () => {
  const defaultAboutData = {
    title: contentStore.aboutMe.title,
    content: contentStore.aboutMe.content,
    skills: contentStore.aboutMe.skills,
    image: contentStore.aboutMe.image
  }
  
  await createDocument('main', defaultAboutData)
}

/**
 * Initialize component by fetching about data from Firebase
 * Falls back to local store data if Firebase fails
 */
onMounted(async () => {
  try {
    // Try to fetch about data from Firebase
    // Using a fixed document ID 'main' for the about content
    await fetchDocument('main')
  } catch (err) {
    // If document doesn't exist, create it with default data from local store
    if (err.message?.includes('not found')) {
      try {
        // Initialize the about document with local store data
        await initializeAboutDocument()
      } catch (initError) {
        // If creation fails (no Firebase connection), silently fall back to local data
      }
    }
    // Silently fall back to local store data if Firebase is not available
  }
  
  // Set default profile image if none exists in local store
  if (!contentStore.aboutMe.image) {
    contentStore.updateAboutMe({ 
      ...contentStore.aboutMe, 
      image: 'Kissel-nologo.png' 
    })
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

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
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

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

/* Animation Classes */
.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-spin-reverse {
  animation: spin-reverse 15s linear infinite;
}

/* Animation Delays */
.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-1000 {
  animation-delay: 1000ms;
}

.animation-delay-2000 {
  animation-delay: 2000ms;
}
</style>