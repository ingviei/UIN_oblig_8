import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllActors } from '../lib/services/movieService'
import Movie from './Movie'

export default function Actors() {
  const [actors, setActors] = useState([])

  // Henter ut alle skuespillere
  const getActorData = async () => {
    const actor = await getAllActors()
    setActors(actor)
  }

  return (
    <div>
      <h1 className="bg-red-400">Actors</h1>
      <button
        className="mt-5 bg-slate-500"
        type="button"
        onClick={getActorData}
      >
        Trykk her for å se alle skuespillere
      </button>
      {/* <Movie key={actor._id} actor={actor.actor} /> */}
      <ul>
        {actors?.map((actor) => (
          <li key={actor._id}>
            <Link
              className="text-teal-900 underline hover:bg-teal-500"
              to={`/actor/${actor.slug}`}
            >
              {actor.actor}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
