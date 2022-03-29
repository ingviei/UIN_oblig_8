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
          {/* <Route index element={<Movies />} /> */}
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
    </>
  )
}
