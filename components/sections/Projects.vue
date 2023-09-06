<template>
  <Section title="Projects" id="projects">
    <ul class="projects">
      <li v-for="item in projects">
        <h3>
          <NuxtLink :href="item.url"
            >{{ item.name }}<nuxt-icon name="arrow-right"
          /></NuxtLink>
        </h3>
        <p class="">
          {{ item.description }}
        </p>
        <div class="tags">
          <Tag v-for="tag in item.skills">{{ tag }}</Tag>
        </div>
      </li>
    </ul>
  </Section>
</template>

<script setup lang="ts">
const { data } = useAsyncData(() => queryContent("/projects").findOne());

const projects = data.value?.body;
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
