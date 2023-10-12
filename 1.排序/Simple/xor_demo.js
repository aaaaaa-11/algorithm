// 给定数组，其中有一种数出现奇数次，其他数出现偶数次。求出该数
/**
 * @param {number[]} arr
 * @return {number[]}
 */
function findOdd (arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    if (arr.length > 1) {
      let odd
      // 所有数异或：
      // 假设出现偶数次的数记为other，other之间异或为结果0，
      // 出现奇数次的数记为a，上面的结果异或a结果为a
      for (let i = 0; i < arr.length; i++) {
        odd ^= arr[i]
      }
      return odd
    } else {
      return arr[0];
    }
  } else {
    return arr;
  }
}

// 给定一个数组，其中有两种数出现奇数次，其他数出现偶数次，求那两个数
function findOdd2 (arr) {
  if (Array.isArray(arr) && arr.length > 2 && arr.length % 2 === 0) {
    let odds = []
    let xor
    // 出现奇数次的数分别记为a、b，出现偶数次的数记为other
    // 所有数异或结果为a ^ b
    // 由于a != b，所以a和b必然至少有一位上不相等，例如a的第8位上为0，b的第8位上为1
    // oter中的数可以分为两类，第8位为0的数 和 第8位不为0的数，且这两类数出现次数均为偶数次
    // a ^ b ^ (数组中第8位上为0的数，即other中第8位为0的数 和 a)，结果为b
    // a ^ b ^ b，结果为a
    for (let i = 0; i < arr.length; i++) {
      xor ^= arr[i]
    }
    // xor = a ^ b
    // 找到xor上某一位为1
    let index = xor.toString(2).length // 转换为二进制后有几位，第一位一定是1
    let xor1
    for (let i = 0; i < arr.length; i++) {
      if (+arr[i].toString(2).at(-index)) { // 过滤在该位置上为1的数
        xor1 ^= arr[i]
      }
    }
    odds.push(xor1, xor1 ^ xor)
    return odds
  } else {
    return arr;
  }
}

let a = [1, 2, 5, 1, 5, 1, 5, 7, 2, 3, 5, 1, 3, 3]
// let a = [1, 1, 3, 2]
// let a = [1, 2]
// let a = []
// console.log(findOdd(a));
console.log(findOdd2(a));
