const users = [
    {fn: 'Datt1', ln: 'Bhat1', age: 25},
    {fn: 'Datt2', ln: 'Bhat2', age: 55},
    {fn: 'Datt3', ln: 'Bhat3', age: 75},
    {fn: 'Datt4', ln: 'Bhat4', age: 25}
]

// op // ['Datt1','Datt14] //array of fn, if age < 30

console.log(
    users.reduce((acc, curr) => {
        if (curr.age < 30) {
            acc.push(curr.fn);
        }
        return acc;
    }, [])
);


let a = []
users.forEach(x => {
    if (x.age < 30) {
        a.push(x.fn);
    }
})
console.log(a);

console.log(users.filter(x => x.age < 30).map(x=>x.fn));