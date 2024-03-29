// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(word){
   word = word.split('');
   return word.map(function(nW, i){
     if(nW == '-' || nW == '_'){
       nW = word[i+1].toUpperCase();
       word.splice(i+1, 1);
     }
     return nW;
   }).join('');
 }