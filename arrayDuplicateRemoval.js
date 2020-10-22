let arrayToCheck = [1, 2, 2, 1, 4, 5, 6, 2, 3, 1, 3, 4, 5, 5,13,22,4,1,13,24,22,75,3];
let arrayWithNoDuplicates = [];
// let len = arrayToCheck.length; //calculates it once, a bit faster.

//brute force algorithm
// for (let i = 0; i < len; i++) {
//   if (arrayWithNoDuplicates.indexOf(arrayToCheck[i]) === -1) {
//     arrayWithNoDuplicates.push(arrayToCheck[i]);
//   }
// }

// console.log(arrayWithNoDuplicates);

//Complexity is O(n**2)


// BETTER APPROACH
// arrayToCheck.sort((a,b)=>a-b);

// let _temp;
// for(let i=0; i<len; i++){
//     if(arrayToCheck[i] !== _temp){
//         arrayWithNoDuplicates.push(arrayToCheck[i])
//         _temp = arrayToCheck[i];
//     }
// }

//EVEN BETTER APPROACH
// let obj = {}

//key has to be unique so its not storing duplicates x)
// for(let i of arrayToCheck){
//     obj[i] = true;
// }

// let arrayWithNoDuplicates = Object.keys(obj)

//GLOOOOOORIOUS APPROACH BELOW:
arrayWithNoDuplicates = [... new Set(arrayToCheck)]
 //Set stores only unique values.