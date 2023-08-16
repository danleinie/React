export function MovieCard ({id, title, poster, type, year}) {
    const stylesMovies = [
        {
          type : "series",
          badgetCSS : "bg-blue-700" 
        },
        {
          type : "movie",
          badgetCSS : "bg-yellow-600" 
        }
      ]
    return(
        <div className='flex gap-5 bg-slate-700 rounded-md p-3 shadow-lg'>
            <div className='w-1/2'>
            <img src={poster} alt={title} className='rounded-md'></img>
            </div>
            <div className='w-1/2 flex flex-col justify-between'>
            <div>
                <h2>{title}</h2>
                {
                <a className={`${stylesMovies.find(movieStyle => movieStyle.type === type)?.badgetCSS} text-white py-1 px-4 rounded-full no-underline`} href='#'>{type}</a>
                }
            </div>
            <p className='font-light'>{year}</p>
            </div>
        </div>
    )
}