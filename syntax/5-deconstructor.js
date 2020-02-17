// Array deconstructing
let array = [ 2, 3, 4 ];


let [ a, b ] = array;
console.log(a);
console.log(b);

[ a, , b ] = array;
console.log(a);
console.log(b);

// Object deconstructing
let object = {
    fname: 'gerald',
    lname: 'dalan',
    minitial: 'f'
};

// rather than 
// let fname = object.fname;
// let lname = object.lname;
let { fname, lname } = object;




