// Usually when you buy something, you're asked whether your credit card number, phone number
// or answer to your most secret question is still correct. However, since someone could look over
// your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples
// maskify("4556364607935616") == "############5616"
// maskify( "64607935616") == "#######5616"
// maskify( "1") == "1"
// maskify( "") == ""
// // "What was the name of your first pet?"
// maskify("Skippy") == "##ippy"
// maskify("Nananananananananananananananana Batman!") ==
// "####################################man!"

// // Negative numbers in slice
// A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
// If start is undefined, slice starts from the index 0.
// If start is greater than the index range of the sequence, an empty array is returned.


function maskify(num){
    return num.slice(0 , -4).replace(/./g, '#') + num.slice(-4);
  }
