const repeatString = function(string, times) {
    if(times < 0){
        return 'ERROR'
    }
    let result = '';
    for(let count = 0; count < times; count++){
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
