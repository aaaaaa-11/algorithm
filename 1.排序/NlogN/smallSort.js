/* 小和问题
 */

function smallSort (arr) {
  if (!Array.isArray(arr) && arr.length < 2) {
    return arr
  }

  return process(arr, 0, arr.length - 1)
}

// 递归求小和
function process(arr, L, R) {
  if (L === R) return 0 // 左右相同，小和为0

  const mid = L + ((R - L) >> 1)
  return process(arr, L, mid) // 左侧小和
    + process(arr, mid + 1, R) // 右侧小和
    + merge(arr, L, mid, R) // 合并左、右时产生的小和
}

// 求小和 + 排序
function merge(arr, L, M, R) {
  let res = 0 // 当前左右merge的小和
  let help = [] // 辅助数组
  let p1 = L // 左指针
  let p2 = M + 1 // 右指针
  let i = 0
  while (p1 <= M && p2 <= R) {
    res += arr[p1] < arr[p2] ? arr[p1] * (R - p2 + 1) : 0 // 右边有几个比左侧大，则左侧需要加几次
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++] // 排序
    // help[i++] = arr[p1] < arr[p2] ? (res += (arr[p1] * (R - p2 + 1)), arr[p1]) : arr[p2]
  }
  while (p1 <= M) {
    help[i++] = arr[p1++]
  }
  while (p2 <= R) {
    help[i++] = arr[p2++]
  }
  for (let i = 0; i < help.length; i++) {
    arr[L + i] = help[i]
  }
  return res
}

let arr = [1, 4, 5, 3, 7, 9, 6, 8, 2]
console.log(smallSort(arr));
