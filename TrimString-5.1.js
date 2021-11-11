// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry
// with strings with less than two characters.


function trimWord(word){
    return word.slice(1 , word.length -1)
}

trimWord("Rouge Nijem") // Its not a Zero starting Array, so word[0] = word[1] so this way, soo R is in 1 and not 0
