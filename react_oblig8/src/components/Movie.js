export default function Movie({ title, actor }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{actor}</h2>
    </>
  )
}

// Lage en Movie komponent som kan ta i mot to props (title, actor).
// Du skal seinere bruke disse propsa når du skal vise dataen (se nest siste punkt)
