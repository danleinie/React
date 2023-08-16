const API_KEY = 'bf554f88'
const URL_OMDB = `https://www.omdbapi.com/?apikey=${API_KEY}`

export async function getMoviesByTitleAPI(title){
    
    // const response = await fetch(`${URL_OMDB}&s=${title}`)
    // const json = await response.json()
    // const movies = json.Search

    if(title === "") return null
    const response = 
    fetch(`${URL_OMDB}&s=${title}`)
        .then(response => response.json())
        .then(json => json.Search);

    return response
}