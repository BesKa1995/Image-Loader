const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let blurThickness = 30
let blurReducer = 30
let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }
  loadText.innerHTML = `${load}%`
  loadText.style.opacity = 1 - load / 100
  bg.style.filter = `blur(${blurThickness}px)`
  blurThickness = blurThickness - (blurReducer / 100)
}
