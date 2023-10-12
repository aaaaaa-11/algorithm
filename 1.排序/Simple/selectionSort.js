/**
 * 选择排序
 * 给定位置，去找最值
 * 例如，给定位置i，找a[i+1]～a[n-1]中最小值放到a[i]位置，
 */

const testSort = require("../testSort")


/**
 * @param {number[]} arr
 * @return {number[]}
 */
function selectionSort (arr) {
if (Array.isArray(arr) && arr.length > 1) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i]
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
        minIndex = j
      }
    }
    const temp = arr[i]
    arr[i] = min
    arr[minIndex] = temp
  }
  return arr
} else {
  return arr
}
}

testSort(selectionSort)

/*
  时间复杂度O(N<sup>2</sup>)
  空间复杂度O(1)，两层遍历各需要一个变量存储当前位置，还有一个变量存储当前最值，交换最值时需要一个中间变量
 */