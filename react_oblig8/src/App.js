import { Routes, Route } from 'react-router-dom'

import Movie from './components/Movie'
import Actors from './components/Actors'
import Actor from './components/Actor'
import Layout from './layout/Layout'
import Movies from './components/Movies'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Movies />} />
        <Route path="movies">
          <Route index element={<Movies />} />
          <Route path=":slug" element={<Movie />} />
        </Route>
        {/* <Route path="actor" /> */}
        {/* <Route index element={<Actor />} /> */}
        <Route path="actors" element={<Actors />} />
        <Route path="actor/:slug" element={<Actor />} />
      </Route>
    </Routes>
  )
}
