const repeatString = function(string, num) {
    let finalString = '';
    for (let i = 0; i < num; i++) {
        finalString += string;
    }

    if (!finalString) {
        return "ERROR";
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
