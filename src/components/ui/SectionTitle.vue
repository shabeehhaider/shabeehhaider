<template>
  <div class="mb-16">
    <div class="flex items-center gap-3 mb-4">
      <span class="text-indigo-400 font-mono text-sm tracking-widest uppercase">{{ eyebrow }}</span>
      <div class="h-px flex-1 max-w-16 bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
    </div>
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
      <slot>
        <span style="color: var(--text-primary)">{{ title }}</span>
      </slot>
    </h2>
    <p v-if="subtitle" class="mt-4 text-lg max-w-2xl" style="color: var(--text-secondary)">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>
