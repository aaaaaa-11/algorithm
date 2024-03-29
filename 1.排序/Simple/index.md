目录：

- [选择排序](#选择排序)
- [冒泡排序](#冒泡排序)
- [插入排序](#插入排序)
- [扩展](#扩展)
  - [异或](#异或)
  - [二分法](#二分法)
  - [对数器](#对数器)

# 选择排序
给定位置，找到对应应该排在这的元素

例：给一个长度为n的数组，按从小到大排序

方法：
数组长度n，索引从0 ～ n -1
1. 对于位置0，遍历数组，找到最小的元素，和索引为0的元素交换
2. 对于位置1，遍历1～n-1位置，找到最小元素，和索引1的元素交换
3. ……
4. 对于位置n-2，遍历索引为n-2 ~ n-1，找到最小元素，和索引n-2元素交换

常数操作：
n + (n - 1) + (n - 2) + ... + 1 = n(n + 1)/2

时间复杂度：O(N<sup>2</sup>)  
额外空间复杂度：O(1)  
[代码实现](./selectionSort.js)


# 冒泡排序
通过不断交换相邻元素，来移动最值

例：给一个长度为n的数组，按从小到大排序

方法：
1. 比较0、1元素，将大的放到1位置；比较1、2位置，将大的放到2位置；……，比较n-2、n-1位置，将大的放到n-1位置
2. 比较0、1元素，将大的放到1位置；……，比较n-3、n-2位置，将大的放到n-2位置
3. ……
4. 比较0、1元素，将大的放到1位置

常数操作：(n - 1) + (n - 2) + ... + 1 = n(n - 1)/2

时间复杂度：O(N<sup>2</sup>)  
额外空间复杂度：O(1)  
[代码实现](./bubbleSort.js)


# 插入排序
每次保证一段位置上有序

例：给定一个长度为n的数组按从小到大排序

方法：
1. 保证0～1位置有序：比较1、0元素，如果1大于0元素，走下一步；否则，交换1、0，，交换后来到0位置，左侧没有元素了，走下一步
2. 保证0～2位置有序：比较2、1元素，如果2大于1元素，走下一步；否则，交换2、1，，交换后来到1位置，重复第1步
3. ……
4. 保证0～n-1位置有序：比较n-1、n-2元素，如果n-1大于n-2元素，停止；否则，交换n-2、n-1，，交换后来到n-2位置，重复上一步

常数操作：极限情况下1 + 2 + ... + n - 1 = n(n - 1)/2

时间复杂度：O(N<sup>2</sup>)  
额外空间复杂度：O(1)  
[代码实现](./insertSort.js)

------------------------------------------------

# 扩展
## 异或
相同为0，不同为1
```
1 ^ 1 = 0
0 ^ 0 = 0
1 ^ 0 = 1
0 ^ 1 = 1
```

js按位异或
```javascript
// ^ 异或
// ^= 异或并赋值
let a = 0
a ^= 3 // 3
a ^= 5 // 6
// 十进制   二进制
// 0       0000
// 3       0011
a ^= 3  // 0011   a = 3
// 5       0101
a ^= 5  // 0110   a = 6
a ^= 6  // 0011   a= 3
a ^= 6  // 0101   a = 5

a = 3, b = 5
a ^ b // a = 6
a ^ b // a = 3
```

为什么三次异或可以交换变量值

**异或**操作可以认为是**不带进位的二进制加法**：  
0+0=0，1+0=1，0+1=0，1+1=0

异或的规律：
1. 归零律：a ^ a = 0
2. 恒等律：a ^ 0 = a
3. 交换律：a ^ b = b ^ a
4. 结合律：a ^ b ^ c = (a ^ b) ^ c = a ^ (b ^ c)
5. 自反（由上面推导出来）：a ^ b ^ b = a ^ (b ^ b) = a ^ 0 = a

所以三次异或：
```javascript
a = a ^ b
b = a ^ b // = (a ^ b) ^ b = a
a = a ^ b // (a ^ b) ^ a = b ^ a ^ a = b
```

[demo](./xor_demo.js)

## 二分法
每次从开始～结束位置对半分
例：给定一个从小到大排序的数组长度为n，找到给定元素num是否在数组中

二分法：
1. 先将数组平分，两边各约为n/2，看num如果是中间这个元素，则返回；否则看num在哪一边
2. 然后再平分，看num是否为中间元素，或在哪一边，
3. ……

常数操作：n/(2 * 2 * ... * 2) => log<sup>2</sup>n

时间复杂度：O(logN)  
[demo](./dichotomy.js)

## 对数器
用来校准方法

有一个方法a和一个方法b
其中a是需要测的方法，b是已经实现了的（一般是比较容易实现的方法）  
实现一个随机样本生产器，产生的随机样本同时放到a、b里面跑，  
如果有哪一次结果不一样，说明a或b错误，通过调试等校准方法a或b  
当随机样本数量最够多，测试次数也足够多时，说明a正确

[demo](./testSort.js)

下一节：[O(NlogN)排序](../NlogN/index.md)