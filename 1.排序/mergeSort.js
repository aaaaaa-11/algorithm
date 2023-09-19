const testSort = require("./testSort");

/*
  归并排序
  先二分，左右两部分先排序
  左右两部分分别第一一个指针指向各自第一个，创建一个辅助数组，
  比较指针对应数据，将最值复制到辅助数组中，然后移动指针
  如果某边移到头了，则将另一边剩下的复制到辅助数组中
 */

// 给定数组arr，按从小到大排序
function mergeSort (arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return arr
  }
  process(arr, 0, arr.length - 1)
  return arr
}

// 二分递归排序
function process (arr, l, r) {
  // 不可再分则返回（二分后只有一个元素）
  if (l >= r) {
    return
  }
  const mid = l + ((r - l) >> 1)
  process(arr, l, mid)
  process(arr, mid + 1, r)
  merge(arr, l, mid, r)
}

// 对l～r范围上排序
function merge (arr, l, mid, r) {
  let help = Array(r - l + 1).fill(0)
  let i = 0
  let p1 = l
  let p2 = mid + 1
  // 两侧指针不断移动，将最小值存入help数组中
  while (p1 <= mid && p2 <= r) {
    help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]
  }
  // 剩下的存入help中
  while (p1 <= mid) {
    help[i++] = arr[p1++]
  }
  while (p2 <= r) {
    help[i++] = arr[p2++]
  }
  // 替换arr[l ~ r]对应的数据
  for (i = 0; i < help.length; i++) {
    arr[l + i] = help[i]
  }
}

testSort(mergeSort)

