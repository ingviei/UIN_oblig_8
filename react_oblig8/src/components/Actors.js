import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllActors } from '../lib/services/movieService'

export default function Actors() {
  const [actors, setActors] = useState([])

  const getActorData = async () => {
    const actor = await getAllActors()
    setActors(actor)
  }

  return (
    <div>
      <h1>Actors</h1>
      {JSON.stringify(actors)}
      <ul>
        {actors.map((actor) => (
          <li key={actor._id}>
            <Link to={`/actor/${actor.fullname}`}> {actor.fullname} </Link>
          </li>
        ))}
      </ul>
      <button
        className="mt-5 bg-slate-500"
        type="button"
        onClick={getActorData}
      >
        Trykk her for å se alle skuespillere
      </button>
    </div>
  )
}
