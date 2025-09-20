export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-waves": "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        slab: ["Roboto Slab", "serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
        fadeInUp: "fadeInUp 0.8s ease-in-out forwards",
        fadeInUpDelayed: "fadeInUp 0.8s ease-in-out 0.4s forwards",
      },
    },
  },
  plugins: [],
};
