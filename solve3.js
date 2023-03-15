// Part - 1
let x = 203;
while (x >= 0) {
    x -= 0.5;
    console.log(x);
}
console.log(x);

// Part - 2
for (let i = 1; i <= 100; i++) {
    let isOdd = i % 2 != 0;
    if (isOdd) {
        console.log(i);
    }
}

// Part - 3
const printNumberInBracket = (n) => {
	let output = "";
	let start = 1;
	while (start <= n) {
		if (start === n)
			output += `[${start}]`;
		else
			output += `[${start}] `;
		start++;
	}
	console.log(output);
}
printNumberInBracket(6);

// Part - 4
const sumNth = (n) => {
    let sum = 0, start = 1;
    while (start <= n) {
        sum += start;
        start++;
    }
    return sum;
}

console.log(sumNth(5));
console.log(sumNth(19));
