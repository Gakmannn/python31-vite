import './style.css'

const form = document.forms[0]
const title = form.querySelector('#title') as HTMLInputElement
const type = form.querySelector('#type') as HTMLSelectElement
const app = document.getElementById('app')
const paginationDiv = document.getElementById('pagination')

form.addEventListener('submit', async (e)=>{
  e.preventDefault()
  if (!title.value) return
  try {
    const resp = await fetch(`https://www.omdbapi.com/?apikey=a821535d&s=${title.value}&type=${type.value}`)
    const data = await resp.json()
    renderPagination(data.totalResults, 1)
    render(data.Search)
  } catch(e) {
    console.log(e)
  }
})

// Poster:"https://m.media-amazon.com/images/M/MV5BN2ZmZGM3YTktOTk0Ni00Mjc4LThjYzEtYmExZGJiZjBlOTg3XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg"
// Title
// :
// "Sad Movie"
// Type
// :
// "movie"
// Year
// :
// "2005"
// imdbID
// :
// "tt0475711"

function render(arr:any[]) {
  let films = ''
  for (let el of arr) {
    films += `<div class="flex">
<img src="${el.Poster}">    
<div>
<p>${el.Title}, ${el.Year}</p> 
<p>${el.Type} ${el.imdbID}</p> 
</div>    
</div>`
  }
  if (app)
  app.innerHTML = films
}

function renderPagination(total: number, page: number) {
  const totalPages = Math.ceil(total/10)
  let pagination = ''
  for (let i=0;i<totalPages;i++) {
    pagination += `<button data-action="pagination">${i+1}</button>`
  }
  paginationDiv?.insertAdjacentHTML('beforeend', pagination)
}

document.addEventListener('click', async (e)=>{
  const target = e.target as HTMLButtonElement
  if (target.dataset.action == 'pagination') {
    try {
      const resp = await fetch(`http://www.omdbapi.com/?apikey=a821535d&s=${title.value}&type=${type.value}&page=${target.textContent}`)
      const data = await resp.json()
      render(data.Search)
    } catch (e) {
      console.log(e)
    }
  }
})

