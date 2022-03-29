import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <ul className="flex flex-row bg-slate-700 p-3 text-2xl text-gray-100 underline">
        <li className="flex basis-full justify-around ">
          <Link to="/">Home </Link>
        </li>
        <li className="flex basis-full justify-around">
          <Link to="/movies">Movies </Link>
        </li>
        <li className="flex basis-full justify-around">
          <Link to="/actors">Actors </Link>
        </li>
      </ul>
    </nav>
  )
}
