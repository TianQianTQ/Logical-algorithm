/*
 * 方法介绍：bind最简单的用法是创建一个新的函数，使这个函数无论怎样调用都有同样的this值 
 * 该方法从对象中拿出然后调用，并且希望this指向原来的对象
 * */
Function.prototype.bind2=function(context){
	if(typeof this !== 'function'){
		throw new Error("  ");
	}
	var self = this;   //获取调动bind的函数
	var args = Array.prototype.slice.call(arguments,1);
	var fNop = function(){};  //创建一个中转函数
	var fbound = function(){
		var finalArgs = args.concat(Array.prototype.slice.call(arguments));
		return self.apply(this instanceof fNop ? this : context,finalArgs);
	}
	fNop.prototype = self.prototype;
	fbound.prototype = new fNop();
	return fbound;
}
//注：绑定过的函数被new实例化后，需继承原函数的原型链方法，且绑定过程中提供的this值被忽略，继承原函数的this对象
//self.apply()第一个参数部分解释：
/*
newobj._proto_ = bindfun.prototype
newobj instanceof  bindfun  ==true
bindfun.prototype = new fnop()
newobj instanceof fnop = true
*/
