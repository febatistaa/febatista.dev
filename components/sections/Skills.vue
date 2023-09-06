<template>
  <Section title="Skills" id="skills">
    <div class="skills-container">
      <div v-for="item in skillsets" class="skills">
        <h3 class="">{{ item.title }}</h3>
        <ul>
          <li v-for="skill in item.skills" class="">
            <nuxt-icon name="caret-right" />{{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
const { data } = useAsyncData(() => queryContent("/skillsets").findOne());

const skillsets = data.value?.body;
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
