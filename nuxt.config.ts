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
  modules: ["nuxt-icons", "@nuxtjs/strapi"],
  components: [{ path: "~/components", pathPrefix: false }],
  nitro: {
    static: true,
  },
});
