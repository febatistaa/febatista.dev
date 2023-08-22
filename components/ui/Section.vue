<template>
  <section class="section">
    <div>
      <h2 v-if="title" class="">{{ title }}</h2>
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
const { title } = defineProps({
  title: String,
});
</script>

<style scoped lang="postcss">
.section {
  @apply min-h-screen w-full px-0 py-24;
  @apply flex flex-col items-center justify-center;
  counter-increment: section 1;

  & > div {
    @apply w-full max-w-screen-sm;
  }

  h2 {
    @apply mb-6 flex items-center text-2xl;

    &:before {
      content: "0" counter(section) ".";
      @apply mr-1 text-xl font-light text-green-500;
    }
  }
}
</style>
