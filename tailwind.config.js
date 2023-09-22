module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pureWhite: '#ffffff',
        pureBlack: '#000000',
        lightSilver: '#D8D8D8',
        pureRed : '#FB2424',
      },
      screens: {
        xsmd: "260px",
        smd: "330px",
        mdd: "420px",
        lgd: "560px"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
