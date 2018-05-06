/* 冒泡排序
1. 流程
  a. 比较相邻的元素. 如果第一个比第二个大, 就交换位置
  b. 对每对相邻元素重复第一步直到最后一项, 结果为最后一项为最大值
  c. 重复以上两步, 无需遍历最后一个值, 因已确定为最大值
  d. 循环以上步骤, 直到没有一对数字可以比较
*/

function bubbleSort(array) {
  var length = arr.length,
    temp, 
    j;
  while (--length) { //只需循环 length - 1 次
    for (j = 0; j < length; j++) { //确保 j + 1 不越界
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
