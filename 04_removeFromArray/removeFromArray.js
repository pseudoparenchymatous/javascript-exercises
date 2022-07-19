const removeFromArray = function(array, ...remove) {
    let finalArray = [];
    outer: for (let item of array) {
        for (let toRemove of remove) {
            if (item === toRemove) {
                continue outer;
            }
        }
        finalArray.push(item);
    }
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
