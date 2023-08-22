<template>
  <div class="skills-container">
    <div v-for="item in items" class="skills">
      <h3 class="">{{ item.title }}</h3>
      <ul>
        <li v-for="skill in item.skills" class="">
          <nuxt-icon name="caret-right" />{{ skill }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import Skills from "types/Skills";

const { items } = defineProps({
  items: { type: Array<Skills>, required: true },
});
</script>

<style scoped lang="postcss">
.skills {
  h3 {
    @apply mb-2 text-base uppercase;
  }

  ul {
    @apply list-none;
  }

  li {
    @apply mb-1 flex items-center text-base;

    span {
      @apply mr-1 text-green-500;
    }
  }

  &:not(:last-child) {
    @apply mb-8 md:mb-0;
  }
}

.skills-container {
  @apply flex flex-col justify-between md:flex-row;
}
</style>
