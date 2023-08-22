<template>
  <aside class="social">
    <ul>
      <li>
        <a href="">
          <nuxt-icon name="envelope" />
        </a>
      </li>
      <li>
        <a href="">
          <nuxt-icon name="github" />
        </a>
      </li>
      <li>
        <a href="">
          <nuxt-icon name="medium" />
        </a>
      </li>
      <li>
        <a href="">
          <nuxt-icon name="instagram" />
        </a>
      </li>
      <li>
        <a href="">
          <nuxt-icon name="linkedin" />
        </a>
      </li>
      <li>
        <a href="">
          <nuxt-icon name="whatsapp" />
        </a>
      </li>
    </ul>
  </aside>
</template>

<style scoped lang="postcss">
.social {
  @apply fixed bottom-8 left-12 z-10 hidden;
  @apply md:block;

  ul {
    @apply flex list-none flex-col items-start gap-5;
  }

  li {
    @apply text-xl text-slate-50;
    /* @apply animate-fadeup-enter; */

    a {
      @apply block transition-all duration-500;
      @apply hover:-translate-y-1 hover:text-green-500;
    }
  }
}
</style>
