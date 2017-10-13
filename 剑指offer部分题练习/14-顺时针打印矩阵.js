/*
  题目描述：
  输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，
  如果输入如下矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
  则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
 * */
function printMatrix(matrix) {
    if (matrix == null || matrix.length == 0) {
        return;
    }
    var rows = matrix.length;
    var cols = matrix[0].length;
    var start = 0;
    var result = [];

    while (cols > start * 2 && rows > start * 2) {
        var endX = cols - 1 - start;
        var endY = rows - 1 - start;
        //从左到右打印一行
        for (var i = start; i <= endX; i++) {
            result.push(matrix[start][i]);
        }
        //从上到下打印一行
        if (start < endY) {
            for (var i = start + 1; i <= endY; i++) {
                result.push(matrix[i][endX]);
            }
        }
        //从右到左打印一行
        if (start < endX && start < endY) {
            for (var i = endX - 1; i >= start; i--) {
                result.push(matrix[endY][i]);
            }
        }
        //从下到上打印一行
        if (start < endX && start < endY - 1) {
            for (var i = endY - 1; i >= start + 1; i--) {
                result.push(matrix[i][start]);
            }
        }
        start++;
    }
    return result;
}