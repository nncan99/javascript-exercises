const palindromes = function (inputString) {
    //return a string that doesn't contain any space, punctuation
    const formatedString = inputString.split(/[\s,.!]/).join("").toLowerCase();
    
    const secondHalfString = 
        formatedString.length % 2 === 0?
        formatedString.slice(formatedString.length/2):
        formatedString.slice(formatedString.length/2 + 1);
    
    const firstHalfString = formatedString.slice(0, formatedString.length/2);
    return firstHalfString === secondHalfString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
