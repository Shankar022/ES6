// Template string makes it easy to create strings that are longer and have lot of dynamic content
// (variables) with exact amount of spaces, line breaks and indentation.
//
// Template literals allows to:
//
// Create complex strings easily.
// Evaluate an expression in templates.
// Build complex html and xml templates (template functions).
// Instead of single quotes or double quotes, ES6 uses BACKTICK or OPENQUOTE ( " ` " ) character to create template literals.


// Creating complex strings
// Creating multiline strings no longer requires slash n (\n)
//
// Creating a multiline string in JS:

let bio = "Wendy Harper \n Software Engineer - TCS \n 3 Years in Web development"

// Creating the same in ES6

let bio = `Wendy Harper
           Software Engineer - TCS
           3 Years in Web development`

//The literal is delimited by backticks and the interpolated expressions inside the literal are delimited by ${ variable }.

let person = {
    fN: `Wendy`,
    lN: `Harper`,
    name: function() {
        return `My name is ${this.fN} ${this.lN}`;
    }
};
person.name();