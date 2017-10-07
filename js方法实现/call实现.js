/*
 * 1、在对象中添加函数
 * 2、执行该函数
 * 3、删除该函数
 * */
Function.prototype.call2=function(context){
	var context = context || window;
	context.fn = this;
	var result;
	if(arguments.length === 1){
		result = context.fn();
	}else{
		var arr = [];
		for(var i=0;i<arguments.length;i++){
			arr.push('arguments['+i+']');
		}
		result = eval('context.fn('+arr+')');
	}
	delete context.fn;
	return result;
}
