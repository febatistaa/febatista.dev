/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        firacode: ['"Fira Code"', "monospace"],
      },
      rotate: {
        135: "135deg",
      },
      animation: { "fadeup-enter": "fadeup-enter 500ms ease-out forward" },
      keyframes: {
        "fadeup-enter": {
          "0%": { opacity: 0, transform: "translateY(-20vh)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
