import './style.css'

const korzina = localStorage.korzina ? JSON.parse(localStorage.korzina) : []

let sum = 0

korzina.forEach((el:any)=>{
  document.body.insertAdjacentHTML('beforeend', renderCard(el))
  sum += el.price * el.count
})

document.body.insertAdjacentHTML('beforeend', `
  <p>Итого ${sum}$ <button>Оплатить</button></p> 
`)

function renderCard(el: any) {
  return `
  <div style="display:flex; margin:0 auto; max-width: 700px; padding: 20px; gap: 20px">
    <img style="min-width:200px" href="${el.image}">
    <div>
      <h4>${el.name}</h4>  
      <p>${el.description}</p>
      <p style="display:flex; justify-content: space-between;">
        <span>${el.price}</span>
        <span>${el.count}</span>
        <span>${el.price* el.count}$</span>
      </p>
    </div>
  </div>
  `
}