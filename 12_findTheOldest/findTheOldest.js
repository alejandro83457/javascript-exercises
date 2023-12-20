const findTheOldest = function (people) {
    let sorted = people.sort((a, b) => {
        let age1, age2;
        if ("yearOfDeath" in a) {
            age1 = a.yearOfDeath - a.yearOfBirth;
        } else {
            age1 = 2023 - a.yearOfBirth;
        }
        if ("yearOfDeath" in b) {
            age2 = b.yearOfDeath - b.yearOfBirth;
        } else {
            age2 = 2023 - b.yearOfBirth;
        }
        return age1 < age2 ? 1 : -1;
    });
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
