/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'purple': '#5856D6',
      'white': '#FFFFFF',
      'grey': "#151515",
      'light-grey': "#787878" 
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

