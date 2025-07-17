// Find the combination of two arrays 

arr1 = [1,2,4];
arr2=[5,6,7,8];


// we can solve this problem 
//   1. Using concat 
//   2. Using spread operator 


// Using cancat operator 


// function combineArray(array1, array2){

//     let array3= array1.concat(array2);  // Concat operator used to combine two arrays 
//   return array3;

// }

// console.log(combineArray(arr1, arr2));  // output 


// Using Spread operator 

function combineSpread(array1,array2){
    let array3 = [...array1, ...array2];
    return array3
}
console.log(combineSpread(arr1,arr2));
