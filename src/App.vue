<template>
  <div :class="['min-h-screen transition-colors duration-300', themeStore.isDark ? 'dark' : 'light']"
       style="background-color: var(--bg-primary); color: var(--text-primary)">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})
</script>
