import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getActor } from '../lib/services/movieService'

export default function Actor() {
  const { slug } = useParams()

  useEffect(() => {
    const actor = async () => {
      const data = await getActor()
      console.log(data)
    }
    actor()
  }, [slug])

  return <h1>{slug}</h1>
}
