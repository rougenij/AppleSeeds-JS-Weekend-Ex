// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F6.6


function twoWords(word){
    let divideWord = word.split(" ")
    return(divideWord[0][0] + '.' + divideWord[1][0]).toUpperCase()
}