import { useState } from 'react'
import { ListMovies } from './components/ListMovies'
import { useMovies } from './hooks/useMovies'

function App() {
  const [searchInput, setSearchInput] = useState('')
  const {movies, getMoviesByTitle}= useMovies({query:searchInput})

  function handleClickSearch (e) {
    e.preventDefault()
    // getMoviesByTitleAPI(searchInput).then( newMovies => {
    //   if(newMovies) setMovies(newMovies)
    // })
    getMoviesByTitle({query:searchInput})
  }

  function handleChangeSearchInput (e) {
    setSearchInput(e.target.value)
  }

  return (
    <>
      <div className='flex flex-col items-center gap-10'>
        <header>
          <h1>OMDb Movies</h1>
          <form className='form flex'>
            <input onChange={handleChangeSearchInput} value={searchInput} placeholder='Thor, Interstellar, etc.'></input>
            <button onClick={handleClickSearch} type='submit' className='bg-black hover:bg-gray-700'>Buscar</button>
          </form>
        </header>
        <main className='w-full'>
          {
            <ListMovies movies={movies}/>
          }
        </main>
      </div>
    </>
  )
}

export default App
