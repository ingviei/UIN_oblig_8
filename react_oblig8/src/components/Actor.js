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
      <h1>{actorDetails?.actor}</h1>

      <button className="bg-white" type="button" onClick={getActorMovies}>
        Klikk for å se alle filmer
      </button>

      <ul>
        {actorMovies?.map((movie) => (
          <li key={movie._id}>{movie.movie}</li>
        ))}
      </ul>
    </div>
  )
}
