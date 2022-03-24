export default {
    type: "document", 
    name: "movie",
    title: "Title",
    fields: [
        {
        type: "reference",
        title: "Actor",
        name: "actor", 
        to: [{type: "person"}]
        }
    ]
}


/* Sette opp schema for movie
Skal ha et felt kalt title av typen string
Skal ha et felt kalt actor av typen reference*/

