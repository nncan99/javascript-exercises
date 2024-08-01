const sumAll = function(start, end) {
    if (start < 0 || 
        end < 0 || 
        !Number.isInteger(start) || 
        !Number.isInteger(end) ||
        Number.isNaN(start) ||
        Number.isNaN(end)         
        ){
        return 'ERROR'
    }
    let result = 0;
    // if (start > end) {
    //     let temp = start;
    //     start = end;
    //     end = temp;
    // }
    
    // Faster way
    if (start > end) {
        [start, end] = [end, start];
    }

    for (let i = start; i <= end; i++){
        result += i;
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
