 function snake(n,m) {
       if(n<=0 || m<=0){
       	return;
       }
        let start = 0;
        let arr=[];
        for (let i = 0; i < n; i++) {
            arr[i] = [];
            for (let j = 0; j < m; j++) {
                arr[i][j] ="";
            }
        }
        arr[start][start] = 1;
        while ((n > start * 2) && (m > start*2)){
            arr = circleArr(arr, n, m, start);
            ++start;
        }
        console.log(arr);
        var str="";
        for(var i=0;i<arr.length;i++){
        	str = arr[i].join(" ");
        	console.log(str);
        }

    }
    function circleArr(arr, n, m, start) {
        let endX = m - 1 - start;
        let endY = n - 1 - start;
//            从左到右
        var leftTop = arr[start][start];
        if (start >= 1) {
            var leftTop = arr[start][start - 1] + 1;
        }
        for (let i = start, num = leftTop; i <= endX; i++) {
            arr[start][i] = num;
            num++;
        }
//        从上到下
        let rightTop = arr[start][endX];
        if (start < endY) {
            for (let i = start , num = rightTop; i <= endY; i++) {
                arr[i][endX] = num;
                num++;             
            }
        }
//        从右到左
        let rightBottom = arr[endY][endX];
        if (start < endX && start < endY) {
            for (let i = endX, num = rightBottom; i >= start; i--) {
                arr[endY][i] = num;
                num++;
            }
        }
//        从下到上
        let leftBottom = arr[endY][start];
        if (start < endX && start < endY - 1) {
            for (let i = endY, num = leftBottom; i >= start + 1; i--) {
                arr[i][start] = num;
                num++;
            }
        }
        return arr;
    }
    snake(4,4);