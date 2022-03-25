import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getMovies } from '../lib/services/movieService'
import Movie from './Movie'

export default function Movies() {
  const [movies, setMovies] = useState([])
  // const [actors, setActors] = useState([])

  const getMovieData = async () => {
    const movies = await getMovies()
    // setMovies(movies)
  }

  return (
    <>
    <h1 className="bg-red-400">Movies forside</h1>
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.slug}` > { movie, }} />: .title }} > </Link>))}
    </li>
      </ul>
      ))}
    
    <button type="button" onClick={getMovieData}>Klikk meg</button><Movie />
      </>
  )
}

// Lage en knapp i Movies som skal håndtere det å hente data eller optimalt sett bruk
// useEffect til å laste inn innhold umiddelbart
// Lage state i Movies som skal holde på data fra Sanity
