import { Link } from 'react-router-dom'

export default function Movie({ title }) {
  return (
    <div>
      <Link to={`/movie/${title}`}> {title} </Link>
    </div>
  )
}
