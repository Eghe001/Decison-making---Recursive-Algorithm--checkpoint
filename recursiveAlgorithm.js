function calculatePow(base, pow) {
    if (pow !== 0) {
      return base * calculatePow(base, pow - 1);
    } else {
      return 1;
    }
  }
  
  const base = parseInt(prompt('Enter the base:'));
  const pow= parseInt(prompt('Enter the power:'));
  
  const ans = calculatePow(base, powerRaised);

  
  console.log(`${base}^${pow} = ${ans}`);


// Fibonacci Sequence//
  function fibonacciLoop(num){
    if(num<=1){
        return num
    }
    let a = 0, b = 1, next;
    for(let i = 2; i <= num; i++){
        next = a + b;
        a = b;
        b = next;
    }
    return b;
}
console.log(fibonacciLoop(10));