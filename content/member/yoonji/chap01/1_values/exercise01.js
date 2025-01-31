function calculator(a, b, operation) {
  let result;

  switch (operation) {
    case 'add':
      result = a + b;
      break;
    case 'subtract':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      result = a / b;
      break;
  }

  const typeResult = typeof result;
  const typeA = typeof a;
  const typeB = typeof b;

  const output = `Output: ${result}`;

  if (isNaN(result) && typeof result !== 'string') {
    return 'Output: Error: Invalid input: both operands must be numbers or coercible to numbers.\n';
  } else if (typeA !== typeB || typeA !== typeResult || typeB !== typeResult) {
    const valueA = typeA === 'string' ? `"${a}"` : a;
    const valueB = typeB === 'string' ? `"${b}"` : b;

    const msgA = typeA !== typeResult ? `${valueA} (${typeA} → ${typeResult})` : '';
    const msgB = typeB !== typeResult ? `${valueB} (${typeB} → ${typeResult})` : '';

    const warning = `\nWarning: Type coercion occurred: ${msgA}${
      msgA ? ', ' : ''
    }${msgB}${msgA ? '.' : ''}`;
    const note =
      (typeA !== 'string' || typeB !== 'string') && typeResult === 'string'
        ? '\nNote: Implicit coercion resulted in string concatenation.'
        : '';

    return output + warning + note + '\n';
  } else {
    return output + '\n';
  }
}

console.log(calculator(5, 10, 'add'));
// Output: 15

console.log(calculator('5', '10', 'multiply'));
// Output: 50
// Warning: Type coercion occurred: "5" (string → number), "10" (string → number).

console.log(calculator('abc', 10, 'subtract'));
// Output: Error: Invalid input: both operands must be numbers or coercible to numbers.

console.log(calculator(5, '20', 'divide'));
// Output: 0.25
// Warning: Type coercion occurred: "20" (string → number).

console.log(calculator('30', 10, 'add'));
// Output: 3010
// Warning: Type coercion occurred: 10 (number → string).
// Note: Implicit coercion resulted in string concatenation.

console.log(calculator(50, ' is a number', 'add'));
// Output: "50 is a number"
// Warning: Type coercion occurred: 50 (number → string).
// Note: Implicit coercion resulted in string concatenation.

console.log(calculator(40, 30, 'add'));
// Output: 70
