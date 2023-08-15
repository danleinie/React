export const MovieCard = ({ title, year, posterURL }) => {
    return (
        <div className="flex flex-col bg-gray-400 pb-3 gap-2 w-48"> 
            <img src={posterURL} alt={`Poster de ${title}`}></img>
            <h1 className="text-center">{`${title} (${year})`}</h1>
        </div>
    )
}