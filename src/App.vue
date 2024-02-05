<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
  import UserProfile from './components/UserProfile.vue';

  export default {
    components: {
      UserProfile,
    },
  };
</script>

<template>
  <h1 class="mainTitle">Wolf Hack Academy</h1>
  <nav>
    <RouterLink to="/">About</RouterLink>
    <RouterLink to="/contributors">Contributors</RouterLink>
    <RouterLink to="/resources">Related Resources</RouterLink>
    <RouterLink to="/news">News</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
 background-color: var(--color-text);
 color: var(--color-background);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-text);
  color: var(--color-text);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.mainTitle {
  font-size: 60px;
}
</style>
