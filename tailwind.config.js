/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js",
    ],
    theme: {
      extend: {
        colors: {
          coffee: "#CB8966",
          selfGray: "#7D7D7D",
          beige: "#E3DDD1",
          darkGreen: "#02382A",
          lightBeige: "#F7F5F2",
          selfGreen: "#279932",
          selfDark: "#100C0D",
          selfGray1: "#959494",
          selfGray2: "#D9D9D9",
          lightGreen: "#bbf2ca",
          lightRed: "#f7c1c8",
        },
      },
    },
    plugins: [],
  };
  