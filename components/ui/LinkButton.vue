<template>
  <NuxtLink :href="href" :target="target" class="link-button"
    ><slot></slot
  ></NuxtLink>
</template>

<script setup>
const { href, target } = defineProps({
  href: String,
  target: String,
});
</script>

<style scoped lang="postcss">
.link-button {
  @apply block w-fit rounded border-2 border-green-500 px-4 py-2 text-green-500;
  @apply transition-colors duration-500 ease-out;
  @apply hover:bg-green-500/20;
}
</style>
