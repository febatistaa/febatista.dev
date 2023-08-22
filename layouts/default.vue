<template>
  <div>
    <Header :nav-items="navItems" />
    <Social />
    <main>
      <slot />
    </main>
    <Footer />
    <!-- <Splash /> -->
  </div>
</template>

<script setup lang="ts">
import NavItem from "../types/NavItem";

const navItems: NavItem[] = [
  { title: "Skills", path: "#skills" },
  { title: "Experience", path: "#experience" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];
</script>

<style scoped lang="postcss">
main {
  /* TODO: Adjust the horizontal padding (it is confliting with social links) */
  @apply relative flex min-h-screen flex-col px-12 py-0;
}
</style>
