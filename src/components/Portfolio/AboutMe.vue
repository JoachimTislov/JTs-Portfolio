<script setup lang="ts">
import { personalData } from '@/data/personal'
</script>

<template>
  <div class="aboutBox mt-4 rounded">
    <h2 class="p-3">About Me</h2>
    <div class="text">
      <div class="mt-3">
        <p v-for="paragraph in personalData.about" :key="paragraph">{{ paragraph }}</p>

        <p>Education: {{ personalData.education }}</p>

        <p>
          <strong> {{ personalData.keywords }} </strong> describe me the best
        </p>

        <h4>Situation</h4>

        <p class="situation">{{ personalData.situation }}</p>

        <div class="rounded p-2 bg-secondary">
          <h4>Proficient in</h4>

          <div class="d-flex flex-wrap">
            <div class="skill bg-dark" v-for="skill in personalData.skills" :key="skill.name">
              <p class="p-0 m-0">
                <a class="m-0 link" :href="skill.link">
                  {{ skill.name }}

                  <font-awesome-icon v-if="skill.icon" :icon="skill.icon" />
                </a>
              </p>
            </div>
          </div>

          <h4 class="mt-2">Desired Positions</h4>

          <div class="d-flex flex-wrap">
            <div class="skill bg-dark" v-for="job in personalData.jobs" :key="job">
              <p class="p-0 m-0">{{ job }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.situation {
  margin-left: 0.5rem;
}

.link {
  text-decoration: none;
}

.typescript {
  width: 2vw;
}

.icon {
  font-size: 1.5vw;
}

.aboutBox {
  box-shadow:
    0 0 8px 8px rgba(0, 0, 0, 0.5),
    0 0 0 0 rgba(0, 0, 0, 0.5);
}

.text {
  background-color: var(--profile-background-color);
  padding: 5%;
  padding-top: 1.14321%;
}

.skill {
  padding: 1rem;
  margin: 0.7rem;

  color: darkgrey;
}

h4 {
  margin: 0;
  color: var(--text-color);
  font-size: clamp(1rem, 1vw, 1.5rem);
}
</style>
