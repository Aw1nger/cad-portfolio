// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/image"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  ui: {
    colorMode: false,
  },
  nitro: {
    preset: "bun",
    externals: {
      inline: ["srvx"],
    },
  },
});
