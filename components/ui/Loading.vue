<template>
  <aside v-if="isLoading" :class="['overlay', { hidden: progress === 100 }]">
    <span class="loading">{{ progress }}%</span>
  </aside>
</template>

<script setup lang="ts">
const progress = ref(0);
const progressRate = ref(250);
const isLoading = ref(true);

function updateProgress() {
  if (progress.value === 100) {
    const id = setTimeout(() => {
      isLoading.value = false;
      clearTimeout(id);
    }, 500);
    return;
  }

  const timeout = Math.random() * progressRate.value;
  const id = setTimeout(() => {
    progress.value += 1;
    clearTimeout(id);
    updateProgress();
  }, timeout);
}

onMounted(() => {
  const id = setTimeout(() => {
    progressRate.value = 50;
    clearTimeout(id);
  }, 1500);
  updateProgress();
});
</script>

<style scoped lang="postcss">
.overlay {
  @apply h-screen w-screen bg-slate-900;
  @apply fixed left-0 top-0 z-50;
  @apply flex items-center justify-center;
  @apply transition-opacity duration-500;

  &.hidden {
    @apply opacity-0;
  }
}
</style>
