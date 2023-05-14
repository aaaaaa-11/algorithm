/**
 * 二分法
 * 每次将数组对半分，判断元素在哪一边，然后继续对半分，直到找到满足条件的元素
 */


// 题1：找到有序数组中是否含有指定元素
/**
 * @param {number} item
 * @param {number[]} arr
 * @return {boolean}
 * 假设arr已经按从小到大排序
 */
// function findItem (item, arr) {
//   if (typeof item === 'number' && Array.isArray(arr) && arr.length > 0) {
//     let newArr = arr
//     do {
//       let len =  newArr.length
//       let index = len % 2 ? (len - 1) / 2 :len / 2
//       if (newArr[index] === item) {
//         return true
//       } else if (newArr[index] > item) {
//         newArr = newArr.slice(0, index)
//       } else {
//         newArr = newArr.slice(index + 1)
//       }
//     } while (newArr.length > 0)
//     return false
//   } else {
//     return false;
//   }
// }

function findItem(arr, item) {
  if (typeof item === 'number' && Array.isArray(arr) && arr.length > 0) {
    let start = 0
    let end = arr.length - 1
    // 当起止索引合法
      // 找到中间索引，然后判断该元素是否>=指定元素
      // 如果成立，则保存/更新中间索引，然后往左半边找
      // 否则，往右半边找
    // 最后返回记录的中间索引
    while (start <= end) {
      let middle = Math.floor((end - start) / 2) + start
      if (arr[middle] === item) {
        return true
      } else if (arr[middle] > item) {
        end = middle - 1
      } else {
        start = middle + 1
      }
    }
    return false
  } else {
    return
  }
}

// const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// const a = [0, 1, 2]
// const a = [0, 1]
// const a = [0]
// console.log(findItem(a, 11))


// 题2：找到有序数组中不小于指定元素的最左侧的元素位置
/**
 * 给定一个数组，和一个值，找到>=这个值的最左侧位置
 * @param {number[]} arr
 * @param {number} item
 * @return {number}
 */
function findItemLeft(arr, item) {
  if (typeof item === 'number' && Array.isArray(arr) && arr.length > 0) {
    let start = 0
    let end = arr.length - 1
    let index
    // 当起止索引合法
      // 找到中间索引，然后判断该元素是否>=指定元素
      // 如果成立，则保存/更新中间索引，然后往左半边找
      // 否则，往右半边找
    // 最后返回记录的中间索引
    while (start <= end) {
      let middle = Math.floor((end - start) / 2) + start
      if (arr[middle] >= item) {
        index = middle
        end = middle - 1
      } else {
        start = middle + 1
      }
    }
    return index
  } else {
    return
  }
}
// const a = [0, 0, 0, 0, 1, 1, 1, 1, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6]
// console.log(findItemLeft(a, 6));

// 求一个局部最小值：
// 数组中某个局部最小值应当比它相邻的两个（出现在数组中间位置）或一个（如果出现在数组首尾位置）元素小
/**
 * @param {number[]} arr
 * @return {number}
 */
function getPartMinVal (arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    if (arr.length === 1) {
      return {
        min: arr[0],
        index: 0
      };
    }
    let start = 0
    let end = arr.length - 1
    while (start < end) {
      // 二分后首尾是否最小
      // 首部最小
      if (arr[start] < arr[start + 1]) {
        return {
          min: arr[start],
          index: start
        };
      }
      // 尾部最小
      if (arr[end] < arr[end - 1]) {
        return {
          min: arr[end],
          index: end
        };
      }
      if (start === end - 1) {
        // 首尾没有最小，且只有两个首尾两个元素，则没有最小值
        return '没有最小'
      }
      let index = Math.floor((end - start) / 2) + start // 首尾之间二分的索引
      // 二分位置是否最小
      if (arr[index] < arr[index - 1] && arr[index] < arr[index + 1]) {
        return {
          min: arr[index],
          index
        }
      } else if (arr[index] >= arr[index - 1]) { // 左边小，往左二分
        end = index - 1
      } else if (arr[index] >= arr[index + 1]) { // 右边小，往右二分
        start = index + 1
      }
    }
    return '没有最小'
  }
  return arr
}
const arr = [0, 0, -1, 0, 8]
console.log(getPartMinVal(arr));

