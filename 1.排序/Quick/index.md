目录：

- [快排序](#快排序)
  - [荷兰国旗问题](#荷兰国旗问题)


# 快排序

## 荷兰国旗问题

1. 给定数组arr，和一个数num，将小于等于num的数放数组左边，大于num的数放右边，要求额外空间复杂度$O(1)$，时间复杂度O(N)

    思路：

      划定一块小于等于num区域，用指针p表示该区域的右边界，

      用另一个指针i向右移动，碰到大于num的数，i++；碰到小于等于num的数，把这个数和p的下一个数做交换，然后p++、i++

    这个过程中，随着i不断向右移动，小于等于num区域会慢慢扩大

    [-> 代码实现](./flags.js)

2. 给定数组arr，和一个数num，将小于num的数放数组左边，大于num的数放数组右边，等于num的数放数组中间，要求额外空间复杂度$O(1)$，时间复杂度$O(N)$

    思路：

      左侧划定一块小于num的区域，用指针p1表示该区域的右边界

      右侧划定一块大于num的区域，用指针p2表示该区域的左边界

      用另一个指针i向右移动，碰到大于num的数，扩充大于num区域（交换i和p2前一个位置的数），p2--；碰到小于num的区域，扩充小于num的区域（交换i和p1后一个数），p1++，且i继续向前移动i++；碰到等于num的数，i++

      这个过程中，随着i不断向右移动，数组左边的小于num区和右边的大于num区不断扩大，中间是等于num区被推着向右移动，当等于num区和大于num区要重叠的时候（i === p2），可以停止不移动了

      [-> 代码实现](./flags.js)
