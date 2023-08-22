<template>
  <ul class="projects">
    <li v-for="item in items">
      <h3 class="">
        <NuxtLink :href="`/projects/${item.slug}`"
          >{{ item.name }}<nuxt-icon name="arrow-right"
        /></NuxtLink>
      </h3>
      <p class="">
        {{ item.description }}
      </p>
      <div class="tags">
        <Tag class="" v-for="tag in item.tags">{{ tag }}</Tag>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import Project from "types/Project";

const { items } = defineProps({
  items: Array<Project>,
});
</script>

<style scoped lang="postcss">
.projects {
  @apply w-full list-none;

  li {
    @apply w-full;

    h3 {
      @apply mb-1;

      a {
        @apply flex items-center;

        .nuxt-icon {
          @apply ml-2 inline-block text-xl text-green-500;
          @apply transition-transform duration-500 ease-out;
        }

        &:hover .nuxt-icon {
          @apply translate-x-2;
        }
      }
    }

    p {
      @apply mb-2;
    }

    .tags {
      @apply flex items-center;

      & > *:not(:last-child) {
        @apply mr-2;
      }
    }

    &:not(:last-child) {
      @apply mb-6;
    }
  }
}
</style>
