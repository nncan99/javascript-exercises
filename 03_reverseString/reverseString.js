const reverseString = function(string) {
    let result = ''
    for (let i=string.length; i>0; i--){
        if (string ===''){
            result = '';
        } else {
        result += string[i-1];
        }
    }
    return result;
};
console.log(reverseString('hello'));
// Do not edit below this line
module.exports = reverseString;
