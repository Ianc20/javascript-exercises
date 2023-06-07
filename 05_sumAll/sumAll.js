const sumAll = function(start, end) {
    if(start < 0 ||  typeof start != 'number' || typeof end != 'number'){
        return 'ERROR';
    }
    if(start > end){
        let a = start;
        start = end;
        end = a;

    }
    let sum = 0;

    for(let i = start; i <=end; i ++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
