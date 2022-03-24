export default {
    type: "document", 
    name: "movie",
    title: "Title",
    fields: [
        {type: "string", 
        name: "movie",
        title: "Title",
        }, 
        {
        type: "reference",
        title: "Actor",
        name: "actor", 
        to: [{type: "actor"}]
        },
    ],
}


// Sette opp schema for movie
// Skal ha et felt kalt title av typen string
// Skal ha et felt kalt actor av typen reference
