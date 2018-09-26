/** * Array数组的flat方法实现 * var arr1 = [1, 2, [3, 4]]; * arr1.flat(); * // [1, 2, 3, 4] */// 1、forEach  循环遍历Array.prototype.myFlat = function(){    var arr = [];    this.forEach((item,index)=>{        if(Array.isArray(item)){            arr = arr.concat(item.myFlat());        }else{            arr.push(item);        }    })    return arr;}var arr1 = [1,[2,3,[4,5]],6,[7,8]];var res = arr1.myFlat();console.log(res);// 2、for循环Array.prototype.myFlat = function(){    var res = [];    for(var i=0;i<arr.length;i++){        if(Array.isArray(arr[i])){            res = res.concat(arr[i].myFlat());        }else{            res.push(arr[i]);        }    }    return res;}// 3、join()方法Array.prototype.myFlat = function(){    return this.join();}// 4、toString()方法Array.prototype.myFlat = function(){    return this.toString().split(',').map(function(item){        return +item;    })}// 5、使用 reduce实现Array.prototype.myFlat = function(){    return this.reduce(function(prev,item){        return prev.concat(Array.isArray(item) ? item.myFlat() : item);    })}