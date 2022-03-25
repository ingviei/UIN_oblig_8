import { getMovies } from '../lib/services/movieService'
import Movie from './Movie'


export default function Movies() {
  const getSanityData = async () => {
      const movies = await getMovies()
      console.log(movies)
  }

  return (
    <div>
      <button type="button" onClick={getSanityData}>
        Klikk meg
      </button>
      < Movie />
    </div>
  )
}

// Lage en knapp i Movies som skal håndtere det å hente data eller optimalt sett bruk
// useEffect til å laste inn innhold umiddelbart
// Lage state i Movies som skal holde på data fra Sanity
