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

    const typeA = typeof a;
    const typeB = typeof b;
    const warning = 'Warning: Type coercion occurred: ';
    let warnA = "";
    let warnB = "";
    if (!answer[0]) {
        answer[0] = "Error: Invalid input: both operands must be numbers or coercible to numbers.";

    } else if (typeof answer[0] === "number" && (typeA !== typeB || (typeA === "string" && typeB === "string"))) {
        if (typeA === "string" && typeB === "string") {
            warnA = `"${a}" (string → number)`
            warnB = `"${b}" (string → number)`
        } else if (typeA === "string") {
            warnA = `"${a}" (string → number)`
        } else if (typeB === "string") {
            warnB = `"${b}" (string → number)`
        }
        answer.push("");

    } else if (typeof answer[0] === "string" && typeA !== typeB) {
        if (typeA === "number") {
            warnA = `"${a}" (number → string)`;
        } else if (typeB === "number") {
            warnB = `"${b}" (number → string)`;;
        }
        answer.push("");
        answer.push(`Note: Implicit coercion resulted in string concatenation.`);
    }

    if (warnA && warnB) {
        answer[1] = `${warning}${warnA} ,${warnB}`;
    } else if (warnA || warnB) {
        answer[1] = warning + warnA + warnB;
    }

    str = `Output: ${answer[0]}`;
    if (answer.length >= 2) {
        str += `\n${answer[1]}`;
    }
    if (answer.length === 3) {
        str += `\n${answer[2]}`;
    }

    return str + '\n';
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
// Output: 3010
// Warning: Type coercion occurred: 10 (number → string).
// Note: Implicit coercion resulted in string concatenation.

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