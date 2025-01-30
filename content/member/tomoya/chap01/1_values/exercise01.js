/**
 * 
 * @param {string | number} val1 
 * @param {string | number} val2 
 * @param {'add' | 'subtract' | 'multiply' | 'divide'} method 
 * @returns
 */
const calculator = (val1, val2, method) => {
  const regex = new RegExp(/^[-]?([1-9]\d*|0)$/);
  const value1 = regex.test(val1) ? Number(val1) : val1
  const value2 = regex.test(val2) ?  Number(val2) : val2

  let result;
  switch(method){
    case 'add':
      result = value1 + value2
      break;
    case 'subtract':
      if(typeof value1 === 'string' || typeof value2 === 'string'){
        return 'Error: Invalid input: both operands must be numbers or coercible to numbers'
      }
      result = value1 - value2
      break;
    case 'divide':
      if(typeof value1 === 'string' || typeof value2 === 'string'){
        return 'Error: Invalid input: both operands must be numbers or coercible to numbers'
      }
      result = value1/value2
      break
    case 'multiply':
      if(typeof value1 === 'string' || typeof value2 === 'string'){
        return 'Error: Invalid input: both operands must be numbers or coercible to numbers'
      }
      result = value1 * value2
      break;
    default:
      result = ''
  }

  return result
}

console.log(calculator(20, 10, 'multiply'))
console.log(calculator('hoghoge', 10, 'divide'))
console.log(calculator(20, 10, 'add'))
console.log(calculator('90', 10, 'subtract'))