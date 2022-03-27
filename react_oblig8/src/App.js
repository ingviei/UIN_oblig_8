import { Routes, Route } from 'react-router-dom'
import Movies from './components/Movies'
import Movie from './components/Movie'
import Actors from './components/Actors'
import Actor from './components/Actor'
import Layout from './layout/Layout'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Movies />} />
        <Route path="movie">
          <Route index element={<Movies />} />
          <Route path=":slug" element={<Movie />} />
        </Route>
        <Route path="actor" />
        <Route index element={<Actors />} />
        <Route path=":slug" element={<Actors />} />
      </Route>
    </Routes>
  )
}
