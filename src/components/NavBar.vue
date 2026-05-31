<template>
  <header :class="{ scrolled }">
    <nav class="container">
      <ul class="nav-links">
        <li v-for="link in links" :key="link.to">
          <router-link :to="link.to" :class="{ active: $route.path === link.to }">
            {{ link.label }}
          </router-link>
        </li>
      </ul>

      <button class="hamburger" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <div class="mobile-menu" :class="{ open: menuOpen }">
      <ul>
        <li v-for="link in links" :key="link.to">
          <router-link :to="link.to" @click="menuOpen = false">{{ link.label }}</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { to: '/',               label: 'Home' },
  { to: '/over',           label: 'Over mij' },
  { to: '/werkplek-leren', label: 'Werkplek Leren' },
]

const onScroll = () => { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 1rem 0;
  background: rgba(238, 243, 248, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s, background 0.3s;
}
header.scrolled {
  border-bottom-color: #cdd8e3;
  background: rgba(238, 243, 248, 0.95);
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.logo-initials {
  width: 34px; height: 34px;
  border-radius: 8px;
  background: #3a7bd5;
  color: #fff;
  display: grid; place-items: center;
  font-size: 0.8rem; font-weight: 800;
  letter-spacing: -0.02em;
  flex-shrink: 0;
  font-family: var(--font-display);
}
.logo-name {
  font-size: 0.95rem; font-weight: 700;
  color: var(--text);
  font-family: var(--font-display);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.nav-links a {
  font-size: 0.875rem; font-weight: 600;
  color: var(--text-muted);
  padding: 0.4rem 0.85rem;
  border-radius: 6px;
  transition: color var(--transition), background var(--transition);
}
.nav-links a:hover { color: var(--text); background: rgba(58,123,213,0.07); }
.nav-links a.active { color: var(--accent); background: rgba(58,123,213,0.1); }

.hamburger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 4px;
}

.hamburger span {
  display: block; width: 20px; height: 2px;
  background: var(--text); border-radius: 2px;
}

.mobile-menu {
  display: none;
  background: var(--bg-2);
  border-bottom: 1px solid var(--border);
}
.mobile-menu.open { display: block; }
.mobile-menu ul {
  display: flex; flex-direction: column;
  padding: 1rem 2rem; gap: 0.75rem;
}
.mobile-menu a { font-size: 1rem; font-weight: 600; color: var(--text-muted); }
.mobile-menu a:hover { color: var(--accent); }

@media (max-width: 640px) {
  .nav-links { display: none; }
  .hamburger { display: flex; }
}
</style>
