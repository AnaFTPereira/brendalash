const config = {
  plugins: [
    require('tailwindcss')({ config: '../../packages/config/tailwind.config.js' }),
    require('autoprefixer'),
  ],
};

export default config;


