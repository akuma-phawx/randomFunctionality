// Prime is a number that has only 2 factors, 1 and itself.
/*
Example and math explanation to make the algorithm WAY faster
than a casual and simple solution, for example with recursion.
(NO recursion, it sucks, just like inheritance.)
*/

/*
All even numbers except 2 are not prime.
0 and 1 are not prime.
For odd numbers:
    A number can be present as:
    n = x*y;
    x and y can be either be equal or one be less than the other.
    So for example:
    x<=y || y<=x (same thing in the logic so lets keep the first example)
    x<=y ---> x*x <= x*y but x*y = n  so:
    x**2 <= n --> x <= sqrt(n)
    That way our for loop which will be written below becomes WAAAY
    faster.

*/
let isPrime = (n) => {
    if(n===2){
        return true;
    }
    if(!Number.isInteger(n) || n<2 || !(n%2)){
        return false;
    }

    for(let i=3; i<=Math.sqrt(n); i++,i++){
        if(n%i === 0){
            return false;
        }
    }

}