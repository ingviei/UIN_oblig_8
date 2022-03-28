import client from '../client'

const fields = `
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
// Hente alle filmer
export async function getMovies() {
  const data = await client.fetch(`*[_type == 'movie']{${fields}}`)
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
  console.log('test', slug)
  const data = await client.fetch(
    `*[_type == 'actor' && slug.current=="kate-winslet"]{${actorFields}}`,
    { slug }
  )
  console.log(data)
  return data
}

// Hente alle filmer for en skuespiller
export async function getMoviesByActor(actor) {
  const data = await client.fetch(
    `*[_type == "quiz" && actor->actor.fullname==$actor]{${fields}}`,
    { actor }
  )
  console.log(data)
  return data
}
