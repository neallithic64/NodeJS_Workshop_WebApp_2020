// consists of key value pair
// <key> : <value>
let object = {
    name: 'Lynux',
    age: 20,
    courses: [ 'CCPROG1', 'CCPROG2' ],
    current: {
        name: 'gf material',
        gender: 'f'
    },
    exes: [
        {
            name: 'mystery girl 1',
            age: 20
        },
        {
            name: 'mysterry girl 3'
        }
    ]
};

// this is how you look at your data in mongodb/nosql

// neat things to do with objects
let o1 = {}; // empty hash

// adding a key value
o1.name = 'Gerald';
o1['age'] = 10; // < helpful in some situation

let key = 'gender';
o1[key] = 'male';

console.log(o1);

// deleting a key value
delete o1.name;
delete o1['age'];
delete o1[key];

console.log(o1);





