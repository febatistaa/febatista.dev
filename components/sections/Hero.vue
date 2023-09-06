<template>
  <section class="hero" v-if="heroContent">
    <div>
      <h1 class="animated">Hi, my name is <span>Felipe</span>.</h1>
      <h2>I’m a Software Engineer.</h2>
      <p>
        {{ heroContent.aboutMe }}
      </p>
      <LinkButton :href="heroContent.cta.url">{{
        heroContent.cta.text
      }}</LinkButton>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: heroContent } = useAsyncData(() =>
  queryContent("/hero").findOne(),
);
</script>

<style scoped lang="postcss">
.hero {
  @apply min-h-screen w-full;
  @apply flex flex-col items-center justify-center;

  & > div {
    @apply w-full max-w-screen-sm;
  }

  h1 {
    @apply mb-4 text-base font-normal;
  }

  h1 span {
    @apply text-green-500;
  }

  h2 {
    @apply mb-6 text-3xl;
  }

  p {
    @apply mb-4 text-sm sm:text-base;
  }
}
</style>
