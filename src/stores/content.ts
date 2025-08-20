// Pinia store for managing portfolio content
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface AboutMe {
  title: string
  content: string
  image: string
  skills: string[]
}

interface Hero {
  title: string
  subtitle: string
  description: string
  ctaText: string
  backgroundImage: string
}

export const useContentStore = defineStore('content', () => {
  // Reactive state for portfolio content
  const aboutMe = ref<AboutMe>({
    title: 'About Me',
    content: 'I am a passionate full-stack developer with expertise in modern web technologies. I love creating innovative solutions and bringing ideas to life through code.',
    image: 'Kissel-nologo.png',
    skills: ['React', 'Vue', 'AWS', 'Laravel', 'WordPress', 'Node.js']
  })

  const hero = ref<Hero>({
    title: 'Kissel James Paalaman',
    subtitle: 'Full Stack Developer',
    description: 'Creating beautiful, functional web experiences with modern technologies.',
    ctaText: 'Get In Touch',
    backgroundImage: '/placeholder-hero.jpg'
  })

  // Actions to update content
  const updateAboutMe = (newContent: Partial<AboutMe>) => {
    aboutMe.value = { ...aboutMe.value, ...newContent }
  }

  const updateHero = (newContent: Partial<Hero>) => {
    hero.value = { ...hero.value, ...newContent }
  }

  return {
    aboutMe,
    hero,
    updateAboutMe,
    updateHero
  }
})