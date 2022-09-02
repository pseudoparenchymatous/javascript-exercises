const findTheOldest = function(people) {
    let thisYear = new Date();
    thisYear = thisYear.getFullYear;
    if (people.some(person => "yearOfDeath" in person)) {
        const peopleByAge = people.sort((current, next) => {
            const currentAge = (("yearOfDeath" in current) ? current.yearOfDeath : thisYear) - current.yearOfBirth;
            const nextAge = (("yearOfDeath" in next) ? next.yearOfDeath : thisYear) - next.yearOfBirth;
            return currentAge > nextAge ? -1 : 1;
        });
        return oldest[0];
    };
};

// Do not edit below this line
module.exports = findTheOldest;
