import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMovies, getMoviesByActor } from '../lib/services/movieService'
import Movie from './Movie'

export default function Movies() {
  const [movies, setMovies] = useState([])

  const getMovieData = async () => {
    const movie = await getMovies()
    setMovies(movie)
  }

  // Start på metoden for å hente alle filmer for en actor
  const actorsMovies = async (actor) => {
    const data = await getMoviesByActor(actor)
    setMovies(data)
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
          {/* {JSON.stringify(movies)} */}
          {movies?.map((movie) => (
            <>
              <Movie key={movie._id} title={movie.movie} />
              <Link to={`/movie/${movie.movie}`}> {movie.movie} </Link>
            </>
          ))}
        </section>
        <Movie key={actor._id} actor={actorsMovies} />
      </div>
    </>
  )
}

// Lage en knapp i Movies som skal håndtere det å hente data eller optimalt sett bruk
// useEffect til å laste inn innhold umiddelbart
// Lage state i Movies som skal holde på data fra Sanity
