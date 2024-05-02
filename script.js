/////work 1 
for (let i = 0; i < 100; i++) { 
    console.log(i)
};

////2

let i = 0;
while (i < 50) {
    console.log(i);
    i +=1;
}

////work 3 
  
const names = ["Mari", "Giorgi", "Luka", "Alex", "Nika"];
console.log(names);
names.push("Royal");
console.log(names);
names.unshift("Aleksandre");
console.log(names);
names.shift();
console.log(names);
names.pop();
console.log(names);


////work 4 
  
const space = [];
for (let i = 1; i < 10000; i++) {
  space.push(i * i);
}


////work 5


const numbersC = [400, 134, 23, 24, 134];
let sum = 0;
for (let i = 0; i < numbersC.length; i++) {
  sum += numbersC[i];
}

console.log(sum);


/////work 6

function evenOdd(num) {
    if (num % 2 === 0) {
      return false;
      } else {
        return true;
      }
}
    
console.log(evenOdd(7));
console.log(evenOdd(8));

///// work 7    

function upperLower(upper) {
return upper.toLowerCase();
}

console.log(upperLower("MY NAME IS JOHN"));


//////work 8    

function numberFilter(numbers) {
return numbers.filter(numbers => numbers % 2 === 0);
}

const numbers = [13, 30, 225, 233, 245, 34, 23];
console.log(numberFilter(numbers))