<template>
  <!-- Scroll progress bar -->
  <div class="fixed top-0 left-0 right-0 z-[60] h-[2px] pointer-events-none">
    <div
      class="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400"
      :style="{ transform: `scaleX(${scrollProgress})`, transformOrigin: 'left', transition: 'none' }"
    ></div>
  </div>

  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'scrolled-nav' : 'py-5'"
  >
    <!-- Bottom border glow (only on scroll) -->
    <div
      class="absolute bottom-0 left-0 right-0 h-px pointer-events-none transition-opacity duration-300"
      :class="scrolled ? 'opacity-100' : 'opacity-0'"
      style="background: linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.4) 20%, rgba(139,92,246,0.4) 50%, rgba(99,102,241,0.4) 80%, transparent 100%)"
    ></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">

      <!-- ── Logo ── -->
      <RouterLink to="/" class="flex items-center gap-3 group shrink-0" @click="closeMenu">
        <div
          class="rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-indigo-500/40"
          :class="scrolled ? 'w-8 h-8' : 'w-9 h-9'"
        >
          <span class="text-white font-bold" :class="scrolled ? 'text-sm' : 'text-base'">S</span>
        </div>
        <div class="hidden sm:block overflow-hidden">
          <span class="font-bold tracking-tight block transition-all duration-300" :class="scrolled ? 'text-sm' : 'text-base'" style="color: var(--text-primary)">
            shabeeh<span class="gradient-text">.</span>dev
          </span>
          <span
            class="text-xs font-mono transition-all duration-300 block"
            :class="scrolled ? 'opacity-0 -mt-4 h-0' : 'opacity-60 mt-0 h-auto'"
            style="color: var(--text-muted)"
          >Front-End Developer</span>
        </div>
      </RouterLink>

      <!-- ── Desktop Nav ── -->
      <nav class="hidden md:flex items-center gap-1">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          @click.prevent="scrollTo(item.id)"
          class="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 group"
          :class="activeSection === item.id
            ? 'text-white'
            : 'text-slate-400 hover:text-white hover:bg-white/5'"
        >
          <!-- Active background -->
          <span
            v-if="activeSection === item.id"
            class="absolute inset-0 rounded-xl"
            style="background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.2)"
          ></span>
          <!-- Active underline dot -->
          <span
            v-if="activeSection === item.id"
            class="absolute -bottom-px left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-gradient-to-r from-indigo-400 to-violet-400"
          ></span>
          <span class="relative">{{ item.label }}</span>
        </a>
      </nav>

      <!-- ── Right Actions ── -->
      <div class="flex items-center gap-2 shrink-0">
        <!-- Theme toggle -->
        <button
          @click="themeStore.toggleTheme()"
          :class="['rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-white/8', scrolled ? 'w-8 h-8' : 'w-9 h-9 glass']"
          :aria-label="themeStore.isDark ? 'Light mode' : 'Dark mode'"
        >
          <svg v-if="themeStore.isDark" xmlns="http://www.w3.org/2000/svg" :class="scrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'" class="text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" :class="scrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'" class="text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>

        <!-- CTA -->
        <a
          href="#contact"
          @click.prevent="scrollTo('contact')"
          class="hidden sm:inline-flex btn-primary transition-all duration-300"
          :class="scrolled ? 'text-xs px-4 py-2' : 'text-xs px-5 py-2.5'"
        >
          Let's Talk
        </a>

        <!-- Mobile toggle -->
        <button
          @click="menuOpen = !menuOpen"
          :class="['md:hidden rounded-xl flex items-center justify-center transition-all duration-200', scrolled ? 'w-8 h-8' : 'w-9 h-9 glass']"
          aria-label="Toggle menu"
        >
          <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" style="color: var(--text-primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h10" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" style="color: var(--text-primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- ── Mobile Menu ── -->
    <Transition name="mobile-menu">
      <div
        v-if="menuOpen"
        class="md:hidden absolute top-full left-0 right-0 mt-0 border-b overflow-hidden"
        style="
          background: rgba(10,10,18,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-color: rgba(255,255,255,0.07);
        "
      >
        <nav class="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            :class="[
              'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
              activeSection === item.id
                ? 'bg-indigo-500/12 text-indigo-300 border border-indigo-500/15'
                : 'text-slate-400 hover:bg-white/5 hover:text-white'
            ]"
            @click.prevent="scrollTo(item.id); closeMenu()"
          >
            <span
              class="w-1.5 h-1.5 rounded-full shrink-0 transition-colors"
              :class="activeSection === item.id ? 'bg-indigo-400' : 'bg-slate-700'"
            ></span>
            {{ item.label }}
          </a>
          <div class="h-px my-2" style="background: rgba(255,255,255,0.06)"></div>
          <a
            href="#contact"
            @click.prevent="scrollTo('contact'); closeMenu()"
            class="btn-primary justify-center py-3 text-sm"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
const scrolled = ref(false)
const menuOpen = ref(false)
const activeSection = ref('hero')
const scrollY = ref(0)

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const scrollProgress = computed(() => {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  return docHeight > 0 ? Math.min(scrollY.value / docHeight, 1) : 0
})

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const closeMenu = () => { menuOpen.value = false }

const handleScroll = () => {
  scrollY.value = window.scrollY
  scrolled.value = window.scrollY > 60

  const sections = ['hero', ...navItems.map(i => i.id)]
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i])
    if (el && el.getBoundingClientRect().top <= 120) {
      activeSection.value = sections[i]
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.scrolled-nav {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  background: rgba(10, 10, 18, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.4), 0 1px 0 rgba(255, 255, 255, 0.04) inset;
}

.mobile-menu-enter-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.mobile-menu-leave-active {
  transition: all 0.2s ease-in;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
