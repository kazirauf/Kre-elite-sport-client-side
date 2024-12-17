import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx},",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#71C9CE",
        },

        secondary: {
          DEFAULT: "#28a745",
        },

        button: {
          DEFAULT: "#fb8c00",
          dark: "#ef6c00",
        },
      },
    },
  },

  plugins: [
    require('daisyui'),
  ],
});
