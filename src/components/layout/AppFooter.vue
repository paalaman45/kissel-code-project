<template>
  <!-- Footer component with social links and contact information -->
  <footer class="relative overflow-hidden bg-gradient-to-br from-secondary-900 via-gray-900 to-secondary-800">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot;><g fill-rule=&quot;evenodd&quot;><g fill=&quot;%23ef767a&quot; fill-opacity=&quot;0.3&quot;><circle cx=&quot;6&quot; cy=&quot;6&quot; r=&quot;1&quot;/><circle cx=&quot;54&quot; cy=&quot;54&quot; r=&quot;1&quot;/><circle cx=&quot;6&quot; cy=&quot;54&quot; r=&quot;1&quot;/><circle cx=&quot;54&quot; cy=&quot;6&quot; r=&quot;1&quot;/></g></g></svg>')"></div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-10 right-20 w-32 h-32 bg-primary-500/10 rounded-full animate-pulse-glow"></div>
      <div class="absolute bottom-20 left-10 w-24 h-24 bg-accent-500/10 rounded-full animate-pulse-glow animation-delay-1000"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
        
        <!-- Brand Section -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Logo -->
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent font-poppins">
              Kissel Code
            </h3>
          </div>
          
          <p class="text-gray-300 max-w-md text-lg leading-relaxed font-light">
            Full-stack developer passionate about creating innovative web solutions 
            and bringing ideas to life through clean, efficient code.
          </p>

          <!-- Get in Touch Button -->
          <div class="pt-4">
            <button
              @click="scrollToContact"
              class="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 font-poppins"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              <span>Get in Touch</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-6">
          <h4 class="text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent font-poppins flex items-center">
            <svg class="w-5 h-5 text-primary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
            </svg>
            Quick Links
          </h4>
          <ul class="space-y-3">
            <li>
              <a 
                href="#about" 
                class="flex items-center text-gray-300 hover:text-primary-400 transition-all duration-300 transform hover:translate-x-2 font-poppins group"
              >
                <svg class="w-4 h-4 mr-3 text-primary-500/70 group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                About Me
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                class="flex items-center text-gray-300 hover:text-primary-400 transition-all duration-300 transform hover:translate-x-2 font-poppins group"
              >
                <svg class="w-4 h-4 mr-3 text-primary-500/70 group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
                Services
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                class="flex items-center text-gray-300 hover:text-primary-400 transition-all duration-300 transform hover:translate-x-2 font-poppins group"
              >
                <svg class="w-4 h-4 mr-3 text-primary-500/70 group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#work" 
                class="flex items-center text-gray-300 hover:text-primary-400 transition-all duration-300 transform hover:translate-x-2 font-poppins group"
              >
                <svg class="w-4 h-4 mr-3 text-primary-500/70 group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                Work
              </a>
            </li>
            <li>
              <a 
                href="#blogs" 
                class="flex items-center text-gray-300 hover:text-primary-400 transition-all duration-300 transform hover:translate-x-2 font-poppins group"
              >
                <svg class="w-4 h-4 mr-3 text-primary-500/70 group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Blog
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact & Social -->
        <div class="space-y-6">
          <h4 class="text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent font-poppins flex items-center">
            <svg class="w-5 h-5 text-primary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            Connect
          </h4>
          <div class="space-y-4 text-gray-300">
            <div class="flex items-start space-x-3 group">
              <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all duration-300">
                <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-400 font-poppins">Email</p>
                <a 
                  :href="`mailto:${envConfig.contact.email}`" 
                  class="text-gray-300 hover:text-primary-400 transition-all duration-300 transform hover:translate-x-1 font-poppins break-all"
                >
                  {{ envConfig.contact.email }}
                </a>
              </div>
            </div>
            <div class="flex items-start space-x-3 group">
              <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all duration-300">
                <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-400 font-poppins">Phone</p>
                <a 
                  :href="`tel:${envConfig.contact.phone}`" 
                  class="text-gray-300 hover:text-primary-400 transition-all duration-300 transform hover:translate-x-1 font-poppins"
                >
                  {{ envConfig.contact.phone }}
                </a>
              </div>
            </div>
          </div>

          <!-- Social Media Links -->
          <div class="pt-4 border-t border-gray-800">
            <p class="text-sm text-gray-400 mb-4 font-poppins">Follow me on social media</p>
            <div class="flex space-x-4">
              <a 
                :href="envConfig.social.github" 
                target="_blank"
                rel="noopener noreferrer"
                class="group w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center hover:from-primary-500/20 hover:to-accent-500/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-primary-500/25 border border-gray-700 hover:border-primary-500/50"
                aria-label="GitHub"
              >
                <svg class="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a 
                :href="envConfig.social.linkedin" 
                target="_blank"
                rel="noopener noreferrer"
                class="group w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center hover:from-primary-500/20 hover:to-accent-500/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-primary-500/25 border border-gray-700 hover:border-primary-500/50"
                aria-label="LinkedIn"
              >
                <svg class="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                :href="envConfig.social.instagram" 
                target="_blank"
                rel="noopener noreferrer"
                class="group w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center hover:from-primary-500/20 hover:to-accent-500/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-primary-500/25 border border-gray-700 hover:border-primary-500/50"
                aria-label="Instagram"
              >
                <svg class="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-800/50 mt-12 pt-8 text-center">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-400 font-poppins">
            &copy; {{ currentYear }} <span class="text-primary-400 font-semibold">Kissel Code</span>. All rights reserved.
          </p>
          <div class="flex items-center space-x-4 text-sm text-gray-500">
            <span class="font-poppins">Built with</span>
            <div class="flex items-center space-x-1">
              <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
              <span class="text-gray-400 font-poppins">Vue.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useEnvConfig } from '@/composables/useEnvConfig'

// Get environment configuration
const envConfig = useEnvConfig()

// Get current year for copyright
const currentYear = computed(() => new Date().getFullYear())

/**
 * Scroll to contact section
 */
const scrollToContact = () => {
  const aboutSection = document.getElementById('about')
  if (aboutSection) {
    // Find the contact info within the about section
    const contactInfo = aboutSection.querySelector('.space-y-4')
    if (contactInfo) {
      contactInfo.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      })
    } else {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}
</script>