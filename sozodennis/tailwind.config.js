module.exports = {
  corePlugins: {
    preflight: false, // Disable Tailwind's reset styles
  },
  content: [
    './hugo_stats.json', // Used for Hugo stats for partial hydrating
    './layouts/**/*.html',
    './content/**/*.md',
    './assets/css/**/*.css', // Ensure this line is present
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};