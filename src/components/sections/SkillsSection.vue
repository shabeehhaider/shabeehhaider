<template>
  <section id="skills" aria-label="Skills and expertise" class="section-padding relative overflow-hidden">
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-radial from-violet-600/10 to-transparent blur-3xl pointer-events-none"></div>

    <div class="section-container relative z-10">
      <SectionTitle eyebrow="Tech Stack" class="reveal">
        <template #default>
          <span style="color: var(--text-primary)">Skills & </span>
          <span class="gradient-text">Expertise</span>
        </template>
      </SectionTitle>

      <!-- Skill category cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
        <div
          v-for="(category, i) in skillCategories"
          :key="category.name"
          class="glass-hover rounded-2xl p-4 sm:p-6 reveal"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <div class="flex items-center gap-3 mb-4 sm:mb-6">
            <div :class="['w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-lg sm:text-xl shrink-0', category.iconBg]">
              {{ category.icon }}
            </div>
            <div>
              <h3 class="font-bold text-sm" style="color: var(--text-primary)">{{ category.name }}</h3>
              <p class="text-xs" style="color: var(--text-muted)">{{ category.count }} skills</p>
            </div>
          </div>

          <div class="space-y-3 sm:space-y-4">
            <div v-for="skill in category.skills" :key="skill.name">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-xs font-medium" style="color: var(--text-secondary)">{{ skill.name }}</span>
                <span class="text-xs font-mono" :style="{ color: category.color }">{{ skill.level }}%</span>
              </div>
              <div class="h-1.5 rounded-full overflow-hidden" style="background: var(--glass-bg)">
                <div
                  class="h-full rounded-full skill-bar"
                  :style="{
                    width: animated ? `${skill.level}%` : '0%',
                    background: category.gradient,
                    transitionDelay: `${i * 80 + 200}ms`
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools grid -->
      <div class="reveal">
        <div class="flex items-center gap-3 mb-4 sm:mb-6">
          <span class="text-xs font-semibold uppercase tracking-widest whitespace-nowrap" style="color: var(--text-muted)">Tools & Technologies</span>
          <div class="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
        </div>
        <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 sm:gap-3">
          <div
            v-for="tool in tools"
            :key="tool.name"
            class="glass-hover rounded-xl p-2 sm:p-3 flex flex-col items-center gap-1 sm:gap-2 group"
          >
            <span class="text-xl sm:text-2xl group-hover:scale-125 transition-transform duration-200">{{ tool.icon }}</span>
            <span class="text-xs text-center font-medium leading-tight" style="color: var(--text-muted)">{{ tool.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const animated = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => { animated.value = true }, 300)
        observer.disconnect()
      }
    },
    { threshold: 0.1 }
  )
  const section = document.getElementById('skills')
  if (section) observer.observe(section)
})

const skillCategories = [
  {
    name: 'Frontend Frameworks',
    icon: '⚡',
    iconBg: 'bg-indigo-500/15',
    color: '#6366f1',
    gradient: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
    count: 4,
    skills: [
      { name: 'Vue.js 3', level: 95 },
      { name: 'React.js', level: 90 },
      { name: 'React Native', level: 80 },
      { name: 'Nuxt.js', level: 78 },
    ]
  },
  {
    name: 'Core Languages',
    icon: '🔷',
    iconBg: 'bg-cyan-500/15',
    color: '#06b6d4',
    gradient: 'linear-gradient(90deg, #06b6d4, #6366f1)',
    count: 4,
    skills: [
      { name: 'JavaScript (ES2023)', level: 96 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML5', level: 98 },
      { name: 'CSS3 / SCSS', level: 95 },
    ]
  },
  {
    name: 'UI & Styling',
    icon: '🎨',
    iconBg: 'bg-violet-500/15',
    color: '#8b5cf6',
    gradient: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
    count: 4,
    skills: [
      { name: 'Tailwind CSS', level: 97 },
      { name: 'SCSS / Sass', level: 92 },
      { name: 'CSS Animations', level: 90 },
      { name: 'Figma → Code', level: 88 },
    ]
  },
  {
    name: 'State & Data',
    icon: '🗄',
    iconBg: 'bg-emerald-500/15',
    color: '#10b981',
    gradient: 'linear-gradient(90deg, #10b981, #06b6d4)',
    count: 4,
    skills: [
      { name: 'Pinia', level: 93 },
      { name: 'Redux / RTK', level: 88 },
      { name: 'REST API', level: 92 },
      { name: 'WebSocket', level: 82 },
    ]
  },
  {
    name: 'Build & Performance',
    icon: '🔧',
    iconBg: 'bg-amber-500/15',
    color: '#f59e0b',
    gradient: 'linear-gradient(90deg, #f59e0b, #f97316)',
    count: 4,
    skills: [
      { name: 'Vite', level: 94 },
      { name: 'Webpack', level: 78 },
      { name: 'Performance Opt.', level: 88 },
      { name: 'Core Web Vitals', level: 85 },
    ]
  },
  {
    name: 'Workflow & DevOps',
    icon: '🔄',
    iconBg: 'bg-rose-500/15',
    color: '#f43f5e',
    gradient: 'linear-gradient(90deg, #f43f5e, #8b5cf6)',
    count: 4,
    skills: [
      { name: 'Git / GitHub', level: 93 },
      { name: 'CI/CD Pipelines', level: 72 },
      { name: 'Docker Basics', level: 65 },
      { name: 'Agile / Scrum', level: 90 },
    ]
  },
]

const tools = [
  { name: 'Vue.js', icon: '💚' },
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'Vite', icon: '⚡' },
  { name: 'Git', icon: '🌿' },
  { name: 'Figma', icon: '🖼' },
  { name: 'Pinia', icon: '🍍' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Stripe', icon: '💳' },
  { name: 'WebSocket', icon: '🔌' },
  { name: 'Jest', icon: '✅' },
  { name: 'Docker', icon: '🐳' },
  { name: 'VS Code', icon: '💻' },
  { name: 'Postman', icon: '📮' },
]
</script>

<style scoped>
.skill-bar {
  transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
