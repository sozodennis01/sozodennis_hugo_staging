module.exports = {
  corePlugins: {
    preflight: false, // Disable Tailwind's reset styles
  },
  content: [
    './hugo_stats.json', // Used for Hugo stats for partial hydrating
    './layouts/**/*.html',
    './content/**/*.md',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};