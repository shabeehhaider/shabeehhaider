<template>
  <section id="experience" class="section-padding relative overflow-hidden">
    <div class="absolute top-1/2 right-0 w-[400px] h-[600px] bg-gradient-radial from-indigo-600/8 to-transparent blur-3xl pointer-events-none"></div>

    <div class="section-container relative z-10">
      <SectionTitle eyebrow="Career" class="reveal">
        <template #default>
          <span style="color: var(--text-primary)">Professional </span>
          <span class="gradient-text">Experience</span>
        </template>
      </SectionTitle>

      <div class="relative">
        <!-- Vertical line: left-aligned on mobile, center on md+ -->
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent"></div>

        <div class="space-y-8 sm:space-y-12">
          <div
            v-for="(exp, i) in experiences"
            :key="exp.id"
            :class="[
              'relative flex',
              'md:gap-8',
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
              'reveal'
            ]"
          >
            <!-- Timeline dot -->
            <div class="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 flex items-center justify-center z-10">
              <div class="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 ring-2 md:ring-4 ring-[var(--bg-primary)]"></div>
            </div>

            <!-- Date column — desktop only -->
            <div :class="[
              'hidden md:flex w-1/2 items-start justify-end pt-6',
              i % 2 === 0 ? 'pr-12 text-right' : 'pl-12 order-2 text-left'
            ]">
              <div>
                <span class="text-sm font-mono" style="color: var(--text-muted)">{{ exp.period }}</span>
                <div class="mt-1">
                  <Badge variant="accent" class="text-xs">{{ exp.type }}</Badge>
                </div>
              </div>
            </div>

            <!-- Card — full width on mobile, half width on md+ -->
            <div :class="[
              'w-full md:w-1/2',
              'pl-10 sm:pl-12 md:pl-0',
              i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
            ]">
              <div class="glass-hover rounded-2xl p-4 sm:p-6 group">
                <!-- Header -->
                <div class="flex items-start justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div class="min-w-0">
                    <h3 class="font-bold text-sm sm:text-base mb-1 group-hover:text-indigo-300 transition-colors" style="color: var(--text-primary)">
                      {{ exp.role }}
                    </h3>
                    <div class="flex flex-wrap items-center gap-1 sm:gap-2">
                      <div :class="['w-5 h-5 rounded-md flex items-center justify-center text-xs shrink-0', exp.companyColor]">
                        {{ exp.companyIcon }}
                      </div>
                      <span class="text-sm font-semibold text-indigo-400">{{ exp.company }}</span>
                      <span class="text-xs hidden sm:inline" style="color: var(--text-muted)">· {{ exp.location }}</span>
                    </div>
                    <!-- Location on its own line for very small screens -->
                    <p class="text-xs mt-0.5 sm:hidden" style="color: var(--text-muted)">{{ exp.location }}</p>
                  </div>
                  <!-- Date — mobile only -->
                  <div class="md:hidden text-right shrink-0">
                    <span class="text-xs font-mono leading-tight block" style="color: var(--text-muted)">{{ exp.period }}</span>
                    <Badge variant="accent" class="text-xs mt-1">{{ exp.type }}</Badge>
                  </div>
                </div>

                <!-- Description -->
                <p class="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4" style="color: var(--text-secondary)">
                  {{ exp.description }}
                </p>

                <!-- Achievements -->
                <ul class="space-y-1.5 mb-3 sm:mb-4">
                  <li v-for="achievement in exp.achievements" :key="achievement"
                      class="flex items-start gap-2 text-xs"
                      style="color: var(--text-secondary)">
                    <span class="text-indigo-400 mt-0.5 shrink-0">▹</span>
                    {{ achievement }}
                  </li>
                </ul>

                <!-- Tech tags -->
                <div class="flex flex-wrap gap-1 sm:gap-1.5">
                  <span v-for="tech in exp.tech" :key="tech"
                        class="px-2 py-0.5 rounded-md text-xs font-mono"
                        style="background: var(--glass-bg); color: var(--text-muted); border: 1px solid var(--glass-border)">
                    {{ tech }}
                  </span>
                </div>
              </div>
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

const experiences = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Jami Partners',
    companyIcon: '🏢',
    companyColor: 'bg-indigo-500/20',
    location: 'Karachi, Pakistan · On-site',
    period: 'Jun 2025 – Present',
    type: 'Full-time',
    description: 'Working with a Saudi client on multiple projects for Newera, focusing on front-end development, UI enhancements, and seamless integration of APIs to deliver scalable and user-friendly web solutions.',
    achievements: [
      'Building and maintaining multiple client-facing web applications for a Saudi-based client',
      'Developing UI enhancements and new features with Vue.js and Nuxt.js',
      'Integrating third-party APIs to enable seamless data flow across services',
      'Delivering scalable, performant, and accessible front-end solutions'
    ],
    tech: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Pinia']
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'Office Field',
    companyIcon: '🖥️',
    companyColor: 'bg-violet-500/20',
    location: 'On-site',
    period: 'Apr 2023 – Jun 2025',
    type: 'Full-time',
    description: 'Developed cross-platform web and mobile applications using Quasar Framework and React Native, building feature-rich, responsive interfaces for enterprise-level products.',
    achievements: [
      'Built cross-platform applications using Quasar Framework targeting web and mobile',
      'Developed and maintained mobile app screens with React Native',
      'Collaborated with backend teams to integrate REST APIs and real-time data',
      'Improved UI consistency and code reusability across product lines'
    ],
    tech: ['Quasar Framework', 'React Native', 'Vue.js', 'JavaScript', 'CSS3', 'REST APIs']
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'RIKSOF',
    companyIcon: '💻',
    companyColor: 'bg-cyan-500/20',
    location: 'Karachi, Pakistan',
    period: 'Apr 2022 – Apr 2023',
    type: 'Full-time',
    description: 'Progressed from UI/UX design into frontend development, translating design mockups into responsive, pixel-perfect web interfaces while working across multiple client projects.',
    achievements: [
      'Built responsive web interfaces using HTML, CSS, and JavaScript',
      'Translated Figma/XD designs into production-ready frontend components',
      'Maintained design consistency and cross-browser compatibility',
      'Collaborated with design and backend teams in an agile environment'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'Vue.js']
  },
  {
    id: 4,
    role: 'UI/UX Designer',
    company: 'RIKSOF',
    companyIcon: '🎨',
    companyColor: 'bg-emerald-500/20',
    location: 'Karachi, Pakistan',
    period: 'Aug 2020 – Apr 2022',
    type: 'Full-time',
    description: 'Started as a Trainee UI/UX Designer and grew to Junior UI/UX Designer over 1.5 years, designing user interfaces and building a strong foundation in responsive design and front-end principles.',
    achievements: [
      'Designed user interfaces for web and mobile applications',
      'Created wireframes, prototypes, and high-fidelity mockups',
      'Applied responsive design principles across various screen sizes',
      'Promoted from Trainee to Junior Designer within the first year'
    ],
    tech: ['UI/UX Design', 'Figma', 'Responsive Design', 'User Interface Design', 'HTML', 'CSS']
  },
]
</script>
