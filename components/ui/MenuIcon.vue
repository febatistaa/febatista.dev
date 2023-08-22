<template>
  <div :class="['menu-icon', { open: open }]">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script setup>
const { open } = defineProps({ open: Boolean });
</script>

<style scoped lang="postcss">
.menu-icon {
  @apply relative h-7 w-8;
  @apply transition-all duration-500 ease-in-out;
  cursor: pointer;

  span {
    @apply absolute left-0 block h-1 w-full rotate-0 rounded bg-green-500 opacity-100;
    @apply transition-all duration-300 ease-in-out;

    &:nth-child(1) {
      @apply top-1;
    }

    &:nth-child(2) {
      @apply top-3;
    }

    &:nth-child(3) {
      @apply top-5;
    }
  }

  &.open span {
    &:nth-child(1) {
      @apply top-3 rotate-135;
    }

    &:nth-child(2) {
      @apply -left-16 opacity-0;
    }

    &:nth-child(3) {
      @apply top-3 -rotate-135;
    }
  }
}
</style>
