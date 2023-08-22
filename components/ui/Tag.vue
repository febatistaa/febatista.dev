<template>
  <span class="tag"><slot></slot></span>
</template>

<style scoped lang="postcss">
.tag {
  @apply inline-block rounded-lg border-2 border-green-500 px-2 py-1 text-xs text-green-500;
}
</style>
