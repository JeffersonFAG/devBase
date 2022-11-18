/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      colors: {
        blue: {
          84: "#3B89FF",
          85: "#2564C5",
        },
        gray: {
          84: "#B1B1B1",
        },
      },
      screens: {
        xsm: "320px",
      },
      mdx: [{ min: "321px", max: "767px" }, { min: "868px" }],
    },

    fontFamily: {
      robo: ["Open Sans", "sans-serif"],
    },
    borderRadius: {
      m: "3px",
    },
  },
  plugins: [],
};
