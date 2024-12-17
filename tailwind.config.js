/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      purple: "#5856D6",
      white: "#FFFFFF",
      grey: "#151515",
      "light-grey": "#787878",
      black: "#000000",
    },
    fontFamily: {
      "NTSakharov-light": "NTSakharov-Light",
      "NTSakharov-regular": "NTSakharov-Regular",
      "NTSakharov-medium": "NTSakharov-Medium",
      "NTSakharov-bold": "NTSakharov-Bold",
      "NTSakharov-extra-bold": "NTSakharov-ExtraBold",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
