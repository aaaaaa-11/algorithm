// 生成随机长度，随机元素数组
function generateRandomArray (maxSize, maxValue) {
  let arr = new Array(Math.round(Math.random() * maxSize))
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.round(Math.random() * maxValue) -  Math.round(Math.random() * maxValue) // 两个随机数相减，可以保证随机正负
  }
  return arr
}

// 验证获取最大值算法
function testGetMax (fun) {
  let testTimes = 500000 // 测试次数
  const maxSize = 1000
  const maxValue = 1000
  for (let time = 0; time < testTimes; time++) {
    // 生产长度随机、元素大小随机的数组
    const arr = generateRandomArray(maxSize, maxValue)
    const res1 = fun(arr)
    const res2 = Math.max(...arr)
    if (res1 !== res2) {
      console.log('error----', arr, res1, res2);
      return
    }
    console.log('ok');
  }
  console.log('finally ok');
  return
}

module.exports = testGetMax
