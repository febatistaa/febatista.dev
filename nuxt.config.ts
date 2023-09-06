// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      "postcss-for": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icons", "nuxt-lodash", "dayjs-nuxt", "@nuxt/content"],
  components: [
    { path: "~/components", pathPrefix: false },
    { path: "~/components/sections", prefix: "Section" },
  ],
  nitro: {
    static: true,
  },
});
