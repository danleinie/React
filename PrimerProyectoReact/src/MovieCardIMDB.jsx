import { useState } from "react";
export function MovieCardIMDB({ name, srcImage, rating, initialIsFavorite }) {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite)
  const textButton = !isFavorite ? '+ Añadir' : 'Añadido'
  const cssButton = !isFavorite ? 'bg-yellow-500 hover:bg-yellow-700' : 'bg-green-500 hover:bg-red-700'

  const clickFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <article className="flex flex-col bg-gray-800 bg-opacity-50 rounded-md">
      <header>
        <img
          className="w-52"
          src={srcImage}></img>
      </header>
      <section className="px-2 pt-2 pb-5">
        <div className="flex flex-row justify-between items-center pb-3">
          <span>{rating}</span>
          <button
            onClick={clickFavorite}
            className={`${cssButton} py-1 px-2 rounded-md font-semibold text-black transition duration-200 ease-in-out`}>{ textButton}</button>
        </div>
        <h1>{name}</h1>
      </section>
    </article>
  );
}
