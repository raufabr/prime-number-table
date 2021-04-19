Prime number table

In order to run this project, complete the following steps - 
- Clone it
- cd prime-number-table
- npm ci


This web app takes a number as an input and creates a table of prime numbers. 

It achieves the outcome in the following ways - 

Takes an input which is restricted to numbers (min 1). 

Passes the input to Table as props.
Table calls generateTable to 
This is then passed to generateTable, which creates the JSX with the help of react-html-parser.

generateTable takes an array as a function parameter, and I've passed findNPrimes, which returns an array of all the prime numbers.

I've done some functional testing with React-Testing-Library to fix bugs in the isPrime and findNPrimes functions. 

If I had more time I'd complete the following optimisation pieces -
- Instead of forcing user to take an input as a number, take input as free format field.
- Have a submit button which toggles the table if the user submits a postive integer
- Otherwise display error message 
- The table calls findNPrime number twice, once for the heading. This is inefficient for performance and could be improved. Easiest way may be to add the JSX syntax when calling generateTable().
- The functions shouldn't take string as an input
- I would've liked to add 2 more test cases to check the width and height of Table component is n+1, but this was my first time using react-test-library, and I ran out of time whilst setting up Enzyme/Jest
- I implemented a second function for isPrime using sieve of eratosthenes's algorithm, but didn't feel it was necessarily better than brute forcing. Code below -
- If I stored the array of primes in a state variable, I could improve efficiency further by providing the last prime number so that findNthPrime wouldn't have to start from the beginning. 
const isPrime2 =(value) =>{
    let primes = [];
    let primes2 = []
    for(var i = 2; i < value; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(value);
    for(var i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(var j = i * i; j < value; j += i) {
                primes[j] = false;
            }
        }
    }
    for(var i = 2; i < value; i++) {
        if(primes[i] === true) {
            primes2.push(i)
        }
    }
    
  console.log(primes2[primes2.length-1])
  
  
}




