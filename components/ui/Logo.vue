<template>
  <NuxtLink href="/" class="logo">f/</NuxtLink>
</template>

<style scoped lang="postcss">
.logo {
  @apply h-12 w-12 rounded-full;
  @apply text-xl text-green-500;
  @apply border-2 border-green-500;
  @apply flex items-center justify-center;
  @apply transition-colors duration-500 ease-linear;
  @apply hover:bg-green-500/20;
}
</style>
