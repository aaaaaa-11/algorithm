/**
 * 插入排序
 * 每次保证数组首(尾)～当前位置元素有序
 * 例如：外层遍历到i位置，为了保证0～i位置有序：从i开始，每次比较相邻两元素大小，将最值尽可能移到左侧
 */

const testSort = require("./testSort");


/**
 * @param {number[] arr}
 * @return {number[]}
 */
function insertSort (a) {
  if (Array.isArray(a) && a.length > 1) {
    let temp;
    for (let i = 1; i < a.length; i++) {
      for (let j = i; j > 0 && a[j] < a[j - 1]; j--) {
        temp = a[j];
        a[j] = a[j-1];
        a[j-1] = temp
      }
    }
    return a
  } else {
    return a
  }
}
testSort(insertSort)
