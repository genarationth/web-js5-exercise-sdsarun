// Part - 1
const peopleInBank = ["Sofia", "David", "Juan"];
console.log(peopleInBank);
// Output --> [ 'Sofia', 'David', 'Juan' ]

// Part - 2
peopleInBank.push("Sara", "Augustin");
console.log(peopleInBank);
// Output --> [ 'Sofia', 'David', 'Juan', 'Sara', 'Augustin' ]

// Part - 3
const davidPosition = peopleInBank.indexOf("David");
peopleInBank.splice(davidPosition + 1, 0, "Renata");
console.log(peopleInBank);
// Output --> [ 'Sofia', 'David', 'Renata', 'Juan', 'Sara', 'Augustin' ]

peopleInBank.push("Elena");
console.log(peopleInBank);
// Output --> [ 'Sofia', 'David', 'Renata', 'Juan', 'Sara', 'Augustin', "Elena" ]