const myArray = [];
for (i = 1; i <= 10; i++) {
    myArray.push(i);
}

console.log(myArray);

const oddNumbers = myArray.filter(x => x % 2 === 1);
console.log(oddNumbers);

const divBy2or5 = myArray.filter(y => y % 2 === 0 || y % 5 === 0);
console.log(divBy2or5);

const divBy3 = myArray.filter(num => num % 3 === 0).map(num2 => num2 ** 2);
console.log(divBy3);

//The sum of squared numbers divisible by 5
const arraySumD5Sq = myArray.filter(num => num % 5 === 0).map(num2 => num2 ** 2).reduce((sum, num) => sum + num, 0);
console.log(arraySumD5Sq);