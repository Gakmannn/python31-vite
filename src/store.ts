import './style.css'
let tovars = [] as any[]
const korzina = [] as any[]

function download() {
  // fetch('https://fakerapi.it/api/v1/products?_quantity=10')
  fetch('store.json')
    .then(responce => responce.json())
    .then(data => {
      tovars = data
      for (let el of data) {
        document.body.insertAdjacentHTML('beforeend', renderCard(el)) // рендерим карточки, добавляя их в конец body
      }
    })
    .catch(e=> console.log(e))
}

function renderCard(el: any) {
  return `
  <div style="display:flex; margin:0 auto; max-width: 700px; padding: 20px; gap: 20px">
    <img style="min-width:200px" src="${el.image}">
    <div>
      <h4>${el.name}</h4>  
      <p>${el.description}</p>
      <p style="display:flex; justify-content: space-between;">
        <span>${el.price}</span>
        <button data-id="${el.id}">Добавить в корзину</button>
      </p>
    </div>
  </div>
  `
}

document.body.addEventListener('click', (e)=>{
  const target = e.target as HTMLElement
  if (target.dataset.id) {
    const el = korzina.find(el => el.id == target.dataset.id)
    if (el) {
      el.count ++
    } else {
      const newEl = tovars.find(el => el.id == target.dataset.id)
      newEl.count = 1
      korzina.push(newEl)
    }
    localStorage.korzina = JSON.stringify(korzina)
  }
})

download()

