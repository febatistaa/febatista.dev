<template>
  <aside class="social" v-if="social">
    <ul>
      <li class="animated">
        <NuxtLink :href="social.email" target="_blank">
          <nuxt-icon name="envelope" />
        </NuxtLink>
      </li>
      <li class="animated">
        <NuxtLink :href="social.github" target="_blank">
          <nuxt-icon name="github" />
        </NuxtLink>
      </li>
      <li class="animated">
        <NuxtLink :href="social.medium" target="_blank">
          <nuxt-icon name="medium" />
        </NuxtLink>
      </li>
      <li class="animated">
        <NuxtLink :href="social.linkedin" target="_blank">
          <nuxt-icon name="linkedin" />
        </NuxtLink>
      </li>
      <li class="animated">
        <NuxtLink :href="social.whatsapp" target="_blank">
          <nuxt-icon name="whatsapp" />
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
const { data: social } = useAsyncData(() => queryContent("/social").findOne());
</script>

<style scoped lang="postcss">
.social {
  @apply fixed bottom-8 left-12 z-10 hidden;
  @apply md:block;

  ul {
    @apply flex list-none flex-col items-start gap-5;
  }

  li {
    @apply text-xl text-slate-50;

    a {
      @apply block transition-all duration-500;
      @apply hover:-translate-y-1 hover:text-green-500;
    }
  }
}
</style>
