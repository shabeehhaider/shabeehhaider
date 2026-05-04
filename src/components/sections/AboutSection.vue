<template>
  <section id="about" class="section-padding relative overflow-hidden">
    <!-- Background glow -->
    <div class="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-radial from-violet-600/10 to-transparent blur-3xl pointer-events-none"></div>

    <div class="section-container relative z-10">
      <SectionTitle
        eyebrow="About Me"
        title="Crafting Interfaces"
        subtitle="Passionate front-end developer building seamless, high-performance digital products."
        class="reveal"
      >
        <template #default>
          <span style="color: var(--text-primary)">Crafting Interfaces </span>
          <span class="gradient-text">That Matter</span>
        </template>
      </SectionTitle>

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Left: Bio -->
        <div class="space-y-6 reveal-left">
          <p class="text-base leading-relaxed" style="color: var(--text-secondary)">
            I'm a Front-End Developer with <span class="text-white font-medium">4+ years of experience</span> building
            modern web applications that combine clean aesthetics with exceptional performance.
          </p>
          <p class="text-base leading-relaxed" style="color: var(--text-secondary)">
            My work spans across complex domains — from <span class="text-indigo-400 font-medium">real-time stock and crypto dashboards</span>
            to <span class="text-violet-400 font-medium">AI-powered interfaces</span> and
            <span class="text-cyan-400 font-medium">event ticketing platforms</span>.
            I care deeply about architecture, code quality, and the details that elevate good UIs to great ones.
          </p>
          <p class="text-base leading-relaxed" style="color: var(--text-secondary)">
            I thrive in collaborative environments and take ownership of every pixel, every interaction,
            and every millisecond of load time.
          </p>

          <!-- Quick facts -->
          <div class="grid grid-cols-2 gap-4 pt-4">
            <div v-for="fact in facts" :key="fact.label" class="glass rounded-xl p-4">
              <div class="text-lg font-bold gradient-text mb-1">{{ fact.value }}</div>
              <div class="text-xs" style="color: var(--text-muted)">{{ fact.label }}</div>
            </div>
          </div>
        </div>

        <!-- Right: Skills overview cards -->
        <div class="space-y-4 reveal-right">
          <div
            v-for="category in skillCategories"
            :key="category.name"
            class="glass-hover rounded-2xl p-5 group"
          >
            <div class="flex items-center gap-3 mb-4">
              <div :class="['w-9 h-9 rounded-xl flex items-center justify-center text-lg', category.bg]">
                {{ category.icon }}
              </div>
              <div>
                <h3 class="font-semibold text-sm" style="color: var(--text-primary)">{{ category.name }}</h3>
                <p class="text-xs" style="color: var(--text-muted)">{{ category.desc }}</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <Badge
                v-for="skill in category.skills"
                :key="skill.name"
                :variant="category.variant"
              >
                {{ skill.name }}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'
import Badge from '@/components/ui/Badge.vue'

const facts = [
  { value: '4+', label: 'Years of Experience' },
  { value: '20+', label: 'Projects Shipped' },
  { value: '3', label: 'Core Frameworks' },
  { value: '∞', label: 'Coffee Consumed' },
]

const skillCategories = [
  {
    name: 'Frontend Core',
    desc: 'The foundation of every project',
    icon: '⚡',
    bg: 'bg-indigo-500/15',
    variant: 'accent',
    skills: [
      { name: 'Vue.js 3' }, { name: 'React.js' }, { name: 'JavaScript (ES2023)' },
      { name: 'TypeScript' }, { name: 'HTML5' }, { name: 'CSS3' }
    ]
  },
  {
    name: 'UI & Styling',
    desc: 'Making things beautiful and responsive',
    icon: '🎨',
    bg: 'bg-violet-500/15',
    variant: 'violet',
    skills: [
      { name: 'Tailwind CSS' }, { name: 'SCSS/Sass' }, { name: 'Framer Motion' },
      { name: 'Headless UI' }, { name: 'Radix UI' }, { name: 'Figma' }
    ]
  },
  {
    name: 'Tooling & Ecosystem',
    desc: 'Modern dev workflow and tools',
    icon: '🛠',
    bg: 'bg-cyan-500/15',
    variant: 'cyan',
    skills: [
      { name: 'Vite' }, { name: 'Pinia' }, { name: 'Vue Router' },
      { name: 'Git' }, { name: 'REST APIs' }, { name: 'WebSocket' }
    ]
  },
]
</script>
