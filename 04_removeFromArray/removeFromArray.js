const removeFromArray = function(array, ...theArgs) {
    let newArray =[];
    newArray = array.filter((el) => !theArgs.includes(el));
    return newArray;

};removeFromArray([1, 2, 3, 4], 1,3); // should remove 3 and return [1,2,4]


// Do not edit below this line


// Do not edit below this line
module.exports = removeFromArray;
