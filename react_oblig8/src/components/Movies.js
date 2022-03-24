export default function Movies() {
return (
<div>
    <button onclick={}>Klikk</button>
    </div>
)
}

// Lage en Movie komponent som kan ta i mot to props (title, actor). 
// Du skal seinere bruke disse propsa når du skal vise dataen (se nest siste punkt)
// Lage en knapp i Movies som skal håndtere det å hente data eller optimalt sett bruk 
// useEffect til å laste inn innhold umiddelbart
// Lage state i Movies som skal holde på data fra Sanity