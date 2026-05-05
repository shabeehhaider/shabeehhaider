<template>
  <section id="projects" class="section-padding relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-indigo-600/8 to-transparent blur-3xl"></div>
    </div>

    <div class="section-container relative z-10">
      <SectionTitle eyebrow="Selected Work" class="reveal">
        <template #default>
          <span style="color: var(--text-primary)">Projects That </span>
          <span class="gradient-text">Ship Results</span>
        </template>
      </SectionTitle>

      <!-- Filter Tags -->
      <div class="flex flex-wrap gap-3 mb-12 reveal">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="activeFilter = filter"
          :class="[
            'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
            activeFilter === filter
              ? 'bg-indigo-500 text-white'
              : 'glass text-slate-400 hover:text-white hover:border-indigo-500/30'
          ]"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Projects Grid -->
      <TransitionGroup
        tag="div"
        name="project-list"
        class="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'

const activeFilter = ref('All')

const filters = ['All', 'AI', 'Dashboard', 'Web App']

const projects = [
  {
    id: 1,
    title: 'HR AI Assistant',
    description: 'Secure and scalable front-end dashboard for an AI-powered enterprise HR platform. Built real-time data visualization and user-centric analytics to simplify complex datasets and enable efficient monitoring, reporting, and decision-making.',
    category: 'AI',
    gradient: 'from-indigo-500/20 via-violet-500/10 to-transparent',
    features: [
      'Real-time data visualization & analytics',
      'Intuitive UI components for complex datasets',
      'Monitoring, reporting & decision dashboards',
      'Reusable component architecture',
      'Responsive & performance-optimized'
    ],
    tech: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Pinia', 'REST APIs'],
    badge: 'AI Enterprise',
    badgeVariant: 'accent',
    liveUrl: 'https://seec.newera.ai/dashboard',
    githubUrl: '#',
    status: 'Production',
    featured: true,
    association: 'Jami Partners · Newera.ai'
  },
  {
    id: 2,
    title: 'GRC-CAIA',
    description: 'Modern AI-driven platform for Newera.ai focused on enterprise and government solutions. Built to move organizations from proof-of-concept to production with secure, scalable deployments and complex AI workflow interfaces.',
    category: 'AI',
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    features: [
      'Enterprise & government AI solution interface',
      'Custom AI system deployment workflows',
      'High-performance, responsive front-end',
      'Pixel-perfect UI with modern JS frameworks',
      'Scalable reusable component system'
    ],
    tech: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Pinia'],
    badge: 'AI Platform',
    badgeVariant: 'violet',
    liveUrl: 'https://grc.newera.ai/',
    githubUrl: '#',
    status: 'Production',
    featured: true,
    association: 'Jami Partners · Newera.ai'
  },
  {
    id: 3,
    title: 'Analytics Trader Verse',
    description: 'Cross-platform stock and crypto trading analytics application with real-time market data, portfolio tracking, and advanced charting built with React Native and Redux.',
    category: 'Dashboard',
    gradient: 'from-emerald-500/20 via-cyan-500/10 to-transparent',
    features: [
      'Real-time market data feeds',
      'Multi-asset portfolio tracking',
      'Advanced charting & indicators',
      'Cross-platform iOS & Android',
      'State management with Redux'
    ],
    tech: ['React Native', 'Redux.js', 'JavaScript', 'REST APIs', 'CSS-in-JS'],
    badge: 'FinTech',
    badgeVariant: 'success',
    liveUrl: 'https://traderverse.io/',
    githubUrl: '#',
    status: 'Live',
    association: 'Office Field'
  },
  {
    id: 4,
    title: 'First Key Homes',
    description: 'Client-facing real estate web platform developed in collaboration with a backend team and QA. Delivered responsive, accessible front-end components meeting strict client requirements within tight deadlines.',
    category: 'Web App',
    gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
    features: [
      'Responsive property listing UI',
      'Cross-team collaboration (FE, BE, QA)',
      'Client requirements delivered on time',
      'Git-based version control workflow',
      'Cross-browser compatible interfaces'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'Responsive Design'],
    badge: 'Client Project',
    badgeVariant: 'default',
    liveUrl: 'https://firstkeyhomes.com',
    githubUrl: '#',
    status: 'Live',
    association: 'RIKSOF'
  },
  {
    id: 5,
    title: 'Dr. Asif Zaidi — Medical Portfolio',
    description: 'Professional portfolio website for Dr. Syed Asif Raza Zaidi, a gastroenterologist and hepatologist based in Lahore. Features a full-screen hero, 15-service grid, YouTube video gallery with modal playback, clinic locations, and testimonials.',
    category: 'Web App',
    gradient: 'from-cyan-500/20 via-teal-500/10 to-transparent',
    features: [
      'YouTube API video gallery with modal playback',
      '15-service grid with icons',
      'Four clinic locations section',
      'Testimonial carousel',
      'Scroll-triggered fade-in animations'
    ],
    tech: ['Vue 3', 'Vite', 'Tailwind CSS', 'Pinia', 'Vue Router', 'YouTube API'],
    badge: 'Freelance',
    badgeVariant: 'cyan',
    liveUrl: 'https://www.drasifzaidi1.com/',
    githubUrl: 'https://github.com/shabeehhaider/dr-asif-portfolio',
    status: 'Live',
  },
  {
    id: 6,
    title: 'Moiz Portfolio',
    description: 'Clean and modern personal portfolio website built for a client using Vue 3 and Vite. Showcases professional work, skills, and projects with smooth animations and a responsive layout.',
    category: 'Web App',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    features: [
      'Modern personal portfolio design',
      'Smooth scroll animations',
      'Responsive mobile-first layout',
      'Vue 3 Composition API',
      'Vite-powered fast builds'
    ],
    tech: ['Vue 3', 'Vite', 'JavaScript', 'CSS3'],
    badge: 'Freelance',
    badgeVariant: 'warning',
    liveUrl: 'https://portfolio-moiz-lilac.vercel.app',
    githubUrl: 'https://github.com/shabeehhaider/Moiz-web',
    status: 'Live',
  },
  {
    id: 7,
    title: 'Trendbell',
    description: 'Modern web application built with Vue 3, Vite, and Tailwind CSS. Focuses on clean UI, component-based architecture, and a smooth user experience with a mobile-first responsive design.',
    category: 'Web App',
    gradient: 'from-violet-500/20 via-fuchsia-500/10 to-transparent',
    features: [
      'Vue 3 Composition API architecture',
      'Tailwind CSS utility-first styling',
      'Component-based reusable design',
      'Mobile-first responsive layout',
      'Vite for optimized builds'
    ],
    tech: ['Vue 3', 'Vite', 'Tailwind CSS', 'JavaScript', 'CSS3'],
    badge: 'Freelance',
    badgeVariant: 'violet',
    liveUrl: 'https://trendbell.vercel.app',
    githubUrl: 'https://github.com/shabeehhaider/trendbell',
    status: 'Live',
  },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter(p => p.category === activeFilter.value)
})
</script>

<style scoped>
.project-list-enter-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.project-list-leave-active {
  transition: all 0.25s ease-in;
  position: absolute;
}
.project-list-enter-from {
  opacity: 0;
  transform: scale(0.95) translateY(12px);
}
.project-list-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.project-list-move {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
