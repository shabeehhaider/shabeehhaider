<template>
  <div class="group relative glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
       :class="project.featured ? 'border border-indigo-500/20' : ''"
       :style="project.featured ? 'box-shadow: 0 0 40px rgba(99,102,241,0.08)' : ''"
  >
    <!-- Card gradient header -->
    <div :class="['relative h-44 bg-gradient-to-br overflow-hidden', project.gradient]">
      <!-- Decorative grid -->
      <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px); background-size: 32px 32px;"></div>

      <!-- Featured badge -->
      <div v-if="project.featured" class="absolute top-4 right-4">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/80 text-white backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Featured
        </span>
      </div>

      <!-- Project type icon -->
      <div class="absolute bottom-4 left-4 flex items-end justify-between w-full pr-4">
        <div class="w-12 h-12 glass rounded-xl flex items-center justify-center text-2xl shadow-lg">
          {{ projectIcon }}
        </div>
        <Badge :variant="project.badgeVariant">{{ project.badge }}</Badge>
      </div>
    </div>

    <!-- Card Content -->
    <div class="p-6 flex flex-col flex-1">
      <!-- Status + Title -->
      <div class="flex items-start justify-between gap-3 mb-1">
        <h3 class="font-bold text-base leading-tight group-hover:text-indigo-300 transition-colors duration-200"
            style="color: var(--text-primary)">
          {{ project.title }}
        </h3>
        <span class="text-xs px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/15 shrink-0">
          {{ project.status }}
        </span>
      </div>
      <!-- Association -->
      <p v-if="project.association" class="text-xs mb-3 flex items-center gap-1.5" style="color: var(--text-muted)">
        <svg class="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
        {{ project.association }}
      </p>

      <!-- Description -->
      <p class="text-sm leading-relaxed mb-5 flex-1" style="color: var(--text-secondary)">
        {{ project.description }}
      </p>

      <!-- Features -->
      <div class="mb-5">
        <div class="text-xs font-semibold uppercase tracking-wider mb-3" style="color: var(--text-muted)">Key Features</div>
        <ul class="space-y-1.5">
          <li v-for="feature in project.features.slice(0, 3)" :key="feature"
              class="flex items-start gap-2 text-xs"
              style="color: var(--text-secondary)">
            <svg class="w-3.5 h-3.5 mt-0.5 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            {{ feature }}
          </li>
        </ul>
      </div>

      <!-- Tech Stack -->
      <div class="mb-6">
        <div class="flex flex-wrap gap-1.5">
          <span v-for="tech in project.tech" :key="tech"
                class="px-2.5 py-1 rounded-lg text-xs font-mono font-medium"
                style="background: var(--glass-bg); color: var(--text-secondary); border: 1px solid var(--glass-border)">
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-3 pt-4 border-t" style="border-color: var(--border)">
        <a :href="project.liveUrl"
           target="_blank"
           class="btn-primary flex-1 justify-center text-xs py-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Live Demo
        </a>
        <a :href="project.githubUrl"
           target="_blank"
           class="btn-ghost flex-1 justify-center text-xs py-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Badge from './Badge.vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const iconMap = {
  AI: '🤖',
  Dashboard: '📊',
  'Web App': '🚀',
  Mobile: '📱',
}

const projectIcon = computed(() => iconMap[props.project.category] || '💻')
</script>
