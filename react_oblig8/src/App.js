import { Routes, Route } from 'react-router-dom'
import Movies from './components/Movies'
import Movie from './components/Movie'
import Actors from './components/Actors'
import Actor from './components/Actor'

export default function App() {
  return (
    <Routes>
      <Route path="movie" />
      <Route index element={<Movies />} />
      <Route path=":slug" element={<Movie />} />

      {/* <Route path="actor" />
      <Route index element={<Actors />} />
      <Routes path=":slug" element={<Actor />} /> */}
    </Routes>
  )
}
