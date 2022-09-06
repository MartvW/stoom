module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        navbar: 'var(--color-bg-navbar)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        navbar: 'var(--color-text-navbar)',
      }
    },
  },
  plugins: [],
};
