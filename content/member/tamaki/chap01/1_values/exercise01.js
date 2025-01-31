function calculator(a, b, operation) {
    let answer = [];
    let str = "";

    switch (operation) {
        case "add":
            answer.push(a + b);
            break;
        case "multiply":
            answer.push(a * b);
            break;
        case "subtract":
            answer.push(a - b);
            break;
        case "divide":
            answer.push(a / b);
            break;
    }

    if (!answer[0]) {
        answer[0] = "Error: Invalid input: both operands must be numbers or coercible to numbers.";
    } else if (typeof answer[0] === "number" && ((typeof a === "string" && typeof b === "number") || (typeof a === "number" && typeof b === "string") || (typeof a === "string" && typeof b === "string"))) {
        if(typeof a === "string" && typeof b === "string"){
            answer.push(`Warning: Type coercion occurred: "${a}" (string → number), "${b}" (string → number)`);
        } else if (typeof a === "string") {
            answer.push(`Warning: Type coercion occurred: "${a}" (string → number)`);
        } else if (typeof b === "string") {
            answer.push(`Warning: Type coercion occurred: "${b}" (string → number)`);
        }
    } else if (typeof answer[0] === "string" && ((typeof a === "string" && typeof b === "number") || (typeof a === "number" && typeof b === "string"))) {
        if (typeof a === "number") {
            answer.push(`Warning: Type coercion occurred: ${a} (number → string)`);
        } else if (typeof b === "number") {
            answer.push(`Warning: Type coercion occurred: ${b} (number → string)`);
        }
        answer.push(`Note: Implicit coercion resulted in string concatenation.`);
    }

    str = `Output: ${answer[0]}`;
    if (answer.length >= 2) {
        str += `\n${answer[1]}`;
    }
    if (answer.length === 3) {
        str += `\n${answer[2]}`;
    }

    return str;

}


console.log(calculator(5, 10, "add"));
// Output: 15

console.log(calculator("5", "10", "multiply"));
// Output: 50
// Warning: Type coercion occurred: "5" (string → number), "10" (string → number).

console.log(calculator("abc", 10, "subtract"));
// Output: Error: Invalid input: both operands must be numbers or coercible to numbers.

console.log(calculator(5, "20", "divide"));
// Output: 0.25
// Warning: Type coercion occurred: "20" (string → number).

console.log(calculator("30", 10, "add"));
// Output: 40
// Warning: Type coercion occurred: "30" (string → number).

console.log(calculator(50, " is a number", "add"));
// Output: "50 is a number"
// Warning: Type coercion occurred: 50 (number → string).
// Note: Implicit coercion resulted in string concatenation.

console.log(calculator(40, 30, "add"));
// Output: 70

console.log(calculator(100, " apples", "add"));
// Output: "100 apples"
// Warning: Type coercion occurred: 100 (number → string).
// Note: Implicit coercion resulted in string concatenation.