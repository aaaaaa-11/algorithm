// 生成随机长度，随机元素数组
function generateRandomArray (maxSize, maxValue) {
  let arr = new Array(Math.round(Math.random() * maxSize))
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.round(Math.random() * maxValue) -  Math.round(Math.random() * maxValue) // 两个随机数相减，可以保证随机正负
  }
  return arr
}

// 判断两数组元素是否相同
function isSame (arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length != arr2.length) return false
  if (!arr1.length && !arr2.length) return true
  return arr1.some((item, i) => arr1[i] === arr2[i])
}

// 验证排序算法
function testSort (fun) {
  let testTimes = 500000 // 测试次数
  const maxSize = 1000
  const maxValue = 1000
  for (let time = 0; time < testTimes; time++) {
    // 生产长度随机、元素大小随机的数组
    const arr = generateRandomArray(maxSize, maxValue)
    const arr2 = JSON.parse(JSON.stringify(arr))
    const res1 = fun(arr)
    const res2 = arr2.sort((a, b) => a - b)
    if (!isSame(res1, res2)) {
      console.log('error----', arr, res1, res2);
      return
    }
    console.log('ok');
  }
  console.log('finally ok');
  return
}

module.exports = testSort
