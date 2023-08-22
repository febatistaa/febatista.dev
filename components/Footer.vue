<template>
  <footer class="footer">
    <a href="#">Built & designed by Felipe Batista 🤘</a>
  </footer>
</template>

<style scoped lang="postcss">
.footer {
  @apply w-full px-12 py-8;
  @apply flex flex-col items-center;

  a {
    @apply text-sm font-light;
    @apply transition-colors duration-500 ease-out;
    @apply hover:text-green-500;
  }
}
</style>
