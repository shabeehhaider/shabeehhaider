<template>
  <section id="hero" class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Radial glow top center -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-radial from-indigo-600/20 via-violet-600/10 to-transparent blur-3xl"></div>
      <!-- Bottom right orb -->
      <div class="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-gradient-radial from-violet-600/15 to-transparent blur-3xl"></div>
      <!-- Grid lines -->
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 64px 64px;"></div>
    </div>

    <div class="section-container relative z-10 pt-32 pb-20">
      <div class="max-w-4xl">
        <!-- Status Badge -->
        <div class="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span class="text-xs font-medium" style="color: var(--text-secondary)">Available for new opportunities</span>
        </div>

        <!-- Main Heading -->
        <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-[0.95] animate-slide-up">
          <span style="color: var(--text-primary)">Front-End</span><br />
          <span class="gradient-text">Developer</span>
        </h1>

        <!-- Name + Title -->
        <div class="flex items-center gap-3 mb-6 animate-slide-up animate-delay-100">
          <div class="h-px w-8 bg-indigo-500/60"></div>
          <p class="font-mono text-sm tracking-widest uppercase" style="color: var(--text-muted)">
            Shabeeh · 4+ Years Experience
          </p>
        </div>

        <!-- Description -->
        <p class="text-lg md:text-xl leading-relaxed max-w-2xl mb-10 animate-slide-up animate-delay-200" style="color: var(--text-secondary)">
          I build high-performance web applications with pixel-perfect UIs. Specializing in
          <span class="text-indigo-400 font-medium">Vue.js</span>,
          <span class="text-violet-400 font-medium">React</span>, and
          <span class="text-cyan-400 font-medium">scalable front-end architectures</span> —
          from AI dashboards to real-time trading platforms.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4 mb-16 animate-slide-up animate-delay-300">
          <a href="#projects" @click.prevent="scrollTo('projects')" class="btn-primary text-sm px-7 py-3.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0l-7 7m7-7l-7-7" />
            </svg>
            View Work
          </a>
          <a href="#contact" @click.prevent="scrollTo('contact')" class="btn-ghost text-sm px-7 py-3.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact Me
          </a>
          <a href="/resume.pdf" target="_blank" class="btn-ghost text-sm px-7 py-3.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </div>

        <!-- Stats -->
        <div class="flex flex-wrap gap-8 animate-slide-up animate-delay-400">
          <div v-for="stat in stats" :key="stat.label" class="flex flex-col gap-1">
            <span class="text-3xl font-black gradient-text">{{ stat.value }}</span>
            <span class="text-xs uppercase tracking-widest font-medium" style="color: var(--text-muted)">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span class="text-xs tracking-widest uppercase font-mono" style="color: var(--text-muted)">scroll</span>
      <div class="w-px h-8 bg-gradient-to-b from-indigo-500/60 to-transparent"></div>
    </div>

    <!-- Floating code snippet decoration -->
    <div class="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block animate-float">
      <div class="glass rounded-2xl p-5 font-mono text-xs leading-relaxed w-72 shadow-2xl">
        <div class="flex items-center gap-2 mb-4">
          <div class="w-3 h-3 rounded-full bg-red-400/60"></div>
          <div class="w-3 h-3 rounded-full bg-amber-400/60"></div>
          <div class="w-3 h-3 rounded-full bg-emerald-400/60"></div>
          <span class="ml-2 text-slate-500 text-xs">portfolio.vue</span>
        </div>
        <div class="space-y-1">
          <div><span class="text-violet-400">const</span> <span class="text-cyan-300">dev</span> <span class="text-slate-400">= {</span></div>
          <div class="pl-4"><span class="text-indigo-300">name</span><span class="text-slate-400">: </span><span class="text-emerald-300">'Shabeeh'</span><span class="text-slate-400">,</span></div>
          <div class="pl-4"><span class="text-indigo-300">role</span><span class="text-slate-400">: </span><span class="text-emerald-300">'Front-End Dev'</span><span class="text-slate-400">,</span></div>
          <div class="pl-4"><span class="text-indigo-300">exp</span><span class="text-slate-400">: </span><span class="text-amber-300">4</span><span class="text-slate-400">,</span></div>
          <div class="pl-4"><span class="text-indigo-300">stack</span><span class="text-slate-400">: [</span></div>
          <div class="pl-8"><span class="text-emerald-300">'Vue.js'</span><span class="text-slate-400">,</span></div>
          <div class="pl-8"><span class="text-emerald-300">'React'</span><span class="text-slate-400">,</span></div>
          <div class="pl-8"><span class="text-emerald-300">'TypeScript'</span></div>
          <div class="pl-4"><span class="text-slate-400">],</span></div>
          <div class="pl-4"><span class="text-indigo-300">passion</span><span class="text-slate-400">: </span><span class="text-emerald-300">'Clean UI'</span></div>
          <div><span class="text-slate-400">}</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '4+', label: 'Years Exp.' },
  { value: '20+', label: 'Projects' },
  { value: '10+', label: 'Clients' },
  { value: '100%', label: 'Passion' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>
