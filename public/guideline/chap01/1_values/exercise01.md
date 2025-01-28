# Exercise 01: Calculator That Detects Type Coercion

## **Description**

Build a calculator function that performs basic arithmetic operations (`add`, `subtract`, `multiply`, `divide`). The function should detect if **type coercion** occurs during the operation and handle it accordingly:

- If both inputs are numbers, perform the operation normally.
- If one or both inputs are strings that can be coerced to numbers, log a warning that type coercion occurred and still perform the operation.
- If coercion fails (e.g., non-numeric strings), throw an error.

<br />

## **Function Signature**

```jsx
function calculator(a: any, b: any, operation: string): number;
```

<br />

## **Input**

- `a`: The first operand (can be a number or a string).
- `b`: The second operand (can be a number or a string).
- `operation`: A string representing the arithmetic operation (`"add"`, `"subtract"`, `"multiply"`, `"divide"`).

<br />

## **Output**

- Returns the result of the operation as a number.
- Logs a message if type coercion occurred.

<br />

## **Constraints**

1. Handle only valid operations: `"add"`, `"subtract"`, `"multiply"`, `"divide"`.
2. If inputs cannot be coerced to numbers, throw an error.
3. Return a precise result for division (e.g., `5 / 2 = 2.5`).

<br />

## **Example**

```js
console.log(calculator(5, 10, "add"));
// Output: 15

console.log(calculator("5", "10", "multiply"));
// Output: 50
// Warning: Type coercion occurred for one or both inputs.

console.log(calculator("abc", 10, "subtract"));
// Output: Error: Invalid input: both operands must be numbers or coercible to numbers.
```

<br />

## **Step-by-Step Plan**

1. **Input Validation**:
    - Check if `a` and `b` are valid numbers or coercible to numbers.
    - If not, throw an error.
2. **Detect Type Coercion**:
    - Use `typeof` to check the types of `a` and `b`.
    - If either operand is a string, log a warning.
3. **Perform Operation**:
    - Based on the `operation` parameter, perform the arithmetic calculation.
    - Ensure results are numbers.

<br />

<br />

## **Extension Ideas**

1. **Track Coercion Count**:
    - Keep a global count of how many times coercion occurs.
    - Return the count at the end of the operation.
2. **Support More Operations**:
    - Add `%` (modulus) or `*` (exponentiation).
3. **Handle Arrays**:
    - If inputs are arrays, perform element-wise operations with coercion checks.

<br />