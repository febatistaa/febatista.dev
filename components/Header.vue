<template>
  <header :class="['header', { minified: hasScrolled }]">
    <div class="animated">
      <Logo />
    </div>
    <nav :class="['navigation-container', { open: navOpen }]">
      <ol class="navigation">
        <li v-for="navItem in navItems" class="animated">
          <NuxtLink :href="navItem.path" @click="closeNavOpen">{{
            navItem.title
          }}</NuxtLink>
        </li>
      </ol>
      <LinkButton v-if="resume?.show" :href="resume?.url">Resume</LinkButton>
    </nav>
    <button class="menu-button" @click="toggleNavOpen">
      <MenuIcon :open="navOpen" />
    </button>
  </header>
</template>

<script setup lang="ts">
import NavItem from "../types/NavItem";

const { data: resume } = useAsyncData(() => queryContent("/resume").findOne());

const { navItems } = defineProps({
  navItems: { type: Array<NavItem>, required: true },
});

const navOpen = ref(false);
const hasScrolled = ref(false);

function toggleNavOpen() {
  navOpen.value = !navOpen.value;
}

function closeNavOpen() {
  navOpen.value = false;
}

function updateHasScrolled() {
  hasScrolled.value = window.scrollY > 0;
}

onMounted(() => {
  addEventListener("scroll", updateHasScrolled);
});

onUnmounted(() => {
  removeEventListener("scroll", updateHasScrolled);
});
</script>

<style scoped lang="postcss">
.header {
  @apply h-24 w-full px-12 py-0;
  @apply flex items-center justify-between;
  @apply fixed left-0 top-0 z-10;
  @apply transition-all duration-500;
  @apply bg-slate-900/60 shadow-lg shadow-slate-900/60 backdrop-blur;

  &.minified {
    @apply h-16;
  }
}

.navigation-container {
  @apply flex items-center gap-6;
}

.navigation {
  @apply flex gap-5;
  @apply list-none;

  li {
    counter-increment: item 1;
  }

  a {
    @apply text-slate-50;
    @apply transition-colors duration-500;
    @apply hover:text-green-500;

    &:before {
      content: "0" counter(item) ".";
      @apply mr-1 text-green-500;
    }
  }
}

.menu-button {
  @apply hidden border-0 bg-transparent;
}

@media (max-width: 768px) {
  .navigation-container {
    @apply fixed -right-full top-0;
    @apply flex-col justify-center gap-12;
    @apply bg-slate-900;
    @apply h-screen w-full p-12;
    @apply transition-all duration-200 ease-out;

    &.open {
      @apply right-0 shadow-xl shadow-slate-950;
    }
  }

  .navigation {
    @apply flex-col gap-9;
  }

  .menu-button {
    @apply block;
  }
}
</style>
