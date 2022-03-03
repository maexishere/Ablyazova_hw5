const anArray = [];
for (i = 1; i <= 10; i++) {
    anArray.push(i);
}

console.log(anArray.filter(value => value % 2 === 0).map(x => x * 2));
//multiply by 2 even values (that can be divided by 2)

console.log(anArray.map(x => x * 2).filter(value => value % 2 === 0))
//multiply all values  by 2 and check if they can be divided by 2
//whether they are odd or even