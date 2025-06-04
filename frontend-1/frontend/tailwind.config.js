// // tailwind.config.js (ESM)
// import { defineConfig } from 'tailwindcss'

// export default defineConfig({
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         marquee: {
//           '0%': { transform: 'translateX(0%)' },
//           '100%': { transform: 'translateX(-50%)' },
//         },
//       },
//       animation: {
//         marquee: 'marquee 20s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// })



// tailwind.config.js
import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', 'sans-serif'],
      },

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'marquee-hover': 'marquee 20s linear infinite paused',

      },
    },
  },
  plugins: [],
});
