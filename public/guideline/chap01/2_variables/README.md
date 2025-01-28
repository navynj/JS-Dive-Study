# 🐚 Chapter 01 - 2: Study Guide – Variables and Scope

Welcome to **Chapter 01 - 2**!  
This guide will help you explore **how JavaScript manages variables**, from **declaration to execution**.  
Follow the structure below to study and reinforce your understanding.

<br />

## **📌 Overview**

In JavaScript, **variables** store and manage data during program execution.  
Understanding how variables work is fundamental to writing maintainable and bug-free code.  

This chapter covers:  
✔ **Declaring Variables**: The differences between `var`, `let`, and `const`.  
✔ **Scope**: How variables are accessed in different parts of a program.  
✔ **Hoisting & Execution Context**: How JavaScript processes variables before execution.  

<br />

## **📖 Concepts**

### **1. Declaring Variables Properly**
JavaScript provides three ways to declare variables: **`var`**, **`let`**, and **`const`**.  
Each has different behaviors in terms of **scope, reassignment, and hoisting**.

#### **What to Learn**:
  ```
  - Differences between var, let, and const.
  - When to use let vs. const.
  - Common pitfalls with variable declarations.
  ```

<br />

### **2. Scope**
**Scope** defines where a variable can be accessed in the code.  
JavaScript has three main types of scope:

-  **2.1 Global Scope**
    - Variables declared outside any function or block **can be accessed from anywhere**.

-  **2.2 Function Scope**
    - Variables declared inside a function **cannot be accessed outside that function**.

- **2.3 Block Scope**
    - Variables declared with `let` or `const` inside `{}` **exist only inside that block**.

- **2.4 Combined Scope**
    - Variables in different scopes interact with each other in a predictable way.

#### **What to Learn**:
  ```
  - How global, function, and block scope work.
  - The difference between var (function-scoped) and let/const (block-scoped).
  - How different scopes interact.
  ```

<br />

### **3. Execution Context & Variable Lifecycle**
JavaScript processes variables in **three phases**:
1. **Declaration** → Memory is allocated.
2. **Initialization** → `var` is set to `undefined`, while `let` & `const` remain uninitialized.
3. **Assignment** → The actual value is assigned.

Understanding this helps avoid issues related to **hoisting** and **the Temporal Dead Zone (TDZ)**.

- **What to Learn**:
  ```
  - The three phases of variable lifecycle.
  - What hoisting is and how it affects var, let, and const.
  - Why accessing let/const before declaration results in a ReferenceError.
  ```

<br />

## **🎛️ Exercises**
| No. | Title | PR |
| --  | ----- | -- |
| 01  | [The Need for Variables](https://github.com/navynj//JS-Dive-Study/blob/main/public/guideline/chap01/2_variables/exercise01.md) | # |
| 02  | [Declaring Variables Properly (`var`, `let`, `const`)](https://github.com/navynj/JS-Dive-Study/blob/main/public/guideline/chap01/2_variables/exercise02.md) | # |
| 03  | [Understanding Scope](https://github.com/navynj/JS-Dive-Study/blob/main/public/guideline/chap01/2_variables/exercise03.md) | # |
| 04  | [UnderExecution Context & Hoisting](https://github.com/navynj/JS-Dive-Study/blob/main/public/guideline/chap01/2_variables/exercise04.md) | # |

<br />

## 🔗 Resources
Here are some useful resources to deepen your understanding:
- [MDN: JavaScript Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variables)  
- [JavaScript.info: Variables](https://javascript.info/variables)  
- [You Don’t Know JS Yet (YDKJSY): Scope & Closures](https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures)  
- [MDN: Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)  

---

This guide serves as an **overview** to help you structure your study effectively.  
Work through the exercises and refer to the resources when needed. 🚀
