<template>
  <span :class="[
    'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200',
    variants[variant],
    className
  ]">
    <slot />
  </span>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'accent', 'success', 'warning', 'cyan', 'violet'].includes(v)
  },
  className: {
    type: String,
    default: ''
  }
})

const variants = {
  default: 'bg-white/5 text-slate-400 border border-white/8',
  accent: 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/20',
  success: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/20',
  warning: 'bg-amber-500/15 text-amber-300 border border-amber-500/20',
  cyan: 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/20',
  violet: 'bg-violet-500/15 text-violet-300 border border-violet-500/20',
}
</script>
