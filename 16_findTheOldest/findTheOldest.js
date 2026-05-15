const findTheOldest = function(p) {
    const people = p;
    for (i=0; i<people.length; i++){
        if (people[i].yearOfDeath === undefined) {
            const yn = new Date();
            let yd = yn.getFullYear();
            people[i].yearOfDeath = yd;}
    }
    let old = people["0"];
    for (i=1; i<people.length; i++){
        let a = old.yearOfDeath - old.yearOfBirth;
        let b = people[i].yearOfDeath - people[i].yearOfBirth;
        if (b > a) {old = people[i];}
    }
    return old;

};

// Do not edit below this line
module.exports = findTheOldest;




