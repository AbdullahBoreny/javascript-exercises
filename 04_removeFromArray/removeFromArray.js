const removeFromArray = function(array, value) {
    const newArray =[];
for(let i = 0; i <array.length; i++) {
    if(array[i] === value) {
        delete array[i];
        
    }
    else {
    newArray.push(array[i]);
    }
}
return newArray;

};
removeFromArray([1, 2, 3, 4], 1,2,3); // should remove 3 and return [1,2,4]

// Do not edit below this line


// Do not edit below this line
module.exports = removeFromArray;
