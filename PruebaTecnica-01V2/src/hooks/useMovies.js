import { useState, useRef } from 'react'
import { getMoviesByTitleAPI } from '../services/movie.js'


export function useMovies({query}){
    const [movies, setMovies] = useState([])
    const previousQuery = useRef(query)

    async function getMoviesByTitle({query}){
        if(previousQuery.current === query) return movies
        getMoviesByTitleAPI(query).then( newMovies => {
            if(newMovies) setMovies(newMovies)
          })
        previousQuery.current = query
    }
    return {movies , getMoviesByTitle}
}