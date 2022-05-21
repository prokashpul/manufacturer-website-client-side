module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FFD333",

          secondary: "#3D464D",

          accent: "#ffffff",

          neutral: "#272626",

          "base-100": "#ffffff",

          info: "#0000FF",

          success: "#008000",

          warning: "#FFFF00",

          error: "#FF3333",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
