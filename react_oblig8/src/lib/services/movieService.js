import client from '../client'

const movieFields = `
_id, 
movie,  
"actor": actor->fullname, 
"slug": slug.current,
`

const actorFields = `
actor,
_id,
"actor": fullname,
"slug": slug.current,
`
const movieTitle = `
movie
`

// Hente alle filmer
export async function getMovies() {
  const data = await client.fetch(`*[_type == 'movie']{${movieFields}}`)
  console.log(data)
  return data
}

// Hente alle skuespillere
export async function getAllActors() {
  const data = await client.fetch(`*[_type == 'actor']{${actorFields}}`)
  console.log(data)
  return data
}

export async function getActor(slug) {
  const data = await client.fetch(
    `*[_type == 'actor' && slug.current==$slug]{${actorFields}}`,
    { slug }
  )
  return data
}

// Hente alle filmer for en skuespiller
export async function getMoviesByActor(actor) {
  const data = await client.fetch(
    `*[_type == "movie" && actor->fullname==$actor]{${movieTitle}}`,
    { actor }
  )
  return data
}
