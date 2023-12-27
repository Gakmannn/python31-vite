import './style.css'

let obj = {} as any

const appDiv = document.getElementById('app') as HTMLDivElement

function download() {
  fetch('http://localhost:3000/mydata')
    .then(responce => responce.json())
    .then(data => {
      Object.assign(obj, data.data)
      console.log(data.data)
      render(data.data)
    })
    .catch(e=> console.log(e))
}

function render(obj: any) {
  let htmlString = ``
  for (let key in obj) {
    htmlString += `<div style="display:flex; margin:0 auto; max-width: 700px; padding: 20px; gap: 20px">
      <label>${key}</label><input type="text" data-key="${key}" value="${obj[key]}"><button data-key="${key}">X</button>
    </div>`
  }
  htmlString += `<div style="display:flex; margin:0 auto; max-width: 700px; padding: 20px; gap: 20px">
    <input id="key" type="text" placeholder="key"><input id="val" type="text" placeholder="val">
  </div>`
  appDiv.innerHTML = htmlString
}

document.addEventListener('click', async (e)=>{  
  const target = e.target as HTMLElement
  if (target.tagName=='BUTTON' && target.dataset.key) { 
    const res = await fetch(`http://localhost:3000/mydata/${target.dataset.key}`, {
      method: 'DELETE',
    })
    const data = await res.json()
    obj = data.data
    render(data.data)
  }
})

document.addEventListener('keydown', async (e)=>{
  if (e.code == 'Enter') {
    const target = e.target as HTMLInputElement
    if (target.dataset.key) {
      obj[target.dataset.key] = target.value
    } else {
      const keyInput = document.getElementById('key') as HTMLInputElement
      const valInput = document.getElementById('val') as HTMLInputElement
      obj[keyInput.value] = valInput.value
    }
    const res = await fetch('http://localhost:3000/mydata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(obj)
    })
    const data = await res.json()
    Object.assign(obj, data.data)
    render(data.data)
  }
})

download()

