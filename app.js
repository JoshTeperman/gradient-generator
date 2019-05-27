// const jscolor = require('jscolor')
// module.exports = function (n) { return n * 111 }
// Using Browserify to add npm require() functionality to browser
// To bundle app.js file, run browserify app.js > bundle.js

const COLORS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
let gradientMemory = []
let bookmarkID = 0


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

  const clickBookmarkEvent = () => {
    const bookmarksArray = document.querySelectorAll('.bookmark')
    bookmarksArray.forEach((gradientBookmark) => {
      gradientBookmark.addEventListener('click', () => {
        const gradient = gradientBookmark.style.background
        document.body.style.background = gradient
        updateResult(gradient)
      })
    })
  }

  const clickBookmarkGradientEvent = () => {
    const button = document.querySelector('#bookmark-gradient-button');
    const bookmarks = document.querySelector('#bookmarks')
    button.addEventListener('click', (event) => {
      
      const currentGradient = document.body.style.background
      // const bookmarksArray = document.querySelectorAll('.bookmark')
      // if (Array.from(bookmarksArray).find(bookmark => bookmark.style.background = currentGradient)) {
      //   console.log('this bookmark already exists')
      // } else {
      //   console.log('this is a new bookmark')
      // }
      const newBookmark = document.createElement('li')
      newBookmark.className = "bookmark"
      newBookmark.setAttribute('id', `${bookmarkID}`)
      bookmarkID += 1
      newBookmark.style.background = currentGradient
      bookmarks.style.display = 'block'
      bookmarks.appendChild(newBookmark)  
      clickBookmarkEvent();
    })
  }

  clickRandomGradientEvent();
  copyGradientEvent();
  clickBookmarkGradientEvent();


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
    gradientMemory = JSON.parse(localStorage.gradientMemory)
  }

  if (!gradientMemory.includes(gradientString)) {
    gradientMemory.push(gradientString);
    localStorage.setItem('gradientMemory', JSON.stringify(gradientMemory));
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

/*
access last gradient in memory: 
let storageData = JSON.parse(localStorage.gradientMemory)
newBookmark.style.background = `${storageData[storageData.length - 1]}`

*/
