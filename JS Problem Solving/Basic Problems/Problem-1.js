
// Problem Statement - Create a function that returns last element of an array 

arr = [2,3,4,5,6,7,8,9];  // Array to test the function

// function lastElement(array){         // Function initialization

//     // This Function will return the last element of the Array 

// console.log(array.length);                 // Checking if the array is empy or not 
// if(array.length ===0){
//     return " This is an empty array "
// }else{
//     return array[array.length-1]          // if array is not empty then retuns the last element 
// }
// }

// // Calling the function and passing the array as ana argument 

// console.log(lastElement(arr));        // Output on the consoel 





// Same problem using ternay operator function lastElementTernary(array) {

function lastElementTernary(array){
    return array.length ? array[array.length-1]: "This is an emptyy array ";
}
console.log(lastElementTernary(arr));