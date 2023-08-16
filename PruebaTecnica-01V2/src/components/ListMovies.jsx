import { MovieCard } from './MovieCard'

export const ListMovies = ({movies}) => {
    const hasMovies = movies?.length > 0
    return(
        hasMovies ? 
            (
            <ul className='grid gap-5 grid-cols-[auto-fit, minmax(200px, 1fr)] lg:grid-cols-3'>
              {
                movies.map(movie => (
                  <li key={movie.imdbID}>
                    <MovieCard
                    id={movie.imdbID}
                    title={movie.Title}
                    poster={movie.Poster}
                    type={movie.Type}
                    year={movie.Year}
                    />
                  </li>
                ))
              }
            </ul>
            )
            :
            (
              <p>No se encontró ninguna pelicula</p>
            )
    )
}