module.exports = {
  corePlugins: {
    preflight: false, // Disable Tailwind's reset styles
  },
  content: [
    './hugo_stats.json', // Used for Hugo stats for partial hydrating
    './layouts/**/*.html',
    './content/**/*.md',
    './assets/css/**/*.css',
    './static/css/**/*.css',
    './assets/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};