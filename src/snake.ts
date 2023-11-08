import './style.css'

const game = document.getElementById('game') as HTMLDivElement
const initMap = [
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

const cloneMap = (map:any[])=>{
  const newMap = []
  for (let str of map) {
    newMap.push([...str])
  }
  return newMap
}

let map = cloneMap(initMap)

let pause = false
let snake = [{ x: 7, y: 7, d: '', lastD: '' }]
let isRun = false
let lastD = ''
let direction = ''

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
    let x = snake[0].x
    let y = snake[0].y
    let d = ''
    map[snake[snake.length - 1].x][snake[snake.length - 1].y] = 0
    if (direction == 'u') {
      x--
      d = 'd' 
    }
    if (direction == 'r') { 
      y++
      d = 'l' 
    }
    if (direction == 'd') {
      x++
      d = 'u' 
    }
    if (direction == 'l') {
      y--
      d = 'r' 
    }
    // console.log(`0 (${snake[0].y},${snake[0].x})`, snake[1] ? `1 (${snake[1].y},${snake[1].x})` : ` 1 none`)
    if (x < 0 || x > map.length - 1 || y < 0 || y > map.length - 1 || map[x][y] == 1 ) {
      // Сброс игры. Змея врезалась в стену, или съела себя
      isRun = false
      snake.length = 1
      snake[0].x = 7
      snake[0].y = 7
      direction = ''
      lastD = ''
      map = cloneMap(initMap)
      generateRabbit()
      render()
      return
    }
    if (map[x][y]==2) {
      snake.push({ x, y, d, lastD })
      generateRabbit()
    }
    snake.unshift({ x, y, d, lastD })
    snake.pop()
    map[x][y] = 1
    lastD = d
    if (!pause) 
    setTimeout(render,500)
  }
  let content = ''
  for (let x=0; x<map.length; x++) {
    for (let y=0; y<map[x].length; y++) {
      if (map[x][y] == 1) {
        if (snake.length==1) {
          if (direction) {
            content += `<div class="snake single ${direction}"></div>`
          } else {
            content += '<div class="snake round"></div>'
          }
        } else {
          if (x == snake[0].x && y == snake[0].y) {
            content += `<div class="snake ${direction}"></div>`
          } else if (x == snake[snake.length - 1].x && y == snake[snake.length - 1].y) {
            content += `<div class="snake tail ${snake[snake.length - 1].d}"></div>`
          } else {
            let snakePeace = snake.find(el=>el.x==x&&el.y==y)
            if (snakePeace) {
              // console.log(snakePeace.d, snakePeace.lastD)
              content += `<div class="snake ${snakePeace.d}${snakePeace.lastD}"></div>`
            } else {
              content += `<div class="snake"></div>`
            }
          }
        }
      } else if (map[x][y] == 2) {
        content += '<div class="rabbit"></div>'
      } else {
        content += '<div></div>'
      }
    }
  }
  game.innerHTML = content
}

generateRabbit()
render()

document.addEventListener('keydown',(e)=>{
  if (!isRun) {isRun = true; render()}
  if ((e.code == 'ArrowUp' || e.code == 'KeyW') && direction != 'd') direction = 'u'
  if ((e.code == 'ArrowRight' || e.code == 'KeyD') && direction != 'l') direction = 'r'
  if ((e.code == 'ArrowDown' || e.code == 'KeyS') && direction != 'u') direction = 'd'
  if ((e.code == 'ArrowLeft' || e.code == 'KeyA') && direction != 'r') direction = 'l'
  if (e.code == 'KeyP') {
    pause = !pause
    render()
  }
})

