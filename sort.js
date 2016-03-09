'use strict'

const chalk = require('chalk')

const arr = [6,5,3,1,8,7,2,4]

console.log('start', arr)

function swap (array, index1, index2) {
  const temp = array[index1]

  array[index1] = array[index2]
  array[index2] = temp
}

function bubbleSort (array) {
  for (let j = 1; j < array.length; j++) {
    for (let i = 0; i < array.length - j; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        console.log(chalk.red(array))
      }
      console.log(array)
    }
  }

  return array
}

console.log('bubble', bubbleSort(arr))

function insertionSort (array) {
  for (let i=1; i < array.length; i++) {
    for (let j=i; j > 0; j--){
      if (array[j-1] > array[j]) {
        swap(array, j-1, j)
        console.log(util.inspect(array));
      }else {
        console.log(util.inspect(array));
      }
    }
  } return array
}

function selectionSort (array){
  for (let i =0; i < array.length - 1; i++){
    let minimumIndex = i;

    for (let j= i + 1; j < array.length; j++){
      if (array[minimumIndex] > array[j]){
        minimumIndex = j
      }
    }
    if (minimumIndex !== i){
      swap(array, minimumIndex, i)
      console.log(util.inspect(array));
    } else {
      console.log(util.inspect(array));
    }
  }
  return array
}
