# 递归
demo: 给定数组找最大值

递归实现：对数组二分，获取二分后两边最大值，再比较最终的最大值；某一边求最大值也是使用二分求两侧最大值......

[代码实现](./recursion.js)
![recursion](../images/recursion.png)
时间复杂度：

master公式：

满足 $T(N) = a*T(\frac{N}{b}) + O(N^d)$ 时

1) $log_ba > d => O(N^{log_ba})$

2) $log_ba < d => O(N^d)$

3) $log_ba = d => O(N^d*logN)$

补充阅读：[https://www.gocalf.com/blog/algorithm-complexity-and-master-theorem.html](https://www.gocalf.com/blog/algorithm-complexity-and-master-theorem.html)

对于上面的demo，

```js
// l～r长度为二分结果, 所以b = 2
function process (arr, l, r) {
	if (l === r) return arr[l] // 常数操作
	let mid = l + ((r - l) >> 1) // 常数操作
	let leftMax = process(arr, l, mid) // 子问题调用1次
	let rightMax = process(arr, mid + 1, r) // 子问题再调用1次，所以a = 2
	return process(leftMax, rightMax) // 常数操作，总的常数操作和N无关，只调用了有限次，d=0
}
```

$T(N) = 2 * T(\frac{N}{2}) + O(1)$


## 扩展 -- 右移 & 左移
**[左移操作符 (`<<`)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Left_shift)**
 将第一个操作数向左移动指定位数，左边超出的位数将会被清除，右边将会补零

**[右移操作符 (`>>`)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Right_shift)**
 是将一个操作数按指定移动的位数向右移动，右边移出位被丢弃，左边移出的空位补符号位（最左边那位）

可以参考十进制：

```javascript
对于十进制：2304 --左移1位,右边补0--> 23040
```

可以这样理解：
数值左移一位 ↔ 小数点右移一位，也就是原来每一位$*10$

```javascript
2304 = 2000 + 300 + 0 + 4$

左移（整体前进一位 = 每一位*10）：

23040 = 2000*10^1 + 300 *10^1 + 0 * 10^1 + 4 * 10^1 = 2304 * 10^1
```

即，左移$n$位，数据$*10^n$，右移$n$位，数据$/10^n$**

对于二进制，**左移$n$位，数据$*2^n$**

```javascript
0110 --左移2位，右边补0--> 1100 （3 -> 12 = 3 * 2^2）
```

右移$n$位，数据$/2^n$

```javascript
0000 1001 -- 右移2位，左边用符号位补，右边移出位被丢弃 -> 0000 0010 (9 -> 2，即 9>>2 = 2)

1111 0111 -- 右移2位，左边用符号位补，右边移出位被丢弃 -> 1111 1101 (-9 -> -3, 即 -9>>2 = -3)
```

注意：对于左移，需要考虑**溢出**问题

例如，对于1个字节，只有8位
```javascript
255: 1111 1111 --左移1位--> 1 1111 1110 --溢出1位，去掉--> 1111 1110 = 254
```