<template>
  <NuxtLink :href="href" class="link-button"><slot></slot></NuxtLink>
</template>

<script setup>
const { href } = defineProps({
  href: String,
});
</script>

<style scoped lang="postcss">
.link-button {
  @apply block w-fit rounded border-2 border-green-500 px-4 py-2 text-green-500;
  @apply transition-colors duration-500 ease-out;
  @apply hover:bg-green-500/20;
}
</style>
