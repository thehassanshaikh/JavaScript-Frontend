const arr1 = document.getElementById('1')
const arr2 = document.getElementById('2')
const btn1 = document.getElementById('add-1')
const btn2 = document.getElementById('add-2')

let firstArray = []
let secondArray = []

btn1.addEventListener('click', () => {
  console.log('clicked')
  firstArray = processInput(arr1)
  if (checkIfArraysAreValid(firstArray,'disp-1')) {
    document.getElementById('disp-1').innerHTML = `[${firstArray}]`
  }
})

btn2.addEventListener('click', () => {
  secondArray = processInput(arr2)
  checkIfArraysAreValid(secondArray,'disp-2')
  if (checkIfArraysAreValid(secondArray)) {
    document.getElementById('disp-2').innerHTML = `[${secondArray}]`
  }
})

document.getElementById('merge').addEventListener('click', () => {
  if (firstArray && secondArray) {
    const mergedArray = firstArray.concat(secondArray)
    document.getElementById('result').innerHTML = `[${mergedArray}]`
  }
})

/**
 * Takes a input node and convert to array.
 * @param HTMLElement The selected node.
 * @return null if not a valid number array or array of numbers.
 **/
function processInput(node) {
  const arrayBeforeParsing = node.value.split(',')
  const parsedArray = []
  for (let element of arrayBeforeParsing) {
    const parsedNumber = parseInt(element)
    if (Number.isNaN(parsedNumber)) {
      return null
    }
    parsedArray.push(parsedNumber)
  }
  return parsedArray
}

function checkIfArraysAreValid(returnedArray, displayClassName) {
  if (Array.isArray(returnedArray) && returnedArray.length > 0) {
    if (!document.querySelector('#error').classList.contains('d-none')) {
      document.querySelector('#error').classList.add('d-none')
    }
    return true
  }
  document.querySelector('#error').classList.remove('d-none')
  document.getElementById('result').innerHTML = '';
  document.getElementById(displayClassName).innerHTML = '';
  return false
}