const findTheOldest = function(people) {
  const date = new Date();
  const year = date.getFullYear();

  const oldest = people.sort((current, next) => {
    const currentAge = (current.hasOwnProperty("yearOfDeath") ? current.yearOfDeath : year) - current.yearOfBirth;
    const nextAge = (next.hasOwnProperty("yearOfDeath") ? next.yearOfDeath : year) - next.yearOfBirth;
    return currentAge > nextAge ? -1 : 1;
  });
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
