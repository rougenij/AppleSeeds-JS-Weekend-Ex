// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

function findUniq(arr){
    let diffNum = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length; j++)
        if(arr[i] !== arr[j])
        diffNum = arr[j]
    }    
    return diffNum
}