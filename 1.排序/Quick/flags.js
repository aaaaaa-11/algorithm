/*
  给定数组，和一个数num，将大于num的数放数组右侧，小于num的数放数组左侧
 */

function divideIntoTwoAreas (arr, num) {
  if (!Array.isArray(arr) || arr.length < 2 || typeof num !== 'number') {
    return arr;
  }

  let p = -1
  for (let  i = 0; i < arr.length; i++) {
    if (arr[i] <= num) {
      let temp = arr[i]
      arr[i] = arr[++p]
      arr[p] = temp
      // 注意：这里不能三次异或，因为有可能p===i，一个数和自身异或会把这个数洗成0
      // arr[p] ^= arr[i];
      // arr[p] ^= arr[i];
      // arr[p] ^= arr[i];
    }
  }
  return arr
}

// const arr = [5, 3, 6, 7, 4, 3, 5, 8, 1, 2, 6, 4]

// 给定数组，和一个数num，将大于num的数放数组右侧，小于num的数放数组左侧
function divideIntoThreeAreas (arr, num) {
  if (!Array.isArray(arr) || arr.length < 2 || typeof num !== 'number') {
    return arr;
  }

  let p1 = -1
  let p2 = arr.length
  let i = 0;
  while (i < p2) {
    if (arr[i] < num) {
      let temp = arr[i]
      arr[i] = arr[++p1]
      arr[p1] = temp
      i++
    } else if (arr[i] > num) {
      let temp = arr[i]
      arr[i] = arr[--p2]
      arr[p2] = temp
    } else {
      i++
    }
  }
  return arr
}

// console.log(divideIntoThreeAreas(arr, 5));
