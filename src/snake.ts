import './style.css'

const game = document.getElementById('game') as HTMLDivElement
const map = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]

const snake = {x:7,y:7}
let isRun = false
let direction = 'r'

function generateRabbit() {
  const x = Math.floor(Math.random()*15)
  const y = Math.floor(Math.random()*15)
  if (!map[x][y]) {
    map[x][y] = 2
  } else {
    generateRabbit()
  }
}

function render() {
  if (isRun) {
    map[snake.x][snake.y] = 0
    if (direction=='u') snake.x--
    if (direction=='r') snake.y++
    if (direction=='d') snake.x++
    if (direction=='l') snake.y--
    if (snake.x < 0 || snake.x > map.length-1 || snake.y < 0 || snake.y > map.length-1 ) {
      isRun = false
      snake.x = 7
      snake.y = 7
      map[snake.x][snake.y] = 1
      render()
      return
    }
    if (map[snake.x][snake.y]==2) {
      generateRabbit()
    }
    map[snake.x][snake.y] = 1
    setTimeout(render,500)
  }
  let content = ''
  for (let row of map) {
    for (let col of row) {
      content += col == 1 ? '<div class="snake"></div>' : col == 2 ? '<div class="rabbit"></div>' : '<div></div>'
    }
  }
  game.innerHTML = content
}

generateRabbit()
render()

document.addEventListener('keydown',(e)=>{
  if (!isRun) {isRun = true; render()}
  if (e.code == 'ArrowUp' || e.code == 'KeyW') direction = 'u'
  if (e.code == 'ArrowRight' || e.code == 'KeyD') direction = 'r'
  if (e.code == 'ArrowDown' || e.code == 'KeyS') direction = 'd'
  if (e.code == 'ArrowLeft' || e.code == 'KeyA') direction = 'l'
})

