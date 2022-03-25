import client from '../client'

const fields = `
title, 
"slug": slug.current, 
"actor": actor->name.current, 
`

export async function getMovies() {
  const data = await client.fetch(`*[_type == 'movie']{${fields}}`)
  console.log(data)
  JSON.stringify(data)
  return data
}
