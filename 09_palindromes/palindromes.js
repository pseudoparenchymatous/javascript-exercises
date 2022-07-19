const palindromes = function (string) {
    let palindrome = '';
    let rawString = '';
    for (char of string) {
        if ((char >= 'a' && char <= 'z') || (char <= 'A' && char >= 'Z')) {
            rawString += char;
        }
    }
    for (let i = rawString.length - 1; i >= 0; i--) {
        if ((rawString[i] >= 'a' && rawString[i] <= 'z') || (rawString[i] >= 'A' && rawString <= 'Z')) {
            palindrome += rawString[i];
        }
    }

    if (string === rawString) {
        return true;
    } else {
        return false;
    }
    
};

// Do not edit below this line
module.exports = palindromes;
