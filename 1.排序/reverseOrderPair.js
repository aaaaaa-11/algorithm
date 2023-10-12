/* 求逆序对 */

function reverseOrderPair (arr) {
  const resArr = [] // 所有逆序对
  if (!Array.isArray(arr) || arr.length < 1) return resArr

  return resArr.concat(process(arr, 0, arr.length - 1))
}

function process (arr, L, R) {
  if (L === R) return []

  const mid = L + ((R - L) >> 1)

  return [
    ...process(arr, L, mid),
    ...process(arr, mid + 1, R),
    ...merge(arr, L, mid, R)
  ]
}

function merge (arr, L, M, R) {
  const resArr = [] // 存储逆序对
  const help = [] // 辅助数组
  let p1 = L // 左指针
  let p2 = M + 1 // 右指针
  let i = 0
  while (p1 <= M && p2 <= R) {
    if (arr[p1] > arr[p2]) { // 如果左边的数比右边大，则左边的数比右指针后面的数都大（因为两边排好序了）
      // 如果这里求逆序对的数量，则：count += R - p2 + 1
      for (let j = p2; j <= R; j++) {
        resArr.push([arr[p1], arr[j]])
      }
    }
    help[i++] = arr[p1] > arr[p2] ? arr[p1++] : arr[p2++]
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
  return resArr
}

// const arr = [1, 3, 9, 2, 8, 6, 4, 5, 7, 2, 0]
// const res = reverseOrderPair(arr)

// console.log('逆序对数量：', res.length);
// console.log('逆序对', res);
