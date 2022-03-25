export default {
    type: "document", 
    name: "movie",
    title: "Movie",
    fields: [
        {type: "string", 
        name: "movie",
        title: "Title",
        }, 
        {
        type: "reference",
        name: "actor", 
        title: "Actor",
        to: [{type: "actor"}]
        },
    ],
}


// Sette opp schema for movie
// Skal ha et felt kalt title av typen string
// Skal ha et felt kalt actor av typen reference

// Legge på valiation Requiered evn, ref leksjon 8, 2:07
