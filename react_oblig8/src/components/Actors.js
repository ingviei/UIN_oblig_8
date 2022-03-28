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
      {/* {JSON.stringify(actors)} */}
      <button
        className="mt-5 bg-slate-500"
        type="button"
        onClick={getActorData}
      >
        Trykk her for å se alle skuespillere
      </button>
      {actors?.map((actor) => (
        <>
          {/* <Movie key={actor._id} actor={actor.actor} /> */}
          <Link
            className="text-teal-900 underline hover:bg-teal-500"
            to={`/actor/${actor.slug}`}
          >
            {actor.actor}
          </Link>
        </>
      ))}
    </div>
  )
}
