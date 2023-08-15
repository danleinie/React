import { useState, useEffect} from 'react'
import { MovieCard } from './components/MovieCard'

const API_KEY = 'bf554f88'
const URL_OMDB = `https://www.omdbapi.com/?apikey=${API_KEY}`

function App() {
  const [peliculas, setPeliculas] = useState([])
  const [textSearch, setTextSearch] = useState('')

  // useEffect(() => {
  //   fetch(`${URL_OMDB}&s=${textSearch}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.Search) {
  //         setPeliculas(data.Search)
  //       }
  //     })
    
  // },[textSearch])

  const handleClickSearch = (e) => {
      fetch(`${URL_OMDB}&s=${textSearch}`)
      .then(response => response.json())
      .then(data => {
        if (data.Search) {
          setPeliculas(data.Search)
        }
      })
  }

  const handleTextSearchChange = (e) => {
    setTextSearch(e.target.value)
  }

  return (
    <>
      <main className='flex flex-col gap-5 p-20'>
        <section className='flex justify-center gap-3'>
          <input onChange={handleTextSearchChange} className='text-black p-3' placeholder='Busca su película...'>
          </input>
          <button onClick={handleClickSearch} className='bg-yellow-500 p-2'>
            Buscar
          </button>
        </section>
        <section className='flex flex-wrap gap-10'>
          {
            peliculas.map(peli => {
            return (
              <MovieCard
                key={peli.imdbID}
                title={peli.Title}
                year={peli.Year}
                posterURL={peli.Poster}>
              </MovieCard>
            )
            })
          }
        </section>
      </main>
    </>
  )
}

export default App
