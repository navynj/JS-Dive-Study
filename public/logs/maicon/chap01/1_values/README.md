# **JavaScript Basics: Values, Data Types, and Mutability**

## **1. Understanding Values**

_Define what a "value" is in JavaScript._  
_Explore examples of evaluating expressions to values._

### **Guided Tasks**
- **What is a value?**: Write a brief explanation of what a value represents in JavaScript. Use examples like:
  ```javascript
  const a = 42; // Value: 42
  const b = a + 8; // Value: 50
  ```
- **Experiment**: Use `typeof` to check the type of various values. Explain your observations.
  ```javascript
  console.log(typeof 42); // Output: ?
  console.log(typeof "hello"); // Output: ?
  ```

<br />

## **2. Overview of Data Types**

### **2.1 Primitive Types**

_Introduce all primitive types and their immutability._  
_Examples to demonstrate immutability (e.g., string operations)._

#### **Guided Tasks**
- **List and Describe Primitives**: Write a short description of each primitive type (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`).
- **Test Immutability**: Provide examples of how primitives are immutable.
  ```javascript
  let str = "hello";
  str[0] = "H"; // Does this work? Why or why not?
  console.log(str); // Output: ?
  ```

<br />

### **2.2 Reference Types**

_What are reference types? Key differences from primitives._  
_How reference types behave in memory (stack vs heap)._

#### **Guided Tasks**
- **Behavior of References**: Write an example to show how reference types behave when assigned to a new variable.
  ```javascript
  const arr1 = [1, 2, 3];
  const arr2 = arr1;
  arr2.push(4);
  console.log(arr1); // Output: ?
  ```
- **Memory Explanation**: Use diagrams or simple explanations to describe how JavaScript manages memory for primitives (stack) and references (heap).

<br />

## **3. Deep Dive into Data Behavior**

### **3.1 Mutability and Immutability**

_Why immutability matters in programming._  
_Examples:_  
_- Mutable references (obj, arr)._  
_- Immutable patterns (e.g., Object.freeze, spread/rest operators)._

#### **Guided Tasks**
- **Mutable vs Immutable Data**: Write about the difference between mutability and immutability.
- **Experiment**:
  - Show how mutable objects can change:
    ```javascript
    const obj = { name: "Alice" };
    obj.name = "Bob"; // Is this allowed? Why?
    console.log(obj); // Output: ?
    ```
  - Demonstrate an immutable approach:
    ```javascript
    const originalObj = { name: "Alice" };
    const newObj = { ...originalObj, name: "Bob" };
    console.log(originalObj); // Output: ?
    console.log(newObj); // Output: ?
    ```

<br />

### **3.2 Type Coercion**

_Implicit vs Explicit coercion._  
_Use cases and common pitfalls._  
_Best practices:_  
_- Avoid `==` in favor of `===`._  
_- Use explicit conversions (`Number()`, `String()`)._

#### **Guided Tasks**
- **Implicit Coercion**:
  - Write examples to show how JavaScript converts types automatically.
    ```javascript
    console.log("5" + 2); // ?
    console.log("5" - 2); // ?
    console.log(1 == "1"); // ?
    console.log(1 === "1"); // ?
    ```
  - Explain the differences between the examples above.

- **Explicit Coercion**:
  - Write about how explicit conversion works using `Number()`, `String()`, or `Boolean()`.
    ```javascript
    const val = "42";
    console.log(Number(val)); // ?
    console.log(+val); // Is this the same?
    ```

- **Best Practices**:
  - Summarize why `===` is preferred over `==` in most cases.
  - Recommend explicit coercion when converting types.

<br />

### **Conclusion**
At the end of this note, you should summarize:
- The importance of understanding the difference between **primitives** and **references**.
- Why **immutability** leads to more predictable and bug-free code.
- How to handle **type coercion** effectively using best practices.


