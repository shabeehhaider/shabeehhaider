import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollAnimation() {
  let observer = null

  const initObserver = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Stagger children with delay class
            const children = entry.target.querySelectorAll('[data-delay]')
            children.forEach((child) => {
              const delay = child.getAttribute('data-delay') || 0
              setTimeout(() => {
                child.classList.add('visible')
              }, parseInt(delay))
            })
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
      }
    )

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    elements.forEach((el) => observer.observe(el))
  }

  onMounted(() => {
    // Small delay to ensure DOM is ready
    setTimeout(initObserver, 100)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { initObserver }
}

export function useParallax() {
  const offset = ref(0)

  const handleScroll = () => {
    offset.value = window.scrollY * 0.4
  }

  onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))

  return { offset }
}
