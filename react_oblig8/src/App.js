import { Routes, Route } from 'react-router-dom'

import Movie from './components/Movie'
import Actors from './components/Actors'
import Actor from './components/Actor'
import Layout from './layout/Layout'
import Movies from './components/Movies'
import Home from './components/Home'
import Navigation from './components/Navigation'

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movie/:slug" element={<Movie />} />
          <Route path="actors" element={<Actors />} />
          <Route path="actor/:slug" element={<Actor />} />
        </Route>
      </Routes>
    </>
  )
}
