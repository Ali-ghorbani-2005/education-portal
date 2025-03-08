// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [  "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         gulzar: ['Gulzar', 'cursive'],
//         lato: ['Lato', 'sans-serif'], 
//         katibeh:['Katibeh']
//       },
//     },
//   },
//   plugins: [],
// } 




// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       screens: {
//         sm: '430px', // تغییر اندازه sm به 480px
//       },
//       fontFamily: {
//         gulzar: ['Gulzar', 'cursive'],
//         lato: ['Lato', 'sans-serif'], 
//         katibeh: ['Katibeh']
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
        sm: '430px', // تغییر اندازه sm به 430px
      },
      fontFamily: {
        gulzar: ['Gulzar', 'cursive'],
        lato: ['Lato', 'sans-serif'],
        katibeh: ['Katibeh']
      },
    },
  },
  plugins: [],
}


