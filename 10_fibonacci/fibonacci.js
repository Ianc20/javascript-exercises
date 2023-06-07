const fibonacci = function(num) {
    if(Number(num) < 1){
        return "OOPS"
    }
    let pointer = 1;
    let result = 1;
    for(let i = 2;i < Number(num);i ++){
        let temp = result;
        result += pointer;
        pointer = temp;
    }
    return result;
    
};

// Do not edit below this line
module.exports = fibonacci;
