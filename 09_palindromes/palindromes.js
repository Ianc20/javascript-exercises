const palindromes = function (string) {
    let lowercaseStr = string.toLowerCase();
    let cleanedStr = lowercaseStr.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    let result = '';
    for(let index = cleanedStr.length -1; index >= 0; index --){
        result += cleanedStr.charAt(index);
    }
    return result == cleanedStr;
};

// Do not edit below this line
module.exports = palindromes;
