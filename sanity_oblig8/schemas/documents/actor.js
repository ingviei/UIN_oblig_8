export default {
    type: "document",
    name: "actor", 
    title: "Actor",
    fields: [{
        type: "string",
        name: "fullname",
        title: "Full name",
    },
        {
        type: "slug", 
        name: "name",
        title: "Name",
},
],     
}

// Sette opp schema for actor
// Skal ha et felt kalt full name av typen string
// Skal ha et felt kalt name av typen slug 