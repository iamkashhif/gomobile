/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        khand: ["Khand", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        "46px": "46px",
        "10px": "10px",
        "16px": "16px",
        "18px": "18px",
        "20px": "20px",
        "26px": "26px",
        "30px": "30px",
        "36px": "36px",
      },
      colors: {
        customTextGrey1: "#5A5A5A",
        customTextGrey2: "#808080",
        customBlue: "#4280EF",
        customBorder: "#DCDCDC",
        customRed: "#E02B20",
        customRed1: "#D44C59",
        customGrey: "#F8F8F8",
        customGrey1: "#F0F1F2",
        customGrey2: "#F6F6F6",
        customGrey3: "#9D9D9D",
        customGrey4: "#F1F3F6",
        customGrey5: "#F5F5F5",
        customGrey6: "#00000029",
        customGrey7: "#0000000A ",
        customGrey8: "#6A6A6A",
        customGrey9: "#E9EBF2",
        customGrey10: "#6A6A6A",
        customGrey11: "#C7C7C7",
        customGrey12: "#ABABAB",

        customBlack: "#2C2C2C",
        customGreen: "#2EA84E",
        customGreen1: "#24BC94",
        customBlue1: "#39A9DB",
        customNavy: "#16425B",
      },
      boxShadow: {
        "custom-corners": "0px 4px 8px rgba(0, 0, 0, 0.3)", // Custom shadow for all corners
      },
      width: {
        24: "24px",
      },
      height: {
        24: "24px",
      },
    },
  },
  plugins: [],
};
