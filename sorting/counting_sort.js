/* 计数排序
1. 流程
  a. 找出数组中最大值和最小值
  b. 遍历数组, 将每个数组项的值作为缓存数组的索引, 而出现的次数作为值
  c. 从最小值开始依次将缓存数组不为 undefined 项清零
*/

function countingSort(array) {
  var length = array.length,
    countArr = [],
    result = [],
    max,
    min,
    i,
    j;

  max = Math.max.apply(this, array);
  min = Math.min.apply(this, array);
  
  for (i = 0; i < length; i++) {
    countArr[array[i]] = (countArr[array[i]] + 1) || 1;
  }

  for (j = min; j <= max; j++) {
    while (countArr[j] && countArr[j]-- > 0) {
      result.push(j);
    }
  }

  return result; 
}
