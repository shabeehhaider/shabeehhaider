<template>
  <div
    :class="[
      'glass rounded-2xl transition-all duration-300',
      hoverable && 'glass-hover cursor-pointer',
      padding,
      className
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  hoverable: {
    type: Boolean,
    default: false
  },
  padding: {
    type: String,
    default: 'p-6'
  },
  className: {
    type: String,
    default: ''
  }
})
</script>
