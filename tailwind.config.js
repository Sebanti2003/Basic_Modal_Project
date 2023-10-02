/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      keyframes: {
        bam: {
          '0%,100%': {left:'32vw',transform:"scale(1)"},
          '50%': { left:'35vw',transform:"scale(1.25)"},
        },
        ram: {
          '0%,100%': {right:'32vw',transform:"scale(1)"},
          '50%': { right:'35vw',transform:"scale(1.25)"},
        },
      },
      animation: {
        wiggle: 'bam 3s ease-in-out infinite',
        tran:'ram 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
