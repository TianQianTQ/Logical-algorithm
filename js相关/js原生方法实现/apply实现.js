/*
 * 与call实现方法类似，接收参数不同
 * 1、在对象中添加函数
 * 2、执行该函数
 * 3、删除该函数
 * */
Function.prototype.apply2=function(context,arr){
	var context = context || window;
	context.fn = this;
	var result;
	if(!arr){
		result = context.fn();
	}else{
		var args = [];
		for(var i=0;i<arr.length;i++){
			args.push('arr['+i+']');
		}
		result = eval('context.fn('+args+')');
	}
	delete context.fn();
	return result;
}
