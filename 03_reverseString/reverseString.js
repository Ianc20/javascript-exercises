const reverseString = function(string) {
    let result = ''
    for(let index = string.length -1; index >= 0; index --){
        result += string.charAt(index)
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;
