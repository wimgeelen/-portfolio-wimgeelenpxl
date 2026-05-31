<template>
  <footer>
    <div class="container">
      <p class="name">Wim Geelen</p>
      <p class="sub">Graduaat Programmeren · PXL Hasselt · Hexion</p>
      <div class="divider"></div>
      <p class="copy">© {{ new Date().getFullYear() }} — gebouwd met Vue 3</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid var(--border);
  padding: 2.5rem 0 2rem;
  margin-top: 5rem;
  background: var(--bg-2);
}
.container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
}
.name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
  color: var(--text);
}
.sub {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
}
.divider {
  width: 32px;
  height: 1px;
  background: var(--border);
  margin: 0.75rem 0 0.35rem;
}
.copy {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--text-dim);
}
</style>
