import client from '../client'

const fields = `
movie,  
"actor": actor->fullname, 
`

export async function getMovies() {
  const data = await client.fetch(`*[_type == 'movie']{${fields}}`)
  console.log(data)
  JSON.stringify(data)
  return data
}
