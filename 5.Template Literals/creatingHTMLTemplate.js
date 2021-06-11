//Creating HTML Templates
//Without using any templating libraries such as moustache or handlebars, we can create templates using template literals,
// which can be reused.

const wendy = {  "id": 1,
    "firstName": "Wendy",
    "lastName":  "Harper",
    "city":      "Tulsa"
}

const bio = person => {
    return `<p>
    <h1>
        <span>${person.firstName}</span>
        <span>${person.lastName}</span>
     </h1>
        <address>${person.city}</address>
    </p>`
}
console.log(bio(wendy))