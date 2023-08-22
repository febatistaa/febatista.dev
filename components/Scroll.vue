<template>
  <div :class="['scroll', { visible }]">
    <nuxt-icon name="mouse" class="mouse" />
    <nuxt-icon name="angle-down" class="down" />
  </div>
</template>

<script setup>
const visible = ref(true);

function updateVisible() {
  visible.value = window.scrollY === 0;
}

onMounted(() => {
  addEventListener("scroll", updateVisible);
});

onUnmounted(() => {
  removeEventListener("scroll", updateVisible);
});
</script>

<style scoped lang="postcss">
.scroll {
  @apply flex flex-col items-center;
  @apply fixed -bottom-1/2 left-1/2 -translate-x-1/2;
  @apply transition-all duration-700 ease-in-out;
  @apply hover:text-green-500;

  &.visible {
    @apply bottom-4;
  }
}

.mouse {
  @apply -mb-1 text-2xl;
  @apply animate-bounce;
}

.down {
  @apply text-2xl;
}
</style>
