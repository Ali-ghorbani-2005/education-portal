




// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: 'class', // فعال‌سازی حالت تاریک با استفاده از کلاس
//   theme: {
//     extend: {
//       screens: {
//         sm: '430px', // تغییر اندازه sm به 430px
//       },
//       fontFamily: {
//         gulzar: ['Gulzar', 'cursive'],
//         lato: ['Lato', 'sans-serif'],
//         katibeh: ['Katibeh']
//       },
//       keyframes: {
//         'fade-slide': {
//           '0%': {
//             opacity: '0',
//             transform: 'translateY(-10px)',
//           },
//           '100%': {
//             opacity: '1',
//             transform: 'translateY(0)',
//           },
//         },
//       },
//       animation: {
//         'fade-slide': 'fade-slide 0.3s ease-out forwards',
//       },
//     },
//   },
//   plugins: [],
// }




/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // فعال‌سازی حالت تاریک با استفاده از کلاس
  theme: {
    extend: {
      screens: {
        sm: '392px', // تغییر اندازه sm به 430px 
        
      },
      fontFamily: {
        gulzar: ['Gulzar', 'cursive'],
        lato: ['Lato', 'sans-serif'],
        katibeh: ['Katibeh']
      },
      keyframes: {
        'fade-slide': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-slide': 'fade-slide 0.3s ease-out forwards',
        fadeUp: 'fadeUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
