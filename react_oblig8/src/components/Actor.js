import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getActor, getMoviesByActor } from '../lib/services/movieService'

export default function Actor() {
  const { slug } = useParams()
  const [actorDetails, setActorDetails] = useState(null)
  const [actorMovies, setActorMovies] = useState([])

  useEffect(() => {
    const getActorDetails = async () => {
      const data = await getActor(slug)
      setActorDetails(...data)
    }
    getActorDetails()
  }, [slug])

  // Start på metoden for å hente alle filmer for en actor
  const getActorMovies = async () => {
    const actor = await getActor(slug)
    setActorDetails(...actor)
    const actorname = actorDetails.actor
    const movie = await getMoviesByActor(actorname)
    setActorMovies(movie)
  }

  return (
    <div>
      <h1 className="m-6 bg-teal-600 p-3 text-center text-xl">
        {actorDetails?.actor}
      </h1>

      <button
        className="bg-red-400 p-2 text-xl"
        type="button"
        onClick={getActorMovies}
      >
        Se alle filmer skuespilleren er med i
      </button>
      <ul>
        {actorMovies?.map((movie) => (
          <li
            key={movie._id}
            className="m-4 flex basis-full justify-around text-teal-900 underline"
          >
            {movie.movie}
          </li>
        ))}
      </ul>
    </div>
  )
}
