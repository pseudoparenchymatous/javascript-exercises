const findTheOldest = function(people) {

  const oldest = people.sort((current, next) => {
    const currentAge = current.yearOfDeath - current.yearOfBirth;
    const nextAge = next.yearOfDeath - next.yearOfBirth;
    return currentAge > nextAge ? -1 : 1;
  });
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
