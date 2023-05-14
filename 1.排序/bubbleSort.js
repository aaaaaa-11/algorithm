/**
 * 冒泡排序
 * 每次比较相邻元素大小，通过交换元素位置，将最值移到数组首（尾）
 * 例如：第i轮移动：从i+1~n-1位置，每次比较相邻元素，将最值放到a[i]
 */

const testSort = require("./testSort");

/**
 * @param {number[] arr}
 * @return {number[]}
 */
function bubbleSort (arr) {
  if (Array.isArray(arr) && arr.length > 1) {
    let temp;
    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j+1]) {
          temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp
        }
      }
    }
    temp = null
    return arr
  } else {
    return arr
  }
}
testSort(bubbleSort)
