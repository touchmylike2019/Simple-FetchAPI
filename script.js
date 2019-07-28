const app = document.getElementById('root')
const container = document.createElement('div')
const logo = document.createElement('img')
logo.src = './logo.png'

container.setAttribute('class', 'container')
app.appendChild(logo)
app.appendChild(container)

fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(data => {
        data.forEach(movie => {
            const card = document.createElement('div')
            const h1 = document.createElement('h1')
            const p = document.createElement('p')
            
            card.setAttribute('class', 'card')
            movie.description = movie.description.substring(0, 300)
            h1.textContent = movie.title
            p.textContent = `${movie.description}...`

            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(p)
        })
    })