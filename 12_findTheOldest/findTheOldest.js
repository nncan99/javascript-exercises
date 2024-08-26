const findTheOldest = function(arrayOfPeople) {
    let now = new Date();
    
    const maxAge = Math.max(...arrayOfPeople.map(person => {
        return  person.yearOfDeath ?
                person.yearOfDeath - person.yearOfBirth :
                now.getFullYear() - person.yearOfBirth;
    }))

    return arrayOfPeople.find( person => {
        let age = person.yearOfDeath ?
                  person.yearOfDeath - person.yearOfBirth :
                  now.getFullYear() - person.yearOfBirth;
        return age === maxAge
    })
    
};

// Do not edit below this line
module.exports = findTheOldest;
