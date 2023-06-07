const findTheOldest = function(peoples) {
    let currentDate = new Date();
    peoples.forEach(element => {
        if(typeof element.yearOfDeath != 'number'){
            let currentYear = currentDate.getFullYear();
            element.age = currentYear - element.yearOfBirth;
        }else{
            element.age = element.yearOfDeath - element.yearOfBirth;
        }
    });
    peoples.sort(function(a,b){
        return b.age - a.age;
    });
    return peoples[0];
};

// Do not edit below this line
module.exports = findTheOldest;
