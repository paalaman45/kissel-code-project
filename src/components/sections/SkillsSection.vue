<template>
  <!-- Skills section displaying technical competencies -->
  <section id="skills" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Technical Skills
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Here are the technologies and tools I work with to create amazing digital experiences.
        </p>
        <div class="w-24 h-1 bg-primary-600 mx-auto rounded-full mt-4"></div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        <span class="ml-2 text-gray-600">Loading skills...</span>
      </div>

      <!-- Error State -->
      <div v-if="error" class="text-center py-8">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {{ error }}
        </div>
      </div>

      <!-- Skills Content -->
      <div v-if="!loading && !error" class="space-y-12">
        
        <!-- Skills by Category -->
        <div 
          v-for="category in groupedSkills" 
          :key="category.name"
          class="space-y-6"
        >
          <h3 class="text-2xl font-bold text-gray-900 text-center">
            {{ category.name }}
          </h3>
          
          <!-- Skills Grid for this category -->
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <div 
              v-for="skill in category.skills" 
              :key="skill.id"
              class="group bg-gray-50 hover:bg-white rounded-xl p-6 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg border border-gray-100 hover:border-primary-200"
            >
              <!-- Skill Icon/Logo -->
              <div class="mb-4 flex justify-center">
                <div class="w-16 h-16 bg-gradient-to-br from-primary-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    :src="getSkillIcon(skill.name)" 
                    :alt="skill.name + ' logo'"
                    class="w-8 h-8 object-contain"
                    @error="handleIconError"
                  />
                </div>
              </div>

              <!-- Skill Name -->
              <h4 class="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {{ skill.name }}
              </h4>

              <!-- Skill Level -->
              <div class="space-y-2">
                <div class="text-sm text-gray-600">
                  {{ skill.level }}% Proficiency
                </div>
                
                <!-- Progress Bar -->
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    class="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- Skills Summary Stats -->
        <div class="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 mt-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <div class="text-3xl font-bold text-primary-600 mb-2">
                {{ displaySkills.length }}+
              </div>
              <div class="text-gray-600">Technologies Mastered</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-primary-600 mb-2">
                {{ Object.keys(groupedSkills).length }}
              </div>
              <div class="text-gray-600">Skill Categories</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="!loading && !error && (!displaySkills || displaySkills.length === 0)" class="text-center py-12">
        <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No Skills Available</h3>
        <p class="text-gray-600">Skills will be displayed here once they are added.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, h } from 'vue'
import { useFirestore } from '@/composables/useFirestore'

// Firebase integration for skills
const { documents: skills, loading, error, fetchDocuments } = useFirestore('skills')

/**
 * Get the appropriate icon URL for a skill
 * @param {string} skillName - Name of the skill
 */
const getSkillIcon = (skillName) => {
  const normalizedName = skillName?.toLowerCase().replace(/[.\s]/g, '')
  
  const iconUrls = {
    'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'vuejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'html': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'css': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    'tailwindcss': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    'bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    'alpinejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/alpinejs/alpinejs-original.svg',
    'nodejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'mysql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'graphql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    'postgresql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'php': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
    'git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'aws': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    'wordpress': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg'
  }

  return iconUrls[normalizedName] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg'
}

/**
 * Handle icon loading errors
 */
const handleIconError = (event) => {
  event.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg'
}

// Default skills data for fallback
const defaultSkills = [
  // Frontend
  { id: 'js', name: 'JavaScript', level: 90, category: 'Frontend' },
  { id: 'ts', name: 'TypeScript', level: 85, category: 'Frontend' },
  { id: 'vue', name: 'Vue', level: 95, category: 'Frontend' },
  { id: 'react', name: 'React', level: 80, category: 'Frontend' },
  { id: 'html', name: 'HTML', level: 95, category: 'Frontend' },
  { id: 'css', name: 'CSS', level: 90, category: 'Frontend' },
  { id: 'tailwind', name: 'Tailwind', level: 88, category: 'Frontend' },
  { id: 'bootstrap', name: 'Bootstrap', level: 85, category: 'Frontend' },
  { id: 'alpine', name: 'Alpine JS', level: 75, category: 'Frontend' },
  
  // Backend
  { id: 'node', name: 'Node.js', level: 85, category: 'Backend' },
  { id: 'firebase', name: 'Firebase', level: 87, category: 'Backend' },
  { id: 'mysql', name: 'MySQL', level: 82, category: 'Backend' },
  { id: 'graphql', name: 'GraphQL', level: 78, category: 'Backend' },
  { id: 'postgresql', name: 'PostgreSQL', level: 80, category: 'Backend' },
  { id: 'php', name: 'PHP', level: 85, category: 'Backend' },
  { id: 'laravel', name: 'Laravel', level: 88, category: 'Backend' },
  
  // Tools
  { id: 'git', name: 'Git', level: 90, category: 'Tools' },
  { id: 'aws', name: 'AWS', level: 75, category: 'Tools' },
  
  // CMS
  { id: 'wordpress', name: 'WordPress', level: 95, category: 'CMS' }
]

// Use Firebase skills or fall back to default
const displaySkills = computed(() => {
  if (loading.value) return []
  if (error.value || !skills.value?.length) return defaultSkills
  return skills.value
})

// Group skills by category
const groupedSkills = computed(() => {
  const categories = {}
  
  displaySkills.value.forEach(skill => {
    const category = skill.category || 'Other'
    if (!categories[category]) {
      categories[category] = {
        name: category,
        skills: []
      }
    }
    categories[category].skills.push(skill)
  })
  
  return Object.values(categories)
})


/**
 * Initialize component by fetching skills from Firebase
 */
onMounted(async () => {
  try {
    // Fetch skills from Firebase, ordered by level (highest first)
    await fetchDocuments({ 
      orderBy: 'level', 
      orderDirection: 'desc' 
    })
  } catch (err) {
    // Silently fall back to default skills data if Firebase is not available
  }
})
</script>