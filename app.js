const jscolor = require('jscolor')
module.exports = function (n) { return n * 111 }
// Using Browserify to add npm require() functionality to browser
// To bundle app.js file, run browserify app.js > bundle.js

const COLORS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
let gradientMemory = []


  // events -->
const eventListeners = () => {
  console.log('adding event listeners')
  const clickRandomGradientEvent = () => {
    const button = document.querySelector('#random-gradient-button').addEventListener('click', () => {
      setNewGradientBackground(randomHexoColor(), randomHexoColor());
    })
  }

  const copyGradientEvent = () => {
    const clickTarget = document.querySelector('#gradient-string')
    clickTarget.addEventListener('click', copyText())
  }

  const clickPreviousGradientEvent = () => {
    const button = document.querySelector('#previous-gradient-button')
    button.addEventListener('click', () => {
      // show previous gradient
    })
  }

  const clickBookmarkedGradientEvent = () => {
    const button = document.querySelector('#bookmark-gradient-button');
    button.addEventListener('click', (event) => {
      console.log('clicked bookmark')
      let storageData = JSON.parse(localStorage.gradientMemory)
      const newBookmark = document.createElement('li')
      newBookmark.className = "bookmark"
      newBookmark.style.background = `${storageData[storageData.length - 1]}`
      console.log(newBookmark)
      document.querySelector('#bookmarks').appendChild(newBookmark)  
      // debugger
    })
  }

  clickRandomGradientEvent();
  copyGradientEvent();
  clickBookmarkedGradientEvent();

}

// logic -->

const setNewGradientBackground = (color1, color2) => {
  const newGradient = createGradientString(color1, color2) 
  document.querySelector('body').style = `background: ${newGradient}`
  updateGradientMemory(newGradient);
  updateColorPicker(document.querySelector('#color1'), color1);
  updateColorPicker(document.querySelector('#color2'), color2);
  updateResult(newGradient);
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

const updateGradientMemory = (gradientString) => {
  if (localStorage.gradientMemory) {
    // console.log('gradientMemory found in localStorage')
    gradientMemory = JSON.parse(localStorage.gradientMemory)
    // console.log('fetched gradient memory from localStorage')
  }

  if (!gradientMemory.includes(gradientString)) {
    // console.log(gradientMemory)
    gradientMemory.push(gradientString);
    localStorage.setItem('gradientMemory', JSON.stringify(gradientMemory));
    // console.log(`updated gradient memory: ${gradientString}`)
    // console.log(localStorage.gradientMemory)
  }
}

const updateColorPicker = (colorPicker, color) => {
  colorPicker.value = color
}

const updateResult = (gradient) => {
  document.querySelector('#gradient-string').value = `background: ${gradient}`
}

const copyText = () => {
  const copyText = document.querySelector('#gradient-string');
  // copyText.select();
  // document.execCommand('copy');
  // console.log(`${copytText}`)
}

const run = () => {
  setNewGradientBackground(randomHexoColor(), randomHexoColor());
}

run();
eventListeners();