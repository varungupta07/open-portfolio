/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '100vw': '100vw',
        '90vw': "90vw",
        '80vw': "80vw",
        '70vw': "70vw",
        '60vw': "60vw",
        '50vw': "50vw",
        '40vw': "40vw",
        '30vw': "30vw",
        '20vw': "20vw",
        '10vw': "10vw",
        '10p': "10%",
        '20p': "20%",
        '30p': "30%",
        '40p': "40%",
        '50p': "50%",
        '60p': "60%",
        '70p': "70%",
        '80p': "80%",
        '90p': "90%",
        '100p': "100%",

      },
      height: {
        '100vh': '100vh',
        '90vh': "90vh",
        '80vh': "80vh",
        '70vh': "70vh",
        '60vh': "60vh",
        '50vh': "50vh",
        '40vh': "40vh",
        '30vh': "30vh",
        '20vh': "20vh",
        '10vh': "10vh",
        '10p': "10%",
        '20p': "20%",
        '30p': "30%",
        '40p': "40%",
        '50p': "50%",
        '60p': "60%",
        '70p': "70%",
        '80p': "80%",
        '90p': "90%",
        '100p': "100%",
      }
    },
  },
  plugins: [],
}