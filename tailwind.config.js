export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jungle: {
          dark: "#0b1f0b",
          mid: "#123d1a",
          light: "#1f5f2f",
        },
        sand: "#c2a36b",
        bone: "#e8e2d0",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0,255,100,0.3)",
      },
    },
  },
  plugins: [],
};