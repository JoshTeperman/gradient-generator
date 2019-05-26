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
const generateRandomGradient = () => {
  let color1 = randomHexoColor();
  let color2 = randomHexoColor();
}

const randNum = () => {
  return Math.floor(Math.random() * COLORS.length)
}

const setNewGradientBackground = (color1, color2) => {
  const newGradient = createGradientString(color1, color2) 
  document.querySelector('body').style = `background: ${newGradient}`

  updateColorPicker(document.querySelector('#color1'), color1);
  updateColorPicker(document.querySelector('#color2'), color2);
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
}
  



    
const run = () => {
  setNewGradientBackground(randomHexoColor(), randomHexoColor());
}



run();
eventListeners();