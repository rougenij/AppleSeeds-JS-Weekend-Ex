// Ex5.8 - shortest words version 2
// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types



function longestWord(word){
    let arr = word.split(' ');
    let longest = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if(arr[i].length > longest.length){
        longest = arr[i];
      }
    }
    return longest.length;
  }