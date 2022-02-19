module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      "primary": "#563BFF",
      "secondary": "#00A3FF",
      "tertiary": "#FF6868",
      "bgColor": "#F6F8FA",
      "foreColor": "#ffffff",
      "fadedColor": "rgb(100 116 139);",
      "shadowColor": "rgba(0, 0, 0, 0.08)",
      "white": "#ffffff",
    },
    fontFamily: {
      'IBMSans': ['"IBM Plex Sans"', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}
