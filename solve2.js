const getTriangle = (row) => {
    let output = "";
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= i; j++) {
            if (j === 1) {
                output += "*";
            } else {
                output += " *";
            } 
        }
        if (i !== row) {
            output += "\n";
        }
    }
    return output;
}

console.log(getTriangle(5));