// multiline use ``
let longString = `
asdf
asdf
`;

console.log(longString);

let cat = 'cat';
let a = 'con' + cat; // normal way
let b = `con${cat}`; // preffered way 

let c = `${a} is equal to ${b} and they both have ${cat}`;
