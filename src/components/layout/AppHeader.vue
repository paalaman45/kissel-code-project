<template>
  <!-- Navigation header component -->
  <header class="bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo/Brand with modern design -->
        <div class="flex-shrink-0">
          <router-link 
            to="/" 
            class="flex items-center space-x-2 group"
          >
            <!-- Logo Icon -->
            <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <!-- Logo Text -->
            <span class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent font-poppins group-hover:scale-105 transition-transform duration-300">
              Kissel Code
            </span>
          </router-link>
        </div>

        <!-- Desktop Navigation with modern styling -->
        <div class="hidden lg:block">
          <div class="flex items-center space-x-1 bg-secondary-50/50 backdrop-blur-sm rounded-full px-2 py-2 border border-white/30">
            <a 
              href="#hero" 
              class="nav-link active"
              @click="setActiveLink"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Home
            </a>
            <a 
              href="#about" 
              class="nav-link"
              @click="setActiveLink"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              About
            </a>
            <a 
              href="#services" 
              class="nav-link"
              @click="setActiveLink"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
              Services
            </a>
            <a 
              href="#skills" 
              class="nav-link"
              @click="setActiveLink"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Skills
            </a>
            <a 
              href="#work" 
              class="nav-link"
              @click="setActiveLink"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              Work
            </a>
            <a 
              href="#blogs" 
              class="nav-link"
              @click="setActiveLink"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Blog
            </a>
          </div>
        </div>

        <!-- Get in Touch Button & Mobile Menu -->
        <div class="flex items-center space-x-4">
          <!-- Get in Touch Button -->
          <a
            href="#about"
            class="hidden md:flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 font-poppins"
            @click="scrollToContact"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            <span>Get in Touch</span>
          </a>

          <!-- Mobile menu button -->
          <button
            @click="toggleMobileMenu"
            class="lg:hidden bg-secondary-100/50 backdrop-blur-sm inline-flex items-center justify-center p-2.5 rounded-xl text-secondary-600 hover:text-secondary-800 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-all duration-300 border border-white/30"
          >
            <svg 
              :class="{ 'hidden': mobileMenuOpen, 'block': !mobileMenuOpen }"
              class="h-5 w-5" 
              stroke="currentColor" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }"
              class="h-5 w-5" 
              stroke="currentColor" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <div 
        :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }"
        class="lg:hidden"
      >
        <div class="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-200/50">
          <a 
            href="#hero" 
            @click="closeMobileMenu"
            class="mobile-nav-link"
          >
            <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            Home
          </a>
          <a 
            href="#about" 
            @click="closeMobileMenu"
            class="mobile-nav-link"
          >
            <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            About
          </a>
          <a 
            href="#services" 
            @click="closeMobileMenu"
            class="mobile-nav-link"
          >
            <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
            </svg>
            Services
          </a>
          <a 
            href="#skills" 
            @click="closeMobileMenu"
            class="mobile-nav-link"
          >
            <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            Skills
          </a>
          <a 
            href="#work" 
            @click="closeMobileMenu"
            class="mobile-nav-link"
          >
            <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
            Work
          </a>
          <a 
            href="#blogs" 
            @click="closeMobileMenu"
            class="mobile-nav-link"
          >
            <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Blog
          </a>
          
          <!-- Mobile Get in Touch Button -->
          <div class="pt-4 border-t border-gray-200/50">
            <a
              href="#about"
              @click="scrollToContact"
              class="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 font-poppins w-full"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Mobile menu state
const mobileMenuOpen = ref(false)
const activeSection = ref('hero')

/**
 * Toggle mobile menu visibility
 */
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

/**
 * Close mobile menu
 */
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

/**
 * Set active link on click
 */
const setActiveLink = (event) => {
  const href = event.target.getAttribute('href')
  if (href) {
    activeSection.value = href.replace('#', '')
  }
}

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
  closeMobileMenu()
}

/**
 * Update active section based on scroll position
 */
const updateActiveSection = () => {
  const sections = ['hero', 'about', 'services', 'skills', 'work', 'blogs']
  const scrollPosition = window.scrollY + 100

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const offsetTop = element.offsetTop
      const offsetHeight = element.offsetHeight
      
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section
        break
      }
    }
  }
}

// Add scroll listener on mount
onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection() // Set initial active section
})

// Remove scroll listener on unmount
onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<style scoped>
/* Navigation Link Styles */
.nav-link {
  @apply flex items-center px-4 py-2.5 text-sm font-medium text-secondary-600 hover:text-primary-600 hover:bg-white/60 rounded-full transition-all duration-300 font-poppins;
}

.nav-link.active {
  @apply text-primary-600 bg-white/80 shadow-sm border border-white/50;
}

.nav-link:hover {
  @apply transform scale-105 shadow-md;
}

/* Mobile Navigation Link Styles */
.mobile-nav-link {
  @apply flex items-center px-4 py-3 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-xl transition-all duration-300 font-poppins;
}

.mobile-nav-link:hover {
  @apply transform translate-x-1;
}

/* Header blur effect on scroll */
@supports (backdrop-filter: blur(10px)) {
  header {
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }
}

/* Mobile menu slide animation */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease-in-out;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>