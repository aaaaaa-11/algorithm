/**
 * 使用递归求数组最大值
 */

const testGetMax = require('./testGetMax')

/**
 * @param {number[]} arr
 * @return {number}
 */
function getMax (arr) {
  console.log('getMax', arr);
  return process(arr, 0, arr.length - 1)
}

function process (arr, l, r) {
  console.log('process', l, r);
  if (l === r) {
    console.log('return', l, arr[l]);
    return arr[l]
  } else if (l > r) {
    console.log('process error', arr, l, r);
    return
  }
  const mid = l + ((r - l) >> 2) // l + (r - l) / 2
  console.log('mid', mid);
  const leftMax = process(arr, l, mid)
  const rightMax = process(arr, mid + 1, r)
  return Math.max(leftMax, rightMax)
}


testGetMax(getMax)
