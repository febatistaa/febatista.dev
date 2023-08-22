<template>
  <ul class="experience">
    <li v-for="(item, index) in items">
      <div>
        <h3 class="">
          {{ item.company }}
        </h3>
        <p class="">
          {{ item.role }}
        </p>
      </div>
      <p class="period mobile">
        {{ item.startedAt }} - {{ item.finishedAt || "Present" }}
      </p>
      <p class="period desktop">
        {{ item.startedAt }} - {{ item.finishedAt || "Present" }}
      </p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import Experience from "types/Experience";

const { items } = defineProps({
  items: { type: Array<Experience>, required: true },
});
</script>

<style scoped lang="postcss">
.experience {
  @apply relative list-none px-0 py-6;
  @apply flex flex-col items-stretch;

  &:before {
    content: "";
    @apply block h-full w-0.5 bg-slate-50;
    @apply absolute left-2 top-0 -ml-px;
    @apply md:left-1/2;
  }

  li {
    @apply flex flex-col;
    @apply relative pl-10;
    @apply md:flex-row md:items-center md:pl-0;

    &:not(:last-child) {
      @apply mb-8 md:mb-12;
    }

    div {
      @apply md:order-3 md:flex-1;
    }

    .period {
      @apply text-xs;
      @apply md:order-1 md:flex-1 md:text-right md:text-xs;

      &.mobile {
        @apply md:hidden;
      }

      &.desktop {
        @apply hidden md:block;
      }
    }

    &:before {
      content: "";
      @apply box-border block h-4 w-4;
      @apply rounded-full border-2 border-slate-50 bg-slate-900;
      @apply absolute left-0 top-1/2 -translate-y-1/2;
      @apply md:relative md:order-2 md:mx-6 md:translate-y-0;
    }
  }
}
</style>
