import { useEffect, useState } from 'react'
import { getMovies } from '../lib/services/movieService'
import Movie from './Movie'

export default function Movies() {
  const [movies, setMovies] = useState([])

  //Henter alle filmer
  useEffect(() => {
    const listMovies = async () => {
      const data = await getMovies()
      setMovies(data)
    }
    listMovies()
  }, [])

  return (
    <div>
      <ul>
        {movies?.map((movie) => (
          <li key={movie._id}>
            <Movie title={movie.movie} />
          </li>
        ))}
      </ul>
    </div>
  )
}
