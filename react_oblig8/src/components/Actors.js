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
      <button
        className="bg-red-400 p-3 text-xl"
        type="button"
        onClick={getActorData}
      >
        Trykk her for å se alle skuespillere
      </button>
      <ul>
        {actors?.map((actor) => (
          <li key={actor._id} className="m-4 flex basis-full justify-around">
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
