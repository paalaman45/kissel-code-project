<template>
  <div class="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <router-link 
            to="/" 
            class="flex items-center space-x-2 text-gray-900 hover:text-primary-600 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            <span class="font-medium">Back to Home</span>
          </router-link>
          
          <nav class="hidden md:flex space-x-8">
            <router-link to="/" class="text-gray-700 hover:text-primary-600 transition-colors">Home</router-link>
            <router-link to="/portfolio" class="text-gray-700 hover:text-primary-600 transition-colors">Portfolio</router-link>
            <router-link to="/#contact" class="text-gray-700 hover:text-primary-600 transition-colors">Contact</router-link>
          </nav>
        </div>
      </div>
    </header>

    <!-- Blog Section -->
    <section class="py-20 relative overflow-hidden">
      <!-- Animated Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;70&quot; height=&quot;70&quot; viewBox=&quot;0 0 70 70&quot;><g fill-rule=&quot;evenodd&quot;><g fill=&quot;%23ef767a&quot; fill-opacity=&quot;0.4&quot;><circle cx=&quot;7&quot; cy=&quot;7&quot; r=&quot;1.2&quot;/><circle cx=&quot;63&quot; cy=&quot;63&quot; r=&quot;1.2&quot;/><circle cx=&quot;7&quot; cy=&quot;63&quot; r=&quot;1.2&quot;/><circle cx=&quot;63&quot; cy=&quot;7&quot; r=&quot;1.2&quot;/></g></g></svg>')"></div>
      </div>

      <!-- Floating Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 right-10 w-28 h-28 bg-rose-400/10 rounded-full animate-pulse-glow"></div>
        <div class="absolute bottom-20 left-10 w-24 h-24 bg-slate-400/10 rounded-full animate-pulse-glow animation-delay-1000"></div>
        <div class="absolute top-40 left-20 w-20 h-20 bg-teal-400/10 rounded-full animate-pulse-glow animation-delay-2000"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Page Header -->
        <div class="text-center mb-16 animate-fade-in-up">
          <div class="inline-block mb-4">
            <span class="text-rose-500 font-mono text-lg">></span>
            <span class="text-gray-600 font-mono text-lg ml-2">blog_posts.md</span>
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent mb-6 font-poppins leading-tight pb-2">
            All Blog Posts
          </h1>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            Dive deep into web development topics, tutorials, and industry insights. Stay updated with the latest trends and best practices.
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto rounded-full mt-6"></div>
          
          <!-- Blog Count -->
          <div class="mt-8 inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
            <svg class="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span class="text-gray-700 font-medium">{{ totalBlogs }} Published Articles</span>
          </div>
        </div>

        <!-- Category Filter -->
        <div class="mb-12 flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-200">
          <button 
            @click="filterCategory = 'all'"
            :class="[
              'px-6 py-2 rounded-full font-medium transition-all duration-300',
              filterCategory === 'all' 
                ? 'bg-gradient-to-r from-rose-500 to-teal-500 text-white shadow-lg' 
                : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md'
            ]"
          >
            All Posts
          </button>
          <button 
            @click="filterCategory = 'vue.js'"
            :class="[
              'px-6 py-2 rounded-full font-medium transition-all duration-300',
              filterCategory === 'vue.js' 
                ? 'bg-gradient-to-r from-rose-500 to-teal-500 text-white shadow-lg' 
                : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md'
            ]"
          >
            Vue.js
          </button>
          <button 
            @click="filterCategory = 'performance'"
            :class="[
              'px-6 py-2 rounded-full font-medium transition-all duration-300',
              filterCategory === 'performance' 
                ? 'bg-gradient-to-r from-rose-500 to-teal-500 text-white shadow-lg' 
                : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md'
            ]"
          >
            Performance
          </button>
          <button 
            @click="filterCategory = 'typescript'"
            :class="[
              'px-6 py-2 rounded-full font-medium transition-all duration-300',
              filterCategory === 'typescript' 
                ? 'bg-gradient-to-r from-rose-500 to-teal-500 text-white shadow-lg' 
                : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md'
            ]"
          >
            TypeScript
          </button>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="flex justify-center items-center py-8">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          <span class="ml-2 text-gray-600">Loading blog posts...</span>
        </div>

        <!-- Error State -->
        <div v-if="error" class="text-center py-8">
          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {{ error }}
          </div>
        </div>

        <!-- Blog Posts Grid -->
        <div v-if="!loading && !error" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animation-delay-300">
          <article 
            v-for="(blog, index) in filteredBlogs" 
            :key="blog.id"
            class="group bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-white/30 overflow-hidden relative"
            :class="`animation-delay-${Math.min((index + 1) * 100, 800)}`"
          >
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-slate-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Blog Image -->
            <div class="aspect-w-16 aspect-h-9 bg-gradient-to-br from-rose-100 via-slate-100 to-teal-100 relative">
              <div class="w-full h-48 overflow-hidden">
                <img
                  v-if="!imageErrors[blog.id]"
                  :src="getBlogImageUrl(blog.thumbnail || blog.image)"
                  :alt="blog.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  @error="() => handleImageError(blog.id)"
                />
                <!-- Fallback when image failed to load -->
                <div v-if="imageErrors[blog.id]" class="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-100 via-slate-100 to-teal-100">
                  <div class="w-16 h-16 bg-gradient-to-br from-rose-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Blog Content -->
            <div class="p-6 relative z-10">
              <div class="flex items-center space-x-4 mb-4">
                <span class="bg-gradient-to-r from-rose-100 to-teal-100 text-rose-800 px-3 py-1 rounded-full text-xs font-medium border border-rose-200/50">
                  {{ blog.category || 'Tech' }}
                </span>
                <span class="text-gray-500 text-xs">{{ formatDate(blog.createdAt) }}</span>
              </div>
              
              <h3 class="text-lg font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-rose-600 group-hover:to-teal-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2">
                {{ blog.title }}
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 font-light">
                {{ blog.excerpt || blog.content?.substring(0, 120) + '...' }}
              </p>
              
              <div class="flex items-center justify-between pt-2">
                <div class="flex items-center space-x-2">
                  <img 
                    src="/images/Kissel-nologo.png" 
                    alt="Author profile" 
                    class="w-8 h-8 rounded-full object-cover"
                  />
                  <div class="text-xs">
                    <div class="font-medium text-gray-700">{{ blog.author || 'John Doe' }}</div>
                    <div class="text-gray-500">{{ blog.readTime || '3 min' }} read</div>
                  </div>
                </div>
                <button 
                  @click="readMore(blog)"
                  class="text-rose-600 hover:text-teal-600 font-medium text-sm transition-colors flex items-center space-x-1 group/btn"
                >
                  <span>Read More</span>
                  <svg class="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-if="!loading && !error && (!filteredBlogs || filteredBlogs.length === 0)" class="text-center py-12">
          <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">No Blog Posts Found</h3>
          <p class="text-gray-600">Try selecting a different category or check back later for new posts.</p>
        </div>
      </div>
    </section>

    <!-- Blog Post Modal -->
    <div v-if="selectedBlog" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" @click="closeBlogModal">
      <div class="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto" @click.stop>
        <div class="p-8">
          <div class="flex justify-between items-start mb-6">
            <div class="space-y-2">
              <span class="bg-gradient-to-r from-rose-100 to-teal-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium">
                {{ selectedBlog.category || 'Tech' }}
              </span>
              <h2 class="text-2xl font-bold text-gray-900">{{ selectedBlog.title }}</h2>
              <div class="flex items-center space-x-4 text-sm text-gray-500">
                <span>{{ formatDate(selectedBlog.createdAt) }}</span>
                <span>{{ selectedBlog.readTime || '5 min' }} read</span>
                <div class="flex items-center space-x-2">
                  <img 
                    src="/images/Kissel-nologo.png" 
                    alt="Author profile" 
                    class="w-6 h-6 rounded-full object-cover"
                  />
                  <span>{{ selectedBlog.author || 'John Doe' }}</span>
                </div>
              </div>
            </div>
            <button @click="closeBlogModal" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div class="prose max-w-none text-gray-600 leading-relaxed">
            <p>{{ selectedBlog.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useFirestore } from '@/composables/useFirestore'

// Set document title
onMounted(() => {
  document.title = 'Blog - Web Development Insights | John Doe'
})

// Firebase integration for blogs
const { documents: blogs, loading, error, fetchDocuments } = useFirestore('blogs')

// Track image loading errors
const imageErrors = ref({})

// Selected blog for modal
const selectedBlog = ref(null)

// Filter category
const filterCategory = ref('all')

// Default blog data for fallback
const defaultBlogs = [
  {
    id: 'blog-1',
    title: 'Building Modern Web Applications with Vue 3 and Composition API',
    excerpt: 'Explore the power of Vue 3\'s Composition API and how it revolutionizes the way we build reactive applications.',
    content: 'The Vue 3 Composition API represents a significant evolution in how we structure and organize our Vue applications. This new approach provides better logic composition, improved TypeScript support, and enhanced reusability across components. In this comprehensive guide, we\'ll explore the key concepts and practical applications of the Composition API...',
    category: 'Vue.js',
    author: 'John Doe',
    readTime: '8 min',
    createdAt: '2024-01-15',
    featured: true,
    thumbnail: 'Kissel-nologo.png',
    image: 'Kissel-nologo.png'
  },
  {
    id: 'blog-2',
    title: 'Optimizing Web Performance: A Complete Guide',
    excerpt: 'Learn essential techniques to make your web applications lightning fast and provide excellent user experiences.',
    content: 'Web performance optimization is crucial for user engagement and search engine rankings. This guide covers everything from image optimization to code splitting strategies...',
    category: 'Performance',
    author: 'John Doe',
    readTime: '6 min',
    createdAt: '2024-01-10',
    thumbnail: 'Kissel-nologo.png',
    image: 'Kissel-nologo.png'
  },
  {
    id: 'blog-3',
    title: 'Firebase Authentication in Vue Applications',
    excerpt: 'Step-by-step tutorial on implementing secure authentication using Firebase in Vue.js applications.',
    content: 'Firebase Authentication provides a complete identity solution with support for email/password, phone authentication, and federated identity providers like Google, Facebook, and Twitter...',
    category: 'Firebase',
    author: 'John Doe',
    readTime: '10 min',
    createdAt: '2024-01-05',
    thumbnail: 'Kissel-nologo.png',
    image: 'Kissel-nologo.png'
  },
  {
    id: 'blog-4',
    title: 'Responsive Design with Tailwind CSS',
    excerpt: 'Master responsive design patterns using Tailwind CSS utility classes for all device sizes.',
    content: 'Tailwind CSS makes responsive design incredibly straightforward with its mobile-first approach and intuitive breakpoint system...',
    category: 'CSS',
    author: 'John Doe',
    readTime: '7 min',
    createdAt: '2024-01-01',
    thumbnail: 'Kissel-nologo.png',
    image: 'Kissel-nologo.png'
  },
  {
    id: 'blog-5',
    title: 'TypeScript Best Practices for Vue Developers',
    excerpt: 'Enhance your Vue development workflow with TypeScript best practices and practical tips.',
    content: 'TypeScript brings static type checking to JavaScript, making it easier to catch errors early and build maintainable applications...',
    category: 'TypeScript',
    author: 'John Doe',
    readTime: '9 min',
    createdAt: '2023-12-28',
    thumbnail: 'Kissel-nologo.png',
    image: 'Kissel-nologo.png'
  },
  {
    id: 'blog-6',
    title: 'Building RESTful APIs with Node.js and Express',
    excerpt: 'Complete tutorial on creating robust and scalable REST APIs using Node.js and Express framework.',
    content: 'Building RESTful APIs is a fundamental skill for modern web developers. This tutorial will guide you through creating a complete API...',
    category: 'Node.js',
    author: 'John Doe',
    readTime: '12 min',
    createdAt: '2023-12-25',
    thumbnail: 'Kissel-nologo.png',
    image: 'Kissel-nologo.png'
  },
  {
    id: 'blog-7',
    title: 'State Management in Vue 3 with Pinia',
    excerpt: 'Learn how to manage application state effectively using Pinia, the official state management library for Vue.js.',
    content: 'Pinia provides a simpler and more intuitive API compared to Vuex, making state management in Vue applications more enjoyable...',
    category: 'Vue.js',
    author: 'John Doe',
    readTime: '7 min',
    createdAt: '2023-12-20',
    thumbnail: 'Kissel-nologo.png',
    image: 'Kissel-nologo.png'
  },
  {
    id: 'blog-8',
    title: 'Advanced CSS Grid Techniques',
    excerpt: 'Master advanced CSS Grid layouts and create complex, responsive designs with ease.',
    content: 'CSS Grid is a powerful layout system that allows you to create complex layouts with minimal code. In this article, we explore advanced techniques...',
    category: 'CSS',
    author: 'John Doe',
    readTime: '10 min',
    createdAt: '2023-12-15',
    thumbnail: 'Kissel-nologo.png',
    image: 'Kissel-nologo.png'
  }
]

// All blogs
const allBlogs = computed(() => {
  if (loading.value) return []
  if (error.value || !blogs.value?.length) return defaultBlogs
  return blogs.value.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
})

// Filtered blogs based on category
const filteredBlogs = computed(() => {
  if (filterCategory.value === 'all') return allBlogs.value
  
  return allBlogs.value.filter(blog => {
    const category = blog.category?.toLowerCase() || ''
    return category.includes(filterCategory.value.toLowerCase())
  })
})

// Total blogs count
const totalBlogs = computed(() => allBlogs.value.length)

/**
 * Get blog image URL with fallback
 */
const getBlogImageUrl = (imageValue) => {
  if (!imageValue) {
    return '/images/Kissel-nologo.png'
  }
  
  if (imageValue.startsWith('http')) {
    return imageValue
  }
  
  return `/images/${imageValue}`
}

/**
 * Handle image loading errors
 */
const handleImageError = (blogId) => {
  imageErrors.value[blogId] = true
}

/**
 * Format date string to readable format
 */
const formatDate = (dateString) => {
  if (!dateString) return 'Recent'
  
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch {
    return 'Recent'
  }
}

/**
 * Open blog post in modal
 */
const readMore = (blog) => {
  selectedBlog.value = blog
  document.body.style.overflow = 'hidden'
}

/**
 * Close blog modal
 */
const closeBlogModal = () => {
  selectedBlog.value = null
  document.body.style.overflow = 'auto'
}

/**
 * Initialize component by fetching blogs from Firebase
 */
onMounted(async () => {
  try {
    await fetchDocuments({ 
      orderBy: 'createdAt', 
      orderDirection: 'desc' 
    })
  } catch (err) {
    // Silently fall back to default blog data
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
.animation-delay-100 {
  animation-delay: 100ms;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-700 {
  animation-delay: 700ms;
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

/* Custom scrollbar for modal */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Line clamp utilities */
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>