<template>
  <section id="contact" aria-label="Contact" class="section-padding relative overflow-hidden">
    <!-- Background glow -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-indigo-600/15 via-violet-600/8 to-transparent blur-3xl pointer-events-none"></div>
    <div class="absolute inset-0 pointer-events-none" style="background-image: linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px); background-size: 64px 64px;"></div>

    <div class="section-container relative z-10">
      <div class="max-w-2xl mx-auto text-center mb-12 reveal">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="h-px w-12 bg-gradient-to-r from-transparent to-indigo-500/60"></div>
          <span class="text-indigo-400 font-mono text-sm tracking-widest uppercase">Contact</span>
          <div class="h-px w-12 bg-gradient-to-l from-transparent to-indigo-500/60"></div>
        </div>
        <h2 class="text-4xl md:text-5xl font-black tracking-tight mb-4">
          <span style="color: var(--text-primary)">Let's Build </span>
          <span class="gradient-text">Something</span>
        </h2>
        <p class="text-lg" style="color: var(--text-secondary)">
          Have a project in mind or want to discuss opportunities?
          I'm always open to interesting conversations.
        </p>
      </div>

      <div class="grid md:grid-cols-5 gap-6 sm:gap-8 items-start max-w-4xl mx-auto">
        <!-- Contact Info -->
        <div class="md:col-span-2 space-y-3 sm:space-y-4 reveal">
          <div
            v-for="info in contactInfo"
            :key="info.label"
            class="glass-hover rounded-2xl p-5 group"
          >
            <div class="flex items-center gap-4">
              <div :class="['w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0', info.iconBg]">
                {{ info.icon }}
              </div>
              <div class="min-w-0">
                <div class="text-xs font-semibold uppercase tracking-wider mb-1" style="color: var(--text-muted)">
                  {{ info.label }}
                </div>
                <a v-if="info.href" :href="info.href"
                   class="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors truncate block">
                  {{ info.value }}
                </a>
                <span v-else class="text-sm font-medium" style="color: var(--text-primary)">{{ info.value }}</span>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="glass rounded-2xl p-5">
            <div class="text-xs font-semibold uppercase tracking-wider mb-4" style="color: var(--text-muted)">Find me on</div>
            <div class="flex gap-3">
              <a v-for="social in socials" :key="social.label"
                 :href="social.href"
                 target="_blank"
                 :class="['flex-1 glass rounded-xl py-3 flex flex-col items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 group', social.hoverClass]">
                <span class="text-lg">{{ social.icon }}</span>
                <span class="text-xs" style="color: var(--text-muted)">{{ social.label }}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="md:col-span-3 reveal">
          <div class="glass rounded-2xl p-4 sm:p-6 md:p-8">
            <Transition name="form-success" mode="out-in">
              <!-- Success state -->
              <div v-if="submitted" key="success" class="text-center py-12">
                <div class="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2" style="color: var(--text-primary)">Message Sent!</h3>
                <p class="text-sm mb-6" style="color: var(--text-secondary)">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button @click="submitted = false" class="btn-ghost text-sm">Send Another</button>
              </div>

              <!-- Form -->
              <form v-else key="form" @submit.prevent="handleSubmit" class="space-y-5">
                <div class="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold uppercase tracking-wider mb-2" style="color: var(--text-muted)">
                      Name *
                    </label>
                    <input
                      v-model="form.name"
                      type="text"
                      required
                      placeholder="John Doe"
                      class="form-input"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold uppercase tracking-wider mb-2" style="color: var(--text-muted)">
                      Email *
                    </label>
                    <input
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      class="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider mb-2" style="color: var(--text-muted)">
                    Subject
                  </label>
                  <select v-model="form.subject" class="form-input">
                    <option value="">Select a topic...</option>
                    <option>Project Collaboration</option>
                    <option>Full-time Opportunity</option>
                    <option>Freelance Work</option>
                    <option>Technical Consultation</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider mb-2" style="color: var(--text-muted)">
                    Message *
                  </label>
                  <textarea
                    v-model="form.message"
                    required
                    rows="5"
                    placeholder="Tell me about your project or idea..."
                    class="form-input resize-none"
                  ></textarea>
                </div>

                <p v-if="errorMsg" class="text-sm text-rose-400 text-center -mb-1">{{ errorMsg }}</p>

                <button
                  type="submit"
                  :disabled="loading"
                  :class="['btn-primary w-full justify-center py-3.5 text-sm', loading ? 'opacity-70 cursor-not-allowed' : '']"
                >
                  <svg v-if="loading" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <svg v-else class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  {{ loading ? 'Sending...' : 'Send Message' }}
                </button>
              </form>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'

// ─── Replace these three values with your EmailJS credentials ───
const EMAILJS_SERVICE_ID  = 'service_d8ljiks'
const EMAILJS_TEMPLATE_ID = 'template_gp0r2va'
const EMAILJS_PUBLIC_KEY  = '2Fwx-Wg3KGL9pXE84'
// ────────────────────────────────────────────────────────────────

const submitted = ref(false)
const loading = ref(false)
const errorMsg = ref('')

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = async () => {
  loading.value = true
  errorMsg.value = ''

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name:    form.name,
        email:   form.email,
        title:   form.subject || 'Portfolio Contact',
        message: form.message,
      },
      EMAILJS_PUBLIC_KEY
    )
    submitted.value = true
    Object.assign(form, { name: '', email: '', subject: '', message: '' })
  } catch (err) {
    errorMsg.value = 'Something went wrong. Please try emailing me directly.'
  } finally {
    loading.value = false
  }
}

const contactInfo = [
  {
    label: 'Email',
    value: 'shabeehhaider93@gmail.com',
    href: 'mailto:shabeehhaider93@gmail.com',
    icon: '✉️',
    iconBg: 'bg-indigo-500/15'
  },
  {
    label: 'WhatsApp',
    value: '+92 333 393 2557',
    href: 'https://wa.me/923333932557',
    icon: '💬',
    iconBg: 'bg-emerald-500/15'
  },
  {
    label: 'Location',
    value: 'Karachi, Pakistan',
    icon: '📍',
    iconBg: 'bg-rose-500/15'
  },
  {
    label: 'Availability',
    value: 'Open to Opportunities',
    icon: '🟢',
    iconBg: 'bg-violet-500/15'
  },
]

const socials = [
  { label: 'GitHub', icon: '🐙', href: 'https://github.com/shabeehhaider', hoverClass: 'hover:border-slate-400/30' },
  { label: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/in/shabeehdev/', hoverClass: 'hover:border-blue-400/30' },
  { label: 'WhatsApp', icon: '💬', href: 'https://wa.me/923333932557', hoverClass: 'hover:border-emerald-400/30' },
]
</script>

<style>
.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  outline: none;
  transition: all 0.2s;
  font-family: inherit;
}

.form-input::placeholder {
  color: var(--text-muted);
}

.form-input:focus {
  border-color: rgba(99, 102, 241, 0.5);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  background: rgba(255, 255, 255, 0.06);
}

.form-input option {
  background: #1a1a2e;
  color: #f8fafc;
}

.form-success-enter-active,
.form-success-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.form-success-enter-from,
.form-success-leave-to {
  opacity: 0;
  transform: scale(0.96) translateY(8px);
}
</style>
