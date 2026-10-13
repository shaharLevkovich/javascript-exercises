const reverseString = function(string) {
    let reversed = "";
    for (let char of string) {
        reversed = char + reversed; // Pre-pend the character
    }
    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
