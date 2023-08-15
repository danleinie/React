import { MovieCardIMDB } from "./MovieCardIMDB";
export function App() {
  return(
    <>
      <MovieCardIMDB
        name='1. Oppenheimmer'
        rating='8.6'
        initialIsFavorite={true}
        srcImage="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ncKCQVXgk4BcQV6XbvesgZ2zLvZ.jpg"
      >
      </MovieCardIMDB>
      <MovieCardIMDB
        name='2. Barbie'
        rating='7.5'
        initialIsFavorite={false}
        srcImage="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fNtqD4BTFj0Bgo9lyoAtmNFzxHN.jpg"
      >
      </MovieCardIMDB>
    </>
  )
}
