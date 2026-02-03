<script setup lang="ts">
import Hero from "./components/hero.vue";
import Projects from "./components/projects.vue";
</script>

<template>
  <div>
    <Hero />
    <Projects />
  </div>
</template>

<style>
:root {
  --lightmode_primary: #f1eee4;
  --lightmode_secondary: #e8e4d9;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  background-color: var(--lightmode_primary);
}
</style>
