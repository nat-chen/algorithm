/* 选择排序
1. 流程
  a. 以第一项作为当前最小值, 依次比较后面项大小, 比它小的互换位置, 从而得出最小值
  b. 从第二项开始, 重复以上步骤.
*/

function selectionSort(array) {
  var length = array.length,
    minIndex,
    minValue,
    temp,
    i, 
    j;
  for (i = 0; i < length - 1; i++) { //只剩最后一项时无需判断
    minIndex = i;
    minValue = array[minIndex];
    for (j = i + 1; j < length; j++) {
      if (array[j] < minValue) {
        minIndex = j;
        minValue = array[minIndex];
      }
    }
    temp = array[i];
    array[i] = minValue;
    array[minIndex] = temp;
  }
  return array;
}
