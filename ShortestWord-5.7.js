// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


function shortestWord(words){
    let arr = words.split(' ');
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if(arr[i].length < smallest.length){
        smallest = arr[i];
      }
    }
    return smallest.length;
  }