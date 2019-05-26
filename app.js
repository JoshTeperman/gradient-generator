const jscolor = require('jscolor')
module.exports = function (n) { return n * 111 }
// Using Browserify to add npm require() functionality to browser
// To bundle app.js file, run browserify app.js > bundle.js

const COLORS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']



  // events -->
const eventListeners = () => {


  const clickSubmitEvent = () => {
  }
  
  const clickRandomGradientEvent = () => {
    const button = document.querySelector('#random-gradient-button').addEventListener('click', () => {
      setNewGradientBackground(randomHexoColor(), randomHexoColor());
    })
  }

  const clickCopyGradientEvent = () => {
  }

  clickRandomGradientEvent();
}
  
// logic -->

const setNewGradientBackground = (color1, color2) => {
  const newGradient = createGradientString(color1, color2) 
  document.querySelector('body').style = `background: ${newGradient}`

  updateColorPicker(document.querySelector('#color1'), color1);
  updateColorPicker(document.querySelector('#color2'), color2);
}

const randNum = () => {
  return Math.floor(Math.random() * COLORS.length)
}

const createGradientString = (color1, color2) => {
  return `linear-gradient(${color1}, ${color2})`
}

const randomHexoColor = () => {
  const color = []
  for (i = 0; i < 6; i++) {
    color.push(COLORS[randNum()])
  }
  return '#' + color.join("")
}

const updateColorPicker = (colorPicker, color) => {
  colorPicker.value = color
  colorPicker.style.border = `10px solid ${color}`
  colorPicker.style.background = `${color}`
  colorPicker.style.display = "hidden"

}


    
const run = () => {
  setNewGradientBackground(randomHexoColor(), randomHexoColor());
}



run();
eventListeners();