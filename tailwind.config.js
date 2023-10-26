/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'ff-sans':'var(--ff-cochonou)',
        'ff-kanit':'var(--ff-kanit)'
      },
      colors:{
        "rouge": {
          1:"#FFE8E8 ",
          10: "#fbccd3",
          20: "#f9aab6",
          30: "#f68091",
          40:"#f2556c",
          50: "#ef2a48",
          base: "#ec0023",
          60: "#c5001d",
          70: "#9d0017",
          80: "#760012",
          90: "#4f000c",
          100: "#2f0007",
          opa100: "var(--clr-rouge-100-opa)",
          opa70: 'var(--clr-rouge-1-opa)'
        },
        "gris": {
          40: 'var(--clr-gray-40)',
        },
      },
      backgroundImage:{
        'img':'var(--fond-img)',
        'saucisson':"var(--fond-img-saucisson)"
      },
    },
  },
  plugins: [],
}