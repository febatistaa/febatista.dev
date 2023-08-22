<template>
  <section class="hero">
    <div>
      <h1>Hi, my name is <span>Felipe</span>.</h1>
      <h2>I’m a Software Engineer.</h2>
      <p>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </p>
      <LinkButton href="/test">Check out my work!</LinkButton>
    </div>
  </section>
</template>

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
