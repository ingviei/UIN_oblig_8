import client from '../client'

const fields = `
_id, 
movie,  
"actor": actor->fullname, 
"slug": slug.current,
`

const actorFields = `
_id, 
actor, 
"actor": fullname,
"slug": slug.current,
`

export async function getMovies() {
  const data = await client.fetch(`*[_type == 'movie']{${fields}}`)
  console.log(data)
  return data
}

export async function getAllActors() {
  const data = await client.fetch(`*[_type == 'actor']{${actorFields}}`)
  console.log(data)
  return data
}

export async function getMoviesByActor(actor) {
  const data = await client.fetch(
    `*[_type == "quiz" && actor->actor.fullname==$category]{${fields}}`,
    { actor }
  )
  console.log(data)
  return data
}
