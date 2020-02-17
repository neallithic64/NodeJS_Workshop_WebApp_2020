// let say I want a function that will be shared with different js files

module.exports = {
    add: function(i1, i2) {
        return i1 + i2;
    },
    subtract: function(i1, i2) {
        return i1 - i2;
    }
};

// const moduleFunction = {
//     divide: function(i1, i2) {
//         return i1 / i2;
//     },
//     multiply: function(i1, i2) {
//         return i1 * i2;
//     }
// };

// module.exports = moduleFunction;

// module.exports = {
//     ...moduleFunction,
//     add: function(i1, i2) {
//         return i1 + i2;
//     },
//     subtract: function(i1, i2) {
//         return i1 - i2;
//     }
// }