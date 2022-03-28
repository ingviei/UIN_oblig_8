import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMovies, getMoviesByActor } from '../lib/services/movieService'
import Movie from './Movie'

export default function Movies() {
  const [movies, setMovies] = useState([])

  // Henter alle filmer
  const getMovieData = async () => {
    const movie = await getMovies()
    setMovies(movie)
  }

  // useEffect(() => {
  //   const listMovies = async () => {
  //     const data = await getMovies()
  //     setMovies(data)
  //   }
  //   listMovies()
  // }, [])

  // <ul>
  //       {movies?.map((movie) => (
  //         <li key={movie._id}>
  //           <Link to={`/movie/${movie.movie}`}> {movie.movie} </Link>
  //           <Movie title={movie.movie} />
  //         </li>
  //       ))}
  //     </ul>

  return (
    <>
      <div>
        <h1 className="bg-red-400">Movies forside</h1>
        <button
          className="mt-5 bg-slate-500"
          type="button"
          onClick={getMovieData}
        >
          Trykk her for å se alle filmer
        </button>
        <section>
          <ul>
            {movies?.map((movie) => (
              <li key={movie._id}>
                <Link
                  className="text-teal-900 underline hover:bg-teal-500"
                  to={`/movies/${movie.slug}`}
                >
                  {movie.movie}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        {/* <Movie key={actor._id} actors={actorsMovies} /> */}
      </div>
    </>
  )
}
