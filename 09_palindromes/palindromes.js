const palindromes = function (string) {
    let rawString = '';
    for (char of string) {
        if ((char >= 'a' && char <= 'z') || (char <= 'A' && char >= 'Z')) {
            rawString += char;
        }
    }

    let palindrome = '';
    for (let i = rawString.length - 1; i >= 0; i--) {
        palindrome += rawString[i];
    }

    if (palindrome === rawString) {
        return true;
    } else {
        return false;
    }
    
};

// Do not edit below this line
module.exports = palindromes;
