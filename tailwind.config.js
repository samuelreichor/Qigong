module.exports = {
	content: [
    	"./index.html",    
    	"./src/**/*.{vue,js,ts,jsx,tsx}",
    ],  
    theme: {
    	extend: {
        gridTemplateRows: {
          'auto1': 'auto 1fr',
        },
        gridTemplateColumns: {
          'cards': 'repeat(auto-fit, minmax(250px, 1fr))',
        },
        colors: {
          'light-green': '#E9F5DB',
          'hard-green': '#c2e49b',
        },
      },
    },
    plugins: [
    ],
  }