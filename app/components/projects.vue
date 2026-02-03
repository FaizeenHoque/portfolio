<template>
  <div class="projects-section">
    <div class="projects-header">
      <img src="/img/11.png" class="projects-title" />
    </div>

    <div class="projects-grid" v-if="projects">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <div class="card-header">
          <div class="card-icon" :class="project.type">
            <span v-if="project.type === 'hardware'">⬚</span>
            <span v-else>&lt;/&gt;</span>
          </div>
          <div class="card-title-section">
            <h3 class="card-title">{{ project.title }}</h3>
            <span class="card-type" :class="project.type">{{
              project.type
            }}</span>
          </div>
        </div>
        <p class="card-description">{{ project.description }}</p>
        <div class="card-footer">
          <div class="card-tags">
            <span class="tag" v-for="tag in project.tags" :key="tag">{{
              tag
            }}</span>
          </div>
          <a :href="project.github" class="github-link" target="_blank">
            <svg viewBox="0 0 24 24" class="github-icon">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  id: number;
  title: string;
  type: "hardware" | "software";
  description: string;
  tags: string[];
  github: string;
}

const { data: projects } = await useFetch<Project[]>("/data/projects.json");
</script>

<style scoped>
.projects-section {
  min-height: 100vh;
  background-color: var(--lightmode_secondary);
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.projects-header {
  text-align: center;
  margin-bottom: 50px;
}

.projects-title {
  max-width: 600px;
  width: 100%;
  height: auto;
  margin-bottom: 15px;
}

.projects-subtitle {
  font-family: monospace;
  font-size: 1.3rem;
  color: #555;
  letter-spacing: 1px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1400px;
  width: 100%;
  padding: 0 30px;
}

.project-card {
  background-color: var(--lightmode_primary);
  border: 3px solid #333;
  border-radius: 10px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 15px;
}

.card-icon {
  width: 60px;
  height: 60px;
  background-color: #8fa88b;
  border: 2px solid #333;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
}

.card-title-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-title {
  font-family: monospace;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 0;
  letter-spacing: 1px;
}

.card-type {
  font-family: monospace;
  font-size: 1rem;
  text-transform: capitalize;
}

.card-type.hardware {
  color: #6b8e6b;
}

.card-type.software {
  color: #8fa88b;
}

.card-description {
  font-family: monospace;
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  margin: 0;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
}

.card-tags {
  display: flex;
  gap: 10px;
}

.tag {
  background-color: #8fa88b;
  color: #fff;
  font-family: monospace;
  font-size: 0.9rem;
  padding: 8px 16px;
  border-radius: 5px;
  border: 2px solid #6b8e6b;
}

.github-link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.github-icon {
  width: 34px;
  height: 34px;
  fill: #6b8e6b;
  transition: fill 0.2s ease;
}

.github-link:hover .github-icon {
  fill: #333;
}

/* Large tablet */
@media (max-width: 1200px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 800px;
    gap: 25px;
  }

  .project-card {
    padding: 20px;
  }
}

/* Tablet */
@media (max-width: 900px) {
  .projects-section {
    padding: 60px 30px;
  }

  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 700px;
    gap: 20px;
    padding: 0 15px;
  }

  .projects-title {
    max-width: 450px;
  }

  .projects-subtitle {
    font-size: 1.1rem;
  }

  .card-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }

  .card-title {
    font-size: 1.3rem;
  }

  .tag {
    padding: 6px 12px;
    font-size: 0.8rem;
  }

  .github-icon {
    width: 28px;
    height: 28px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .projects-section {
    padding: 50px 20px;
    justify-content: flex-start;
  }

  .projects-header {
    margin-bottom: 30px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 18px;
    max-width: 100%;
    padding: 0;
  }

  .projects-title {
    max-width: 280px;
  }

  .projects-subtitle {
    font-size: 0.95rem;
  }

  .project-card {
    padding: 18px;
    gap: 12px;
  }

  .card-icon {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }

  .card-title {
    font-size: 1.15rem;
  }

  .card-type {
    font-size: 0.85rem;
  }

  .card-description {
    font-size: 0.9rem;
  }

  .card-tags {
    gap: 6px;
    flex-wrap: wrap;
  }

  .tag {
    padding: 5px 10px;
    font-size: 0.75rem;
  }

  .github-icon {
    width: 26px;
    height: 26px;
  }
}

/* Small mobile */
@media (max-width: 400px) {
  .projects-section {
    padding: 40px 15px;
  }

  .projects-title {
    max-width: 220px;
  }

  .projects-subtitle {
    font-size: 0.85rem;
  }

  .project-card {
    padding: 15px;
  }

  .card-header {
    gap: 10px;
  }

  .card-icon {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }

  .card-title {
    font-size: 1rem;
  }

  .tag {
    padding: 4px 8px;
    font-size: 0.7rem;
  }
}
</style>
